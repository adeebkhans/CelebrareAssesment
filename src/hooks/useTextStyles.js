import { useState } from 'react';

export const useTextStyles = () => {
  const [styles, setStyles] = useState({
    fontSize: 24,
    fontFamily: 'Arial',
    bold: false,
    italic: false,
    underline: false,
    alignment: 'center'
  });

  const toggleStyle = (styleName) => {
    setStyles(prev => ({
      ...prev,
      [styleName]: !prev[styleName]
    }));
  };

  const updateStyle = (styleName, value) => {
    setStyles(prev => ({
      ...prev,
      [styleName]: value
    }));
  };

  return {
    styles,
    toggleStyle,
    updateStyle
  };
};