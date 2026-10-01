import StudentPortraits from "@/components/ui/student-portraits";
import AssetImage from "@/components/ui/asset-image";
import Header from "@/components/layout/header";
const assetPathPrefix = "/assets";
const heroStudentAsset = `${assetPathPrefix}/hero-student.png`;
const decorativeCoilAsset = `${assetPathPrefix}/decorative-coil.png`;
const heroCoilTintAsset = `${assetPathPrefix}/hero-coil-tint.png`;
const decorativeConeAsset = `${assetPathPrefix}/decorative-cone.png`;
const heroSmallCoilTintAsset = `${assetPathPrefix}/hero-small-coil-tint.png`;
const heroBottomCoilTintAsset = `${assetPathPrefix}/hero-bottom-coil-tint.png`;
const heroLeftConeAsset = `${assetPathPrefix}/hero-left-cone.png`;
const heroLeftConeTintAsset = `${assetPathPrefix}/hero-left-cone-tint.png`;
const heroRightConeAsset = `${assetPathPrefix}/hero-right-cone.png`;
const heroRightConeTintAsset = `${assetPathPrefix}/hero-right-cone-tint.png`;
const heroSmallConeAsset = `${assetPathPrefix}/hero-small-cone.png`;
const heroSmallConeTintAsset = `${assetPathPrefix}/hero-small-cone-tint.png`;
const heroGridAsset = `${assetPathPrefix}/hero-grid.svg`;
const heroGlowAsset = `${assetPathPrefix}/hero-glow.svg`;
const searchAsset = `${assetPathPrefix}/search.svg`;
const ratingStarLimeAsset = `${assetPathPrefix}/rating-star-lime.svg`;
const studentsCountAsset = `${assetPathPrefix}/students-count.svg`;

function HeroContent() {
  return (
    <div className="hero-content -translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-1/2 top-[169px] w-[1200px]">
      <div className="hero-heading [word-break:break-word] content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center">
        <h1 className="hero-title font-poppins font-semibold leading-[1.2] relative shrink-0 text-[72px] text-white tracking-[-0.72px] w-[935px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="hero-description font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#e5e6e8] text-[18px] whitespace-nowrap">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
      <div className="hero-search content-stretch flex gap-[16px] items-start relative shrink-0">
        <SearchBar />
      </div>
    </div>
  );
}

function LearningProgressCard() {
  return (
    <div className="learning-progress-card absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start left-[842px] p-[16px] rounded-[16px] top-[651px]">
      <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[14px] whitespace-nowrap">
        <p className="leading-[1.2]">Learning Progress</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
        <div className="[word-break:break-word] flex flex-col font-poppins font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[48px] tracking-[-0.48px] whitespace-nowrap">
          <p className="leading-[1.2]">55%</p>
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="bg-[#f6f6f6] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[200px]" />
        <div className="bg-[#d4fb20] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[112px]" />
      </div>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div className="hero-happy-students absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start justify-center left-[328px] p-[16px] rounded-[16px] top-[837px] w-[258px]">
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[16px] w-[115px]">
          <p className="leading-[1.2]">Happy Students</p>
        </div>
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="[word-break:break-word] font-satoshi font-normal leading-[0] not-italic relative shrink-0 text-[#82868e] text-[0px] whitespace-nowrap">
            <span className="leading-[1.6] text-[#242528] text-[12px]">{`4.5 `}</span>
            <span className="leading-[1.6] text-[12px]">(240)</span>
          </p>
          <div className="relative shrink-0 size-[16px]">
            <div className="absolute inset-[6.92%_8.87%_14.53%_8.87%]">
              <AssetImage
                alt=""
                className="block max-w-none size-full"
                src={ratingStarLimeAsset}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0">
        <StudentPortraits />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-1 ml-0 mt-0 relative row-1 size-[43px]">
            <AssetImage
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={studentsCountAsset}
            />
          </div>
          <p className="[word-break:break-word] col-1 font-satoshi font-bold leading-[1.5] ml-[12px] mt-[13px] not-italic relative row-1 text-[#242528] text-[12px] whitespace-nowrap">
            2K+
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroOrnaments() {
  return (
    <div className="hero-ornaments -translate-x-1/2 absolute bottom-0 contents left-[calc(50%+21.5px)] top-[21.58%]">
      <div className="hero-bottom-coil -translate-x-1/2 absolute bottom-[2.15%] left-[calc(50%+572px)] top-[65.63%] w-[330px]">
        <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
          <AssetImage
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={decorativeCoilAsset}
          />
        </div>
        <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
          <div
            className="hero-coil-mask absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-20px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1101.93px_0px] mask-size-[331.535px_331.535px] mix-blend-hard-light top-0 w-[2500px]"
            style={{ maskImage: `url("${heroCoilTintAsset}")` }}
          />
        </div>
      </div>
      <div className="hero-left-coil -translate-x-1/2 absolute bottom-[40.82%] left-[calc(50%-645.5px)] top-[21.58%] w-[385px]">
        <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
          <AssetImage
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={decorativeConeAsset}
          />
        </div>
        <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
          <div
            className="hero-small-coil-mask absolute bg-[#d4fb20] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1073.419px_0px] mask-size-[386.791px_386.791px] mix-blend-hard-light top-0 w-[2500px]"
            style={{ maskImage: `url("${heroSmallCoilTintAsset}")` }}
          />
        </div>
      </div>
      <div
        className="hero-small-coil -translate-x-1/2 absolute bottom-[36.33%] flex items-center justify-center left-[calc(50%-449.5px)] top-[46.58%] w-[175px]"
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
                className="hero-bottom-coil-mask absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1143.814px_0px] mask-size-[175.813px_175.814px] mix-blend-hard-light top-0 w-[2500px]"
                style={{ maskImage: `url("${heroBottomCoilTintAsset}")` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-left-cone -translate-x-1/2 absolute bottom-0 left-[calc(50%-531px)] top-[66.6%] w-[342px]">
        <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <AssetImage
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={heroLeftConeAsset}
          />
        </div>
        <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <div
            className="hero-left-cone-mask absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1095.533px_0px] mask-size-[343.684px_343.689px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
            style={{ maskImage: `url("${heroLeftConeTintAsset}")` }}
          />
        </div>
      </div>
      <div className="hero-right-cone -translate-x-1/2 absolute bottom-[42.29%] left-[calc(50%+696px)] top-[21.58%] w-[370px]">
        <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <AssetImage
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={heroRightConeAsset}
          />
        </div>
        <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <div
            className="hero-right-cone-mask absolute bg-[#d4fb20] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1081.239px_0px] mask-size-[371.822px_371.828px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
            style={{ maskImage: `url("${heroRightConeTintAsset}")` }}
          />
        </div>
      </div>
      <div className="hero-small-cone -translate-x-1/2 absolute bottom-[36.33%] left-[calc(50%+480px)] top-[45.31%] w-[188px]">
        <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <AssetImage
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={heroSmallConeAsset}
          />
        </div>
        <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
          <div
            className="hero-small-cone-mask absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1174.15px_0px] mask-size-[188.926px_188.928px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
            style={{ maskImage: `url("${heroSmallConeTintAsset}")` }}
          />
        </div>
      </div>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className="hero-category-card absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col items-start justify-center left-[404px] p-[16px] rounded-[16px] top-[639px]">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap">
        <div className="flex flex-col font-satoshi font-medium justify-center leading-[0] relative shrink-0 text-[#242528] text-[16px]">
          <p className="leading-[1.2]">UI/UX Design</p>
        </div>
        <div className="content-stretch flex font-satoshi font-normal gap-[8px] items-start relative shrink-0 text-[#82868e]">
          <p className="leading-[1.6] relative shrink-0 text-[12px]">
            200 Courses
          </p>
          <p className="leading-[1.5] relative shrink-0 text-[10px]">•</p>
          <p className="leading-[1.6] relative shrink-0 text-[12px]">
            1000+ Students
          </p>
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <form
      action="/"
      method="get"
      role="search"
      className="flex gap-[16px] items-start"
    >
      <label className="bg-white flex gap-[8px] h-[52px] items-center px-[24px] py-[12px] rounded-[24px] w-[461px]">
        <AssetImage
          src={searchAsset}
          alt=""
          width={24}
          height={24}
          className="shrink-0"
        />
        <input
          name="q"
          aria-label="Course, topic, creator"
          placeholder="Course, topic, creator"
          required
          className="w-full outline-none text-[18px] leading-[1.6] text-[#242528] placeholder:text-[#82868e]"
        />
      </label>
      <button
        type="submit"
        className="bg-[#d4fb20] px-[24px] py-[12px] rounded-[24px] text-[#242528] text-[18px] font-medium leading-[1.2] cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
export default function Hero() {
  return (
    <div className="hero-viewport">
      <section
        className="hero-canvas bg-[#003be2] relative overflow-hidden"
        aria-label="ByteSpace online learning"
      >
        <div className="hero-grid absolute h-[1024px] left-0 top-0 w-[1440px]">
          <div className="absolute inset-[-0.2%_-0.14%_0_0]">
            <AssetImage
              alt=""
              className="block max-w-none size-full"
              src={heroGridAsset}
            />
          </div>
        </div>

        <div className="hero-glow -translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[1149px] top-[582px]">
          <AssetImage
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={heroGlowAsset}
          />
        </div>
        <HeroContent />
        <Header />

        <div className="hero-student -translate-x-1/2 absolute h-[541px] left-1/2 top-[512px] w-[578px]">
          <AssetImage
            alt="Student wearing headphones and learning with a tablet"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={heroStudentAsset}
          />
        </div>
        <LearningProgressCard />
        <HappyStudentsCard />
        <HeroOrnaments />
        <CategoryCard />
      </section>
    </div>
  );
}
