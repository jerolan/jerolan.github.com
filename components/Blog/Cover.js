import Image from "next/image";

export default function Cover({ src, alt }) {
  return (
    <figure className="article-cover">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          src={`/images/${src}`}
          alt={alt}
          className="object-contain object-center"
        />
      </div>
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}
