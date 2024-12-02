/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const DraggableText = ({ 
  text, 
  position, 
  styles, 
  onMouseDown 
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        fontFamily: styles.fontFamily,
        fontSize: `${styles.fontSize}px`,
        fontWeight: styles.bold ? 'bold' : 'normal',
        fontStyle: styles.italic ? 'italic' : 'normal',
        textDecoration: styles.underline ? 'underline' : 'none',
        textAlign: styles.alignment
      }}
      className="cursor-move select-none p-2 bg-white rounded shadow"
      onMouseDown={onMouseDown}
    >
      {text}
    </div>
  );
};

export default DraggableText;