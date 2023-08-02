import { useEffect } from 'react';

const UnloadWarning = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Custom warning message for the prompt
      event.preventDefault();
      event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    };

    const handleUnload = () => {
      // Alert message for the tab closing event
      alert('You are leaving the page.');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  return null; // The component doesn't render anything
};

export default UnloadWarning;
