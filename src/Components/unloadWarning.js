import React, { useEffect } from 'react';

const UnloadWarning = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // Most browsers require the return value to be set for the prompt to show
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // The component doesn't render anything
};

export default UnloadWarning;
