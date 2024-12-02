/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import TextEditorToolbar from './TextEditorToolbar';
import TextStyleControls from './TextStyleControls';
import DraggableText from './DraggableText';
import { useTextHistory } from '../../hooks/useTextHistory';
import { useTextStyles } from '../../hooks/useTextStyles';
import { useDraggable } from '../../hooks/useDraggable';

const TextEditor = () => {

  const { text, setText, undo, redo, canUndo, canRedo } = useTextHistory();
  const { styles, toggleStyle, updateStyle } = useTextStyles();
  const { position, startDrag } = useDraggable();

  return (
    <div className="fixed inset-0 bg-gray-100 overflow-hidden">
      {/* Top Toolbar */}
      <TextEditorToolbar
        text={text}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        fontFamily={styles.fontFamily}
        onFontFamilyChange={(family) => updateStyle('fontFamily', family)}
      />

      {/* Text Input */}
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 border p-2 rounded text-center bg-gray-100 shadow-lg"
        placeholder="Enter your text"
      />

      {/* Draggable Text */}
      <DraggableText
        text={text}
        position={position}
        styles={styles}
        onMouseDown={startDrag}
      />

      {/* Bottom Style Controls */}
      <TextStyleControls
        styles={styles}
        onToggleStyle={toggleStyle}
        onUpdateStyle={updateStyle}
      />
    </div>
  );
};

export default TextEditor;