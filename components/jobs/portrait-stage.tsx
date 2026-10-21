import Image from "next/image";
import { asset } from "@/lib/site";

type Photo = { src: string; alt: string };

// Accent stage for the contractor pages: a phone in the middle, cut off by the
// bottom edge, with four studio portraits around it on wide screens.
export function PortraitStage({ photos, children }: { photos: Photo[]; children: React.ReactNode }) {
  return (
    <div
      className="rise relative mt-14 h-[480px] overflow-hidden rounded-[2rem] bg-accent sm:h-[540px] lg:mt-16 lg:h-[560px]"
      style={{ animationDelay: "280ms" }}
    >
      <div className="absolute inset-y-0 left-0 hidden w-[calc(50%-200px)] lg:block">
        <Portrait photo={photos[0]} className="absolute top-12 right-[46%] left-10" />
        <Portrait photo={photos[1]} className="absolute top-36 right-6 left-[58%]" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-[calc(50%-200px)] lg:block">
        <Portrait photo={photos[2]} className="absolute top-36 right-[58%] left-6" />
        <Portrait photo={photos[3]} className="absolute top-12 right-10 left-[46%]" />
      </div>
      <div className="absolute top-10 left-1/2 w-[300px] -translate-x-1/2 sm:top-12 sm:w-[340px]">
        <div className="rounded-t-[48px] bg-[#0b0e16] p-[9px] pb-0 shadow-float">{children}</div>
      </div>
    </div>
  );
}

function Portrait({ photo, className }: { photo: Photo; className: string }) {
  return (
    <div className={`aspect-[4/5] overflow-hidden rounded-tile bg-[#4563a6] shadow-soft ${className}`}>
      <div className="relative h-full w-full">
        <Image src={asset(photo.src)} alt={photo.alt} fill sizes="200px" className="object-cover object-[50%_20%]" />
      </div>
    </div>
  );
}
