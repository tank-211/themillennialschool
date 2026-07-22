import logo from "@/assets/brand/logo.jpeg";

interface LogoProps {
  className?: string;
  alt?: string;
}

export function Logo({
  className = "h-11 w-11",
  alt = "The Millennial School crest",
}: LogoProps) {
  return (
    <img
      src={logo}
      alt={alt}
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}