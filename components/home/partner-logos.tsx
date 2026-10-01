import AssetImage from "@/components/ui/asset-image";
const logos = [
  "partner-logo-1",
  "partner-logo-2",
  "partner-logo-3",
  "partner-logo-4",
  "partner-logo-5",
];
export default function PartnerLogos() {
  return (
    <section className="partners" aria-label="Our partners">
      <div>
        {logos.map((logo, index) => (
          <AssetImage
            key={logo}
            src={`/assets/${logo}.svg`}
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
