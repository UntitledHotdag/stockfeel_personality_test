import { useState } from 'react';

interface ImageSlotProps {
  src?: string;
  alt?: string;
  variant?: 'default' | 'start' | 'result';
}

export default function ImageSlot({ src, alt = '', variant = 'default' }: ImageSlotProps) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  const classes = [
    'img-slot',
    variant === 'start' ? 'img-slot--start' : '',
    variant === 'result' ? 'img-slot--result' : '',
    !showImage ? 'img-slot--placeholder' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setErrored(true)} />
      ) : (
        <span>Image</span>
      )}
    </div>
  );
}
