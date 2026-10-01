import Link from "next/link";
import AssetImage from "@/components/ui/asset-image";
export default function Logo({footer=false}:{footer?:boolean}){return <Link href="/" aria-label="ByteSpace home" className={`bytespace-logo ${footer?"footer-logo":""}`}><AssetImage src={footer?"/assets/footer-logo.svg":"/assets/b8d7a.svg"} alt="" width={28.875} height={31.5}/><span>ByteSpace</span></Link>;}
