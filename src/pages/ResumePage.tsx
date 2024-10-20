import { useEffect } from 'react';

function ResumePage() {
  useEffect(() => {
    window.open('https://drive.google.com/file/d/1jt06r0O0xdKFiahWRsxoGF6fvwMsiamQ/view', '_blank');  }, []);

  return null;
}

export default ResumePage;
