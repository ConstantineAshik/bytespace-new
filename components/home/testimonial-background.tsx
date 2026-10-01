import AssetImage from "@/components/ui/asset-image";
export default function TestimonialBackground() {
  return (
    <div className="testimonial-glows" aria-hidden="true">
      <AssetImage
        src="/assets/testimonial-lime-center.svg"
        alt=""
        width={912}
        height={912}
        style={{ position: "absolute", left: 275, top: -258 }}
      />
      <AssetImage
        src="/assets/testimonial-lime-right.svg"
        alt=""
        width={1377}
        height={1377}
        style={{ position: "absolute", left: 722, top: -361 }}
      />
      <AssetImage
        src="/assets/testimonial-blue-left.svg"
        alt=""
        width={1377}
        height={1377}
        style={{ position: "absolute", left: -562, top: 29 }}
      />
    </div>
  );
}
