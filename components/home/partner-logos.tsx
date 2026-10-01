import AssetImage from "@/components/ui/asset-image";
const logos = ["c93c5","1f085","a0f90","2a59b","f224f"];
export default function PartnerLogos() {return <section className="partners" aria-label="Our partners"><div>{logos.map((logo,index)=><AssetImage key={logo} src={`/assets/${logo}.svg`} alt={`Partner ${index+1}`} />)}</div></section>;}
