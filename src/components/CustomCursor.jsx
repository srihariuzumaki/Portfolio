import { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        backgroundColor: '#D3D3D3', 
        scale: 2, // Enlarge the cursor
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1, // Revert to original size
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    // Special handlers for text elements
    const handleTextEnter = () => {
      // Make cursor transparent when hovering over text
      gsap.to(cursor, {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        scale: 1.5,
        mixBlendMode: 'difference',
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleTextLeave = () => {
      // Restore cursor
      gsap.to(cursor, {
        backgroundColor: 'white',
        scale: 1,
        mixBlendMode: 'normal',
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add event listeners to specific sections
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add event listeners to text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button, label');
    textElements.forEach((element) => {
      // Skip if it's already a hover target
      if (!element.classList.contains('hover-target')) {
        element.addEventListener('mouseenter', handleTextEnter);
        element.addEventListener('mouseleave', handleTextLeave);
      }
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      textElements.forEach((element) => {
        if (!element.classList.contains('hover-target')) {
          element.removeEventListener('mouseenter', handleTextEnter);
          element.removeEventListener('mouseleave', handleTextLeave);
        }
      });
    };
  }, []);

  return <div id="custom-cursor" className="custom-cursor"></div>;
};

export default CustomCursor;
