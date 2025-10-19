import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div>
      <Image 
        src="https://i.imgur.com/BZIfwPF.png"
        alt="Fusion Pay Logo"
        width={160}
        height={40}
        className="w-40 h-auto"
      />
    </div>
  )
}
