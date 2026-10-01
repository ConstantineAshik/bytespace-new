import AssetImage from "@/components/ui/asset-image";
const assetPathPrefix = "/assets";
const heroSmallConeAsset = `${assetPathPrefix}/hero-small-cone.png`;
const heroSmallConeTintAsset = `${assetPathPrefix}/hero-small-cone-tint.png`;
const decorativeCoilAsset = `${assetPathPrefix}/decorative-coil.png`;
const heroCoilTintAsset = `${assetPathPrefix}/hero-coil-tint.png`;
const decorativeConeAsset = `${assetPathPrefix}/decorative-cone.png`;
const heroSmallCoilTintAsset = `${assetPathPrefix}/hero-small-coil-tint.png`;
const heroBottomCoilTintAsset = `${assetPathPrefix}/hero-bottom-coil-tint.png`;
const ctaCoilAsset = `${assetPathPrefix}/cta-coil.png`;
const ctaCoilTintAsset = `${assetPathPrefix}/cta-coil-tint.png`;
const heroLeftConeAsset = `${assetPathPrefix}/hero-left-cone.png`;
const heroLeftConeTintAsset = `${assetPathPrefix}/hero-left-cone-tint.png`;
const heroRightConeAsset = `${assetPathPrefix}/hero-right-cone.png`;
const heroRightConeTintAsset = `${assetPathPrefix}/hero-right-cone-tint.png`;
const ctaGridAsset = `${assetPathPrefix}/cta-grid.svg`;

export default function CreatorCTA() {
  return (
    <section className="creator-cta bg-[#003be2] relative section-canvas overflow-hidden h-[488px]">
      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]">
        <div className="absolute inset-[-0.2%_-0.14%_0_0]">
          <AssetImage
            alt=""
            className="block max-w-none size-full"
            src={ctaGridAsset}
          />
        </div>
      </div>
      <div className="creator-cta-content -translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 top-[calc(50%+0.5px)]">
        <p className="creator-cta-title [word-break:break-word] font-poppins font-semibold leading-[0] not-italic relative shrink-0 text-[#f5f5f6] text-[0px] text-center tracking-[-0.44px] w-[710px]">
          <span className="leading-[1.2] text-[44px]">{`Unlock Your Potential as a `}</span>
          <span className="leading-[1.2] text-[44px]">Creator</span>
          <span className="leading-[1.2] text-[44px]">{` with ByteSpace`}</span>
        </p>
        <p className="creator-cta-description [word-break:break-word] font-satoshi font-normal leading-[1.6] not-italic relative shrink-0 text-[#f5f5f6] text-[18px] text-center w-[964px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a
          href="/signup"
          className="bg-[#d4fb20] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0"
        >
          <p className="[word-break:break-word] font-satoshi font-medium leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">
            Join as Creator
          </p>
        </a>
      </div>
      <div className="cta-ornaments -translate-x-1/2 absolute bottom-[-31.35%] contents left-[calc(50%+19px)] top-[-33.2%]">
        <div className="cta-top-cone -translate-x-1/2 absolute bottom-[61.48%] left-[calc(50%+454px)] top-0 w-[188px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={heroSmallConeAsset}
            />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="absolute bg-[#d4fb20] inset-[-0.22%_0.56%_-0.28%_-1.05%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${heroSmallConeTintAsset}")` }}
            />
          </div>
        </div>
        <div className="cta-bottom-coil -translate-x-1/2 absolute bottom-[-26.84%] left-[calc(50%+555px)] top-[59.22%] w-[330px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={decorativeCoilAsset}
            />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
            <div
              className="absolute bg-[#d4fb20] inset-[0_0.47%_-0.47%_-0.93%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${heroCoilTintAsset}")` }}
            />
          </div>
        </div>
        <div className="cta-left-coil -translate-x-1/2 absolute bottom-[54.3%] left-[calc(50%-645.5px)] top-[-33.2%] w-[385px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={decorativeConeAsset}
            />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
            <div
              className="absolute bg-[#d4fb20] inset-[0_0.47%_-0.47%_-0.93%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${heroSmallCoilTintAsset}")` }}
            />
          </div>
        </div>
        <div
          className="cta-small-coil -translate-x-1/2 absolute bottom-[63.11%] flex items-center justify-center left-[calc(50%-454.5px)] top-[1.02%] w-[175px]"
          style={{ containerType: "size" }}
        >
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full">
              <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
                <AssetImage
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={decorativeConeAsset}
                />
              </div>
              <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
                <div
                  className="absolute bg-[#f5f5f6] inset-[0_0.47%_-0.47%_-0.93%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
                  style={{ maskImage: `url("${heroBottomCoilTintAsset}")` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cta-bottom-cone -translate-x-1/2 absolute bottom-[15.37%] left-[calc(50%-674px)] top-[46.11%] w-[188px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ctaCoilAsset}
            />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="absolute bg-[#f5f5f6] inset-[-0.22%_0.56%_-0.28%_-1.05%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${ctaCoilTintAsset}")` }}
            />
          </div>
        </div>
        <div className="cta-bottom-right-cone -translate-x-1/2 absolute bottom-[-31.35%] left-[calc(50%-529px)] top-[61.27%] w-[342px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={heroLeftConeAsset}
            />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="absolute bg-[#d4fb20] inset-[-0.22%_0.56%_-0.28%_-1.05%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${heroLeftConeTintAsset}")` }}
            />
          </div>
        </div>
        <div className="cta-right-cone -translate-x-1/2 absolute bottom-[22.95%] left-[calc(50%+691px)] top-[1.23%] w-[370px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <AssetImage
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={heroRightConeAsset}
            />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="absolute bg-[#f5f5f6] inset-[-0.22%_0.56%_-0.28%_-1.05%] mask-alpha mask-no-repeat [mask-size:100%_100%] mix-blend-hard-light pointer-events-none"
              style={{ maskImage: `url("${heroRightConeTintAsset}")` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
