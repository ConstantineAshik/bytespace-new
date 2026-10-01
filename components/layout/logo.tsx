import Link from "next/link";
import AssetImage from "@/components/ui/asset-image";
export default function Logo({
  footer = false,
  signup = false,
}: {
  footer?: boolean;
  signup?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`bytespace-logo ${footer || signup ? "logo-dark" : ""}`}
    >
      <AssetImage
        src={
          signup
            ? "/assets/bytespace-logo-purple.svg"
            : "/assets/bytespace-logo-lime.svg"
        }
        alt=""
        width={28.875}
        height={31.5}
      />
      <span>ByteSpace</span>
    </Link>
  );
}
