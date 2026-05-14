import { useEffect, useRef, useState } from 'react';

const pad4 = (n: number) => String(n).padStart(4, '0');

export function useFrameLoader(
  totalFrames: number,
  prefix = '/frames/frame_',
  ext = '.jpg',
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedPercent, setLoadedPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const images = new Array<HTMLImageElement>(totalFrames);
    imagesRef.current = images;

    const onOne = () => {
      count++;
      if (cancelled) return;
      setLoadedPercent(Math.round((count / totalFrames) * 100));
      if (count === totalFrames) setIsReady(true);
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = `${prefix}${pad4(i + 1)}${ext}`;
      img.onload = onOne;
      img.onerror = onOne;
      images[i] = img;
    }

    return () => { cancelled = true; };
  }, [totalFrames, prefix, ext]);

  return { images: imagesRef, loadedPercent, isReady };
}
