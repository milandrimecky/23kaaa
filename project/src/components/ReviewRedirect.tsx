import { useEffect } from 'react';

export default function ReviewRedirect() {
  useEffect(() => {
    window.location.href = 'https://search.google.com/local/writereview?placeid=ChIJs_BGLC2fFEcRxA8rQAbfrqE';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <p className="text-xl text-gray-700 mb-2">Presmerovávam na Google recenzie...</p>
        <p className="text-sm text-gray-500">Ďakujem za tvoj čas! 🙏</p>
      </div>
    </div>
  );
}
