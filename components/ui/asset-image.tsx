import Image, { type ImageProps } from "next/image";
import sizes from "@/data/asset-sizes.json";
type Props = Omit<ImageProps, "width" | "height"> & {
  width?: number | `${number}`;
  height?: number | `${number}`;
};
export default function AssetImage({
  src,
  width,
  height,
  alt,
  ...props
}: Props) {
  const size =
    typeof src === "string"
      ? (sizes as Record<string, { width: number; height: number }>)[src]
      : undefined;
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? size?.width ?? 24}
      height={height ?? size?.height ?? 24}
      unoptimized
      {...props}
    />
  );
}
