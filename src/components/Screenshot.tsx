interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

const Screenshot = ({ src, alt, caption }: ScreenshotProps) => {
  return (
    <figure className="my-6">
      <div className="border border-border rounded-lg overflow-hidden bg-muted">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="text-sm text-muted-foreground mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Screenshot;
