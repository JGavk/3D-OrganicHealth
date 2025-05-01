import { useRef, useEffect } from 'react';

function useControls () {
    const controls = useRef({
        forward: false,
        backward: false,
        left: false,
        right: false,
        up: false,
        down: false,
        isRotating: false,
        rotationDelta: { x: 0, y: 0 },
        lastMousePos: { x: 0, y: 0 }
      });
      useEffect(() => {
        const handleKeyDown = (e) => {
          switch (e.key.toLowerCase()) {
            case 'q': controls.current.forward = true; break;
            case 'e': controls.current.backward = true; break;
            case 'a': controls.current.left = true; break;
            case 'd': controls.current.right = true; break;
            case 'w': controls.current.up = true; break;
            case 's': controls.current.down = true; break;
          }
        };
    
        const handleKeyUp = (e) => {
          switch (e.key.toLowerCase()) {
            case 'q': controls.current.forward = false; break;
            case 'e': controls.current.backward = false; break;
            case 'a': controls.current.left = false; break;
            case 'd': controls.current.right = false; break;
            case 'w': controls.current.up = false; break;
            case 's': controls.current.down = false; break;
          }
        };
    
 
        const handleMouseDown = (e) => {
          if (e.button === 0) {
            controls.current.isRotating = true;
            controls.current.lastMousePos = {
              x: e.clientX,
              y: e.clientY
            };
          }
        };
    
        const handleMouseMove = (e) => {
          if (!controls.current.isRotating) return;
          
          controls.current.rotationDelta = {
            x: e.clientX - controls.current.lastMousePos.x,
            y: e.clientY - controls.current.lastMousePos.y
          };
          
          controls.current.lastMousePos = {
            x: e.clientX,
            y: e.clientY
          };
        };
    
        const handleMouseUp = () => {
          controls.current.isRotating = false;
          controls.current.rotationDelta = { x: 0, y: 0 };
        };
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
          window.removeEventListener('mousedown', handleMouseDown);
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
      }, []);
    
      return controls;
}

export default useControls;