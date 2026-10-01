import AssetImage from "@/components/ui/asset-image";
export default function TestimonialBackground() {
  return (
    <div className="testimonial-glows" aria-hidden="true">
      <AssetImage
        src="/assets/testimonial-lime-center.svg"
        alt=""
        width={752}
        height={752}
        style={{ position: "absolute", left: 355, top: -178 }}
      />
      <AssetImage
        src="/assets/testimonial-lime-right.svg"
        alt=""
        width={1217}
        height={1217}
        style={{ position: "absolute", left: 802, top: -281 }}
      />
      <AssetImage
        src="/assets/testimonial-blue-left.svg"
        alt=""
        width={1217}
        height={1217}
        style={{ position: "absolute", left: -482, top: 109 }}
      />
    </div>
  );
}
