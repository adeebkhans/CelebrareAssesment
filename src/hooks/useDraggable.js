import { useState, useEffect } from 'react';

export const useDraggable = () => {
  const [position, setPosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 - 100 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 - 20 : 0
  });

  const [dragState, setDragState] = useState({
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  });

  // Responsive resize handling
  useEffect(() => {
    const handleResize = () => {
      setPosition({
        x: window.innerWidth / 2 - 100,
        y: window.innerHeight / 2 - 20
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Drag event listeners
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragState.isDragging) return;
      const newX = e.clientX - dragState.offsetX;
      const newY = e.clientY - dragState.offsetY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setDragState(prev => ({
        ...prev,
        isDragging: false
      }));
    };

    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragState.isDragging, dragState.offsetX, dragState.offsetY]);

  const startDrag = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDragState({
      isDragging: true,
      offsetX,
      offsetY
    });
  };

  return {
    position,
    startDrag
  };
};