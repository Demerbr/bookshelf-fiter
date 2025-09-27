import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  priority = false,
  fill = false 
}: OptimizedImageProps) {
  const commonProps = {
    src,
    alt,
    className,
    loading: priority ? "eager" as const : "lazy" as const,
    priority,
    placeholder: "blur" as const,
    blurDataURL: BLUR_DATA_URL,
  };

  if (fill) {
    return (
      <Image 
        {...commonProps}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
      />
    );
  }

  return (
    <Image 
      {...commonProps}
      width={width || 200}
      height={height || 300}
      alt={alt}
    />
  );
}
