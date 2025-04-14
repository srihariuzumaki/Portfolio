import { useState } from 'react';

/**
 * MagnifyText Component
 * Splits text into individual words or characters and magnifies only the one being hovered.
 * 
 * @param {Object} props
 * @param {string} props.text - The text to magnify
 * @param {string} [props.className] - Optional CSS class for styling
 * @param {string} [props.tag='p'] - HTML tag to render (p, h1, h2, etc.)
 * @param {boolean} [props.characterLevel=false] - If true, magnifies individual characters instead of words
 * @param {number} [props.scale=1.3] - The scale factor for magnification
 * @returns {JSX.Element} - Rendered component
 */
const MagnifyText = ({ 
  text, 
  className = '', 
  tag = 'p', 
  characterLevel = false,
  scale = 1.3
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Split text into words or characters based on the characterLevel prop
  const textParts = characterLevel ? 
    text.split('').map(char => char === ' ' ? '\u00A0' : char) : 
    text.split(' ');
  
  // Handle mouse enter for a specific word/character
  const handlePartEnter = (index) => {
    setHoveredIndex(index);
  };
  
  // Handle mouse leave
  const handlePartLeave = () => {
    setHoveredIndex(null);
  };
  
  // Generate style for each word/character
  const getPartStyle = (index) => {
    const isHovered = index === hoveredIndex;
    
    return {
      display: 'inline-block',
      transform: isHovered ? `scale(${scale})` : 'scale(1)',
      transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transformOrigin: 'bottom center',
      position: 'relative',
      zIndex: isHovered ? 5 : 'auto',
    };
  };

  // Render the appropriate HTML tag with the words/characters
  const Tag = tag;
  
  return (
    <Tag className={className}>
      {textParts.map((part, index) => (
        <span
          key={index}
          style={getPartStyle(index)}
          onMouseEnter={() => handlePartEnter(index)}
          onMouseLeave={handlePartLeave}
          className={characterLevel ? "magnify-char" : "magnify-word"}
        >
          {part}
          {!characterLevel && index !== textParts.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default MagnifyText; 