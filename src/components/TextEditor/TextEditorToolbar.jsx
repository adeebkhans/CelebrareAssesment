/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Undo2, Redo2 } from 'lucide-react';

const TextEditorToolbar = ({ 
  text, 
  onUndo, 
  onRedo, 
  canUndo, 
  canRedo, 
  fontFamily, 
  onFontFamilyChange 
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-white shadow-md p-2 flex justify-between items-center z-20 h-12">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onUndo} 
          className="hover:bg-gray-200 p-2 rounded disabled:opacity-50"
          disabled={!canUndo}
        >
          <Undo2 className="w-5 h-5" />
        </button>
        <button 
          onClick={onRedo} 
          className="hover:bg-gray-200 p-2 rounded disabled:opacity-50"
          disabled={!canRedo}
        >
          <Redo2 className="w-5 h-5" />
        </button>
      </div>

      <select 
        value={fontFamily} 
        onChange={(e) => onFontFamilyChange(e.target.value)} 
        className="border p-1 rounded w-40"
      >
        {['Arial', 'Times New Roman', 'Courier', 'Verdana', 'Georgia'].map(family => (
          <option key={family} value={family}>{family}</option>
        ))}
      </select>
    </div>
  );
};

export default TextEditorToolbar;