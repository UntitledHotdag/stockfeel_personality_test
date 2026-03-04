import { useState } from 'react';

interface ImageSlotProps {
  src?: string;
  alt?: string;
  variant?: 'default' | 'start' | 'result';
}

export default function ImageSlot({ src, alt = '', variant = 'default' }: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  const containerClasses = [
    'img-slot',
    variant === 'start' ? 'img-slot--start' : '',
    variant === 'result' ? 'img-slot--result' : '',
    !showImage ? 'img-slot--placeholder' : '',
    showImage && !loaded ? 'img-slot--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={`img-slot__img${loaded ? ' img-slot__img--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      ) : (
        <span>Image</span>
      )}
    </div>
  );
}
