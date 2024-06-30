import { useEffect } from 'react';

function ResumePage() {
  useEffect(() => {
    window.open('https://drive.google.com/file/d/197q4N5ilp9L__hYNv7GHktv3XvmqvqHa/view', '_blank');  }, []);

  return null;
}

export default ResumePage;
