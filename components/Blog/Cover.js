import Image from 'next/image'

export default function Cover({ src, alt }) {
  return (
    <div className="pb-8 space-y-3">
      <div className='relative h-96 w-full'>
        <Image
          fill
          quality={100}
          src={`/images/${src}`}
          alt={alt}
          className="object-cover object-center"
          loading="lazy"
        />
      </div>
      <p className="text-center text-sm italic opacity-80">{alt}</p>
    </div>
  );
}
