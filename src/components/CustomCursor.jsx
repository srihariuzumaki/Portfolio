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

    document.addEventListener('mousemove', handleMouseMove);

    // Add event listeners to specific sections
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div id="custom-cursor" className="custom-cursor"></div>;
};

export default CustomCursor;
