import Image from "next/image";

interface PropsCustomIcon {
  path: string;
  alt?: string;
  height?: number;
}

export const CustomIcon = ({ path, alt, height }: PropsCustomIcon) => {
  return <Image src={path} alt={alt ?? "icon"} height={height} />;
};
