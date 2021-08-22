export default function Cover({ src, alt }) {
  return (
    <div className="pb-8 space-y-3">
      <img
        src={`/images/${src}`}
        alt={alt}
        className="object-cover h-96 w-full"
        loading="lazy"
      />
      <p className="text-center text-sm italic opacity-80">{alt}</p>
    </div>
  );
}
