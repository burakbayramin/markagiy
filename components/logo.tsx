import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/assets/mglogo.png"
        alt="SDFM 2520"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
