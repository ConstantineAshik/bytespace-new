const assetPathPrefix = "/assets";
const imgImage = `${assetPathPrefix}/e3a78.png`;
const imgEllipse = `${assetPathPrefix}/d0fbe.png`;
const imgEllipse1 = `${assetPathPrefix}/cb015.png`;
const imgEllipse2 = `${assetPathPrefix}/b27d0.png`;
const imgEllipse3 = `${assetPathPrefix}/85dac.png`;
const imgEllipse4 = `${assetPathPrefix}/50032.png`;
const imgEllipse5 = `${assetPathPrefix}/ce2e1.png`;
const imgEllipse6 = `${assetPathPrefix}/9c73f.png`;
const imgImage1 = `${assetPathPrefix}/80418.png`;
const imgRectangle = `${assetPathPrefix}/8a604.png`;
const imgImage2 = `${assetPathPrefix}/eb4eb.png`;
const imgRectangle1 = `${assetPathPrefix}/5f1b4.png`;
const imgRectangle2 = `${assetPathPrefix}/b8b88.png`;
const imgCone012 = `${assetPathPrefix}/e89fa.png`;
const imgRectangle15 = `${assetPathPrefix}/82ebe.png`;
const imgCone13 = `${assetPathPrefix}/30652.png`;
const imgRectangle16 = `${assetPathPrefix}/68643.png`;
const imgCone14 = `${assetPathPrefix}/5713a.png`;
const imgRectangle17 = `${assetPathPrefix}/dc547.png`;
const imgGroup4 = `${assetPathPrefix}/f422c.svg`;
const imgEllipse7 = `${assetPathPrefix}/ab9fa.svg`;
const imgStyleOutlined = `${assetPathPrefix}/7c340.svg`;
const imgStyleOutlined1 = `${assetPathPrefix}/033ef.svg`;
const imgVector = `${assetPathPrefix}/b8d7a.svg`;
const imgStar = `${assetPathPrefix}/4fa90.svg`;
const imgEllipse8 = `${assetPathPrefix}/0ec7a.svg`;


function HeroContent() { return (<div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-1/2 top-[169px] w-[1200px]" data-node-id="1:1769" data-name="Hero">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center" data-node-id="1:1792">
          <h1 className="font-poppins font-semibold leading-[1.2] relative shrink-0 text-[72px] text-white tracking-[-0.72px] w-[935px]" data-node-id="1:1770">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#e5e6e8] text-[18px] whitespace-nowrap" data-node-id="1:1771">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="1:1772" data-name="Search_Bar">
          <SearchBar />
        </div>
      </div>); }

function Header() { return (<div className="absolute h-[120px] left-0 overflow-clip top-0 w-[1440px]" data-node-id="1:1778" data-name="Header_Frame" role="banner">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex gap-[24px] items-start left-[calc(50%-0.5px)] not-italic text-[#f5f5f6] text-[16px] top-1/2 whitespace-nowrap" data-node-id="1:1779" data-name="Header_Nav_Menu">
          <a className="font-satoshi font-medium leading-[1.2] relative shrink-0" data-node-id="1:1780" href="/?view=home">
            Home
          </a>
          <a className="font-satoshi font-normal leading-[1.6] relative shrink-0" data-node-id="1:1781" href="/?view=courses">
            Courses
          </a>
          <a className="font-satoshi font-normal leading-[1.6] relative shrink-0" data-node-id="1:1782" href="/?view=creators">
            Creators
          </a>
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-start justify-end right-[120px] top-[48px]" data-node-id="1:1783" data-name="Header_Nav_Menu">
          <a className="[word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap" data-node-id="1:1784" href="/?view=sign-in">
            Sign In
          </a>
          <a className="[word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap" data-node-id="1:1785" href="/?view=join-us">
            Join Us
          </a>
          <div className="relative shrink-0 size-[24px]" data-node-id="1:1786" data-name="Style=Outlined">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStyleOutlined1} />
          </div>
        </div>
        <div className="absolute contents left-[122px] top-[35px]" data-node-id="1:1787" data-name="Header_Logo">
          <div className="absolute h-[31.5px] left-[122px] top-[35px] w-[28.875px]" data-node-id="1:1788" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <p className="[word-break:break-word] absolute font-clash font-bold leading-[normal] left-[159px] not-italic text-[#f5f5f6] text-[24px] top-[42px] whitespace-nowrap" data-node-id="1:1789">
            ByteSpace
          </p>
        </div>
      </div>); }

function LearningProgressCard() { return (<div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start left-[842px] p-[16px] rounded-[16px] top-[651px]" data-node-id="1:1797" data-name="Auto Layout Vertical">
        <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[14px] whitespace-nowrap" data-node-id="1:1798">
          <p className="leading-[1.2]">Learning Progress</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-node-id="1:1799" data-name="Auto Layout Vertical">
          <div className="[word-break:break-word] flex flex-col font-poppins font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[48px] tracking-[-0.48px] whitespace-nowrap" data-node-id="1:1800">
            <p className="leading-[1.2]">55%</p>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:1801" data-name="Group">
          <div className="bg-[#f6f6f6] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[200px]" data-node-id="1:1802" data-name="Rectangle" />
          <div className="bg-[#d4fb20] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[112px]" data-node-id="1:1803" data-name="Rectangle" />
        </div>
      </div>); }

function HappyStudentsCard() { return (<div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start justify-center left-[328px] p-[16px] rounded-[16px] top-[837px] w-[258px]" data-node-id="1:1821" data-name="Auto Layout Vertical">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:1822" data-name="Auto Layout Vertical">
          <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[16px] w-[115px]" data-node-id="1:1823">
            <p className="leading-[1.2]">Happy Students</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="1:1824" data-name="Auto Layout Horizontal">
            <p className="[word-break:break-word] font-satoshi font-normal leading-[0] not-italic relative shrink-0 text-[#82868e] text-[0px] whitespace-nowrap" data-node-id="1:1825">
              <span className="leading-[1.6] text-[#242528] text-[12px]">{`4.5 `}</span>
              <span className="leading-[1.6] text-[12px]">(240)</span>
            </p>
            <div className="relative shrink-0 size-[16px]" data-node-id="1:1826" data-name="Star">
              <div className="absolute inset-[6.92%_8.87%_14.53%_8.87%]">
                <img alt="" className="block max-w-none size-full" src={imgStar} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="1:1827" data-name="Auto Layout Horizontal">
          {studentAvatars.map((src, index) => <img key={src} src={src} alt={`Student ${index + 1}`} width={43} height={43} className="mr-[-16px] relative shrink-0 size-[43px]" />)}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="1:1835" data-name="Group">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[43px]" data-node-id="1:1836" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
            </div>
            <p className="[word-break:break-word] col-1 font-satoshi font-bold leading-[1.5] ml-[12px] mt-[13px] not-italic relative row-1 text-[#242528] text-[12px] whitespace-nowrap" data-node-id="1:1837">
              2K+
            </p>
          </div>
        </div>
      </div>); }

function HeroOrnaments() { return (<div className="-translate-x-1/2 absolute bottom-0 contents left-[calc(50%+21.5px)] top-[21.58%]" data-node-id="46:79" data-name="3d ornament">
        <div className="-translate-x-1/2 absolute bottom-[2.15%] left-[calc(50%+572px)] top-[65.63%] w-[330px]" data-node-id="46:85" data-name="Frame">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:86" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:87" data-name="Mask Group">
            <div className="absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-20px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1101.93px_0px] mask-size-[331.535px_331.535px] mix-blend-hard-light top-0 w-[2500px]" data-node-id="46:89" style={{ maskImage: `url("${imgRectangle}")` }} data-name="Rectangle" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[40.82%] left-[calc(50%-645.5px)] top-[21.58%] w-[385px]" data-node-id="46:90" data-name="Frame">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:91" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:92" data-name="Mask Group">
            <div className="absolute bg-[#d4fb20] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1073.419px_0px] mask-size-[386.791px_386.791px] mix-blend-hard-light top-0 w-[2500px]" data-node-id="46:94" style={{ maskImage: `url("${imgRectangle1}")` }} data-name="Rectangle" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[36.33%] flex items-center justify-center left-[calc(50%-449.5px)] top-[46.58%] w-[175px]" data-node-id="46:95" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Frame">
              <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:96" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]" data-node-id="46:97" data-name="Mask Group">
                <div className="absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1143.814px_0px] mask-size-[175.813px_175.814px] mix-blend-hard-light top-0 w-[2500px]" data-node-id="46:99" style={{ maskImage: `url("${imgRectangle2}")` }} data-name="Rectangle" />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%-531px)] top-[66.6%] w-[342px]" data-node-id="46:105" data-name="Cone">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:106" data-name="Cone_01 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCone012} />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:107" data-name="Mask Group">
            <div className="absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1095.533px_0px] mask-size-[343.684px_343.689px] mix-blend-hard-light top-[-0.22%] w-[2500px]" data-node-id="46:109" style={{ maskImage: `url("${imgRectangle15}")` }} />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[42.29%] left-[calc(50%+696px)] top-[21.58%] w-[370px]" data-node-id="46:110" data-name="Cone">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:111" data-name="Cone_01 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCone13} />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:112" data-name="Mask Group">
            <div className="absolute bg-[#d4fb20] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1081.239px_0px] mask-size-[371.822px_371.828px] mix-blend-hard-light top-[-0.22%] w-[2500px]" data-node-id="46:114" style={{ maskImage: `url("${imgRectangle16}")` }} />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[36.33%] left-[calc(50%+480px)] top-[45.31%] w-[188px]" data-node-id="46:80" data-name="Cone">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:81" data-name="Cone_01 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCone14} />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]" data-node-id="46:82" data-name="Mask Group">
            <div className="absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1174.15px_0px] mask-size-[188.926px_188.928px] mix-blend-hard-light top-[-0.22%] w-[2500px]" data-node-id="46:84" style={{ maskImage: `url("${imgRectangle17}")` }} />
          </div>
        </div>
      </div>); }

function CategoryCard() { return (<div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col items-start justify-center left-[404px] p-[16px] rounded-[16px] top-[639px]" data-node-id="46:126" data-name="Auto Layout Vertical">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="46:127" data-name="Auto Layout Vertical">
          <div className="flex flex-col font-satoshi font-medium justify-center leading-[0] relative shrink-0 text-[#242528] text-[16px]" data-node-id="46:128">
            <p className="leading-[1.2]">UI/UX Design</p>
          </div>
          <div className="content-stretch flex font-satoshi font-normal gap-[8px] items-start relative shrink-0 text-[#82868e]" data-node-id="46:147">
            <p className="leading-[1.6] relative shrink-0 text-[12px]" data-node-id="46:130">
              200 Courses
            </p>
            <p className="leading-[1.5] relative shrink-0 text-[10px]" data-node-id="46:144">
              •
            </p>
            <p className="leading-[1.6] relative shrink-0 text-[12px]" data-node-id="46:146">
              1000+ Students
            </p>
          </div>
        </div>
      </div>); }

const studentAvatars = [imgEllipse, imgEllipse1, imgEllipse2, imgEllipse3, imgEllipse4, imgEllipse5, imgEllipse6];
function SearchBar() {
 return <form action="/" method="get" role="search" className="flex gap-[16px] items-start">
 <label className="bg-white flex gap-[8px] h-[52px] items-center px-[24px] py-[12px] rounded-[24px] w-[461px]">
 <img src={imgStyleOutlined} alt="" width={24} height={24} className="shrink-0" />
 <input name="q" aria-label="Course, topic, creator" placeholder="Course, topic, creator" required className="w-full outline-none text-[18px] leading-[1.6] text-[#242528] placeholder:text-[#82868e]" />
 </label>
 <button type="submit" className="bg-[#d4fb20] px-[24px] py-[12px] rounded-[24px] text-[#242528] text-[18px] font-medium leading-[1.2] cursor-pointer">Search</button>
 </form>;
}
export default function HeroFrame() {
return <main className="hero-viewport"><section className="hero-canvas bg-[#003be2] relative overflow-hidden" aria-label="ByteSpace online learning" data-node-id="1:1695">

      <div className="absolute h-[1024px] left-0 top-0 w-[1440px]" data-node-id="12:224">
        <div className="absolute inset-[-0.2%_-0.14%_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgGroup4} />
        </div>
      </div>

      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[1149px] top-[582px]" data-node-id="1:1866">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
      </div>
<HeroContent /><Header />

      <div className="-translate-x-1/2 absolute h-[541px] left-1/2 shadow-[51.038px_72.912px_72px_0px_rgba(0,0,0,0.13),37.122px_53.032px_56px_0px_rgba(0,0,0,0.11),25.838px_36.912px_36px_0px_rgba(0,0,0,0.1),16.946px_24.209px_24px_0px_rgba(0,0,0,0.09),10.208px_14.582px_16.087px_0px_rgba(0,0,0,0.08),5.383px_7.69px_9.571px_0px_rgba(0,0,0,0.07),2.233px_3.19px_5.723px_0px_rgba(0,0,0,0.06),0.518px_0.741px_3.036px_0px_rgba(0,0,0,0.04)] top-[512px] w-[578px]" data-node-id="1:1796" data-name="Image">
        <img alt="Student wearing headphones and learning with a tablet" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
<LearningProgressCard /><HappyStudentsCard /><HeroOrnaments /><CategoryCard />
</section></main>;
}

