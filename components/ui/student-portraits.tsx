import AssetImage from "./asset-image";

const portraits = Array.from(
  { length: 7 },
  (_, index) => `/assets/student-avatar-${index + 1}.png`,
);

export default function StudentPortraits({
  wrapped = false,
}: {
  wrapped?: boolean;
}) {
  return portraits.map((src) =>
    wrapped ? (
      <div key={src} className="mr-[-16px] relative shrink-0 size-[43px]">
        <AssetImage
          src={src}
          alt=""
          width={43}
          height={43}
          className="absolute block inset-0 max-w-none size-full"
        />
      </div>
    ) : (
      <AssetImage
        key={src}
        src={src}
        alt=""
        width={43}
        height={43}
        className="mr-[-16px] relative shrink-0 size-[43px]"
      />
    ),
  );
}
