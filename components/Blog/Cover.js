import Image from "next/image";

export default function Cover({ src, alt }) {
  return (
    <div className="pb-8 space-y-3">
      <div className="relative h-96">
        <Image layout="fill" src={src} alt={alt} className="object-cover" />
      </div>
      <p className="text-center text-sm italic opacity-80">{alt}</p>
    </div>
  );
}
