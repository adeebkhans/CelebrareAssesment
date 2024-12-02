/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Bold, Italic, Underline, Type, AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

const TextStyleControls = ({ 
  styles, 
  onToggleStyle, 
  onUpdateStyle 
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-center items-center space-x-4 z-20 h-12">
      {/* Font Size */}
      <div className="flex items-center">
        <Type className="w-5 h-5 mr-2" />
        <select 
          value={styles.fontSize} 
          onChange={(e) => onUpdateStyle('fontSize', parseInt(e.target.value))} 
          className="border p-1 rounded w-24"
        >
          {[16, 24, 32, 48, 64].map(size => (
            <option key={size} value={size}>{size}px</option>
          ))}
        </select>
      </div>

      {/* Text Style Toggles */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => onToggleStyle('bold')}
          className={`p-2 rounded ${styles.bold ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <Bold className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onToggleStyle('italic')}
          className={`p-2 rounded ${styles.italic ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <Italic className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onToggleStyle('underline')}
          className={`p-2 rounded ${styles.underline ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <Underline className="w-5 h-5" />
        </button>
      </div>

      {/* Alignment Buttons */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => onUpdateStyle('alignment', 'left')}
          className={`p-2 rounded ${styles.alignment === 'left' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <AlignLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onUpdateStyle('alignment', 'center')}
          className={`p-2 rounded ${styles.alignment === 'center' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <AlignCenter className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onUpdateStyle('alignment', 'right')}
          className={`p-2 rounded ${styles.alignment === 'right' ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
        >
          <AlignRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TextStyleControls;