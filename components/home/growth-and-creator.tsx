import StudentPortraits from "@/components/ui/student-portraits";
import AssetImage from "@/components/ui/asset-image";
const assetPathPrefix = "/assets";
const courseFigmaAsset = `${assetPathPrefix}/course-figma.png`;
const courseStudent1Asset = `${assetPathPrefix}/course-student-1.png`;
const courseStudent2Asset = `${assetPathPrefix}/course-student-2.png`;
const courseStudent3Asset = `${assetPathPrefix}/course-student-3.png`;
const courseStudent4Asset = `${assetPathPrefix}/course-student-4.png`;
const heroStudentAsset = `${assetPathPrefix}/hero-student.png`;
const decorativeCoilAsset = `${assetPathPrefix}/decorative-coil.png`;
const growthCardMaskAsset = `${assetPathPrefix}/growth-card-mask.png`;
const creatorPortraitAsset = `${assetPathPrefix}/creator-portrait.png`;
const decorativeConeAsset = `${assetPathPrefix}/decorative-cone.png`;
const creatorCardMaskAsset = `${assetPathPrefix}/creator-card-mask.png`;
const growthGridAsset = `${assetPathPrefix}/growth-grid.svg`;
const creatorGlowAsset = `${assetPathPrefix}/creator-glow.svg`;
const courseLevelAsset = `${assetPathPrefix}/course-level.svg`;
const growthCourseStudentCountAsset = `${assetPathPrefix}/growth-course-student-count.svg`;
const revenueArrowAsset = `${assetPathPrefix}/revenue-arrow.svg`;
const ratingStarLimeAsset = `${assetPathPrefix}/rating-star-lime.svg`;
const studentsCountAsset = `${assetPathPrefix}/students-count.svg`;
const creatorCheckAsset = `${assetPathPrefix}/creator-check.svg`;

export default function GrowthAndCreator() {
  return (
    <section className="growth-and-creator bg-[#fafafa] relative section-canvas overflow-hidden h-[1460px]">
      <div className="growth-grid absolute h-[2391px] left-[-508px] top-[-466px] w-[2456px]">
        <div className="absolute inset-[-1.67%_-1.63%]">
          <AssetImage
            alt=""
            className="block max-w-none size-full"
            src={growthGridAsset}
          />
        </div>
      </div>
      <div className="absolute left-[-287px] size-[672px] top-[946px]">
        <div className="absolute inset-[-5.95%]">
          <AssetImage
            alt=""
            className="block max-w-none size-full"
            src={creatorGlowAsset}
          />
        </div>
      </div>
      <div className="growth-content absolute content-stretch flex flex-col gap-[72px] items-start left-[121px] top-[120px]">
        <div className="growth-row content-stretch flex gap-[63px] items-center relative shrink-0">
          <div className="growth-copy [word-break:break-word] content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 w-[574px]">
            <p className="growth-title font-poppins font-semibold leading-[1.2] relative shrink-0 text-[#242528] text-[44px] tracking-[-0.44px] w-[577px]">
              Your Path to Professional Growth Starts Here!
            </p>
            <p className="growth-description font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#4b4c53] text-[18px] w-[477px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="content-stretch flex gap-[56px] items-end relative shrink-0 whitespace-nowrap">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-poppins font-medium leading-[44px] relative shrink-0 text-[#003be2] text-[36px] tracking-[-0.36px]">
                  12K
                </p>
                <p className="font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#4b4c53] text-[18px]">
                  Students
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-poppins font-medium leading-[44px] relative shrink-0 text-[#003be2] text-[36px] tracking-[-0.36px]">
                  70+
                </p>
                <p className="font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#4b4c53] text-[18px]">
                  Courses
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-poppins font-medium leading-[44px] relative shrink-0 text-[#003be2] text-[36px] tracking-[-0.36px]">
                  16
                </p>
                <p className="font-satoshi font-normal leading-[1.6] relative shrink-0 text-[#4b4c53] text-[18px]">
                  Creators
                </p>
              </div>
            </div>
          </div>
          <div className="growth-artwork h-[552px] relative shrink-0 w-[621px]">
            <div className="absolute bg-white border border-[#ced0d3] border-solid h-[384px] left-0 overflow-clip rounded-[24px] top-0 w-[373px]">
              <div className="absolute h-[195.145px] left-[15px] overflow-clip rounded-[12px] top-[15px] w-[341px]">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                >
                  <div className="absolute bg-[#443131] inset-0 rounded-[12px]" />
                  <AssetImage
                    alt=""
                    className="absolute max-w-none object-cover rounded-[12px] size-full"
                    src={courseFigmaAsset}
                  />
                </div>
                <div className="absolute content-stretch flex gap-[12px] items-start left-[12px] top-[150px]">
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[24px] shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">17 Lessons</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[24px] shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">2 hours 16 mins</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[4px] bg-[rgba(246,246,246,0.6)] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[24px] shrink-0">
                    <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">59 Comments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[15px] top-[231px]">
                <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
                  <div className="flex flex-col font-poppins font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px]">
                    <p className="leading-[28px]">Learn Figma from Basic</p>
                  </div>
                  <div className="flex flex-col font-satoshi font-normal justify-center relative shrink-0 text-[#4f4f4f] text-[12px]">
                    <p>
                      <span className="leading-[20px]">{`by `}</span>
                      <span className="leading-[20px] text-[#003be2]">
                        purepearl studio
                      </span>
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[#f5f5f6] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[24px] shrink-0">
                    <div className="relative shrink-0 size-[20px]">
                      <AssetImage
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={courseLevelAsset}
                      />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b4c53] text-[12px] text-center whitespace-nowrap">
                      <p className="leading-[20px]">Beginner</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0">
                    <div className="mr-[-8px] relative shrink-0 size-[32px]">
                      <AssetImage
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        height="32"
                        src={courseStudent1Asset}
                        width="32"
                      />
                    </div>
                    <div className="mr-[-8px] relative shrink-0 size-[32px]">
                      <AssetImage
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        height="32"
                        src={courseStudent2Asset}
                        width="32"
                      />
                    </div>
                    <div className="mr-[-8px] relative shrink-0 size-[32px]">
                      <AssetImage
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        height="32"
                        src={courseStudent3Asset}
                        width="32"
                      />
                    </div>
                    <div className="mr-[-8px] relative shrink-0 size-[32px]">
                      <AssetImage
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        height="32"
                        src={courseStudent4Asset}
                        width="32"
                      />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      <div className="relative shrink-0 size-[32px]">
                        <AssetImage
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={growthCourseStudentCountAsset}
                        />
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-satoshi font-medium justify-center leading-[0] left-[16.5px] not-italic text-[12px] text-center text-white top-[16px] whitespace-nowrap">
                        <p className="leading-[20px]">26+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex items-end leading-[0] not-italic relative shrink-0">
                  <div className="creator-student-count flex flex-col font-poppins font-semibold h-[24px] justify-center relative shrink-0 text-[#300b6a] text-[0px] tracking-[-0.2px] w-[36px]">
                    <p className="text-[#003be2] text-[20px]">
                      <span className="[word-break:break-word] font-poppins font-medium leading-[28px] not-italic tracking-[-0.2px]">
                        $
                      </span>
                      <span className="leading-[28px]">25</span>
                    </p>
                  </div>
                  <div className="flex flex-col font-satoshi font-normal justify-center relative shrink-0 text-[#4f4f4f] text-[12px] whitespace-nowrap">
                    <p className="leading-[20px]">/lifetime</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center left-[305px] top-[231px]">
                <p className="[word-break:break-word] font-satoshi font-medium leading-[0] not-italic relative shrink-0 text-[#4f4f4f] text-[0px] whitespace-nowrap">
                  <span className="leading-[28px] text-[18px]">4.5</span>
                  <span className="leading-[28px] text-[18px]">{` `}</span>
                </p>
                <div className="relative shrink-0 size-[24px]">
                  <AssetImage
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={revenueArrowAsset}
                  />
                </div>
              </div>
            </div>
            <div className="absolute h-[540px] left-0 person-shadow top-[12px] w-[577px]">
              <AssetImage
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={heroStudentAsset}
              />
            </div>
            <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start left-[345px] p-[16px] rounded-[16px] top-[213px]">
              <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[14px] whitespace-nowrap">
                <p className="leading-[24px]">Learning Progress</p>
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
            <div className="-translate-x-1/2 absolute bottom-[48.91%] left-[calc(50%+203px)] top-[12.14%] w-[215px]">
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
                  style={{ maskImage: `url("${growthCardMaskAsset}")` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="creator-row content-stretch flex gap-[79px] items-center relative shrink-0">
          <div className="creator-artwork h-[596px] relative shrink-0 w-[541px]">
            <div className="absolute backdrop-blur-[10px] bg-[#003be2] content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] rounded-[16px] top-[44px]">
              <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#f5f5f6] whitespace-nowrap">
                <div className="flex flex-col font-satoshi font-medium justify-center relative shrink-0 text-[16px]">
                  <p className="leading-[1.2]">Total Revenue</p>
                </div>
                <div className="flex flex-col font-satoshi font-normal justify-center relative shrink-0 text-[10px]">
                  <p className="leading-[1.2]">July 1-28</p>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[200px]">
                <div className="[word-break:break-word] flex flex-col font-poppins font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f6] text-[24px] tracking-[-0.24px] whitespace-nowrap">
                  <p className="leading-[32px]">$120.29</p>
                </div>
                <div className="bg-[#cbfc01] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative rounded-[24px] shrink-0">
                  <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[10px] text-center whitespace-nowrap">
                    <p className="leading-[20px]">+12$</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="bg-white col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[200px]" />
                <div className="bg-[#d4fb20] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[112px]" />
              </div>
            </div>
            <div className="absolute backdrop-blur-[10px] bg-[#003be2] content-stretch flex flex-col gap-[8px] items-start left-0 p-[16px] rounded-[16px] top-[194px] w-[134px]">
              <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#f5f5f6] whitespace-nowrap">
                <div className="flex flex-col font-satoshi font-medium justify-center relative shrink-0 text-[16px]">
                  <p className="leading-[1.2]">Year to Date</p>
                </div>
                <div className="flex flex-col font-satoshi font-normal justify-center relative shrink-0 text-[10px]">
                  <p className="leading-[1.2]">2023</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-poppins font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f6] text-[24px] tracking-[-0.24px] whitespace-nowrap">
                <p className="leading-[32px]">$1,200.38</p>
              </div>
              <div className="bg-[#cbfc01] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative rounded-[24px] shrink-0">
                <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[10px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">+12$</p>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute h-[596px] left-[calc(50%-25px)] person-shadow top-0 w-[435px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AssetImage
                  alt=""
                  className="absolute h-[114.6%] left-[-28.51%] max-w-none top-0 w-[157.01%]"
                  src={creatorPortraitAsset}
                />
              </div>
            </div>
            <div className="creator-happy-students absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start justify-center left-[283px] p-[16px] rounded-[16px] top-[413px] w-[258px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="[word-break:break-word] flex flex-col font-satoshi font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">Happy Students</p>
                </div>
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="[word-break:break-word] font-satoshi font-normal leading-[0] not-italic relative shrink-0 text-[#82868e] text-[10px] whitespace-nowrap">
                    <span className="font-satoshi font-bold leading-[1.5] text-[#242528]">{`4.5 `}</span>
                    <span className="leading-[1.5]">(240)</span>
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
                <StudentPortraits wrapped />

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
            <div className="-translate-x-1/2 absolute bottom-[44.8%] left-[calc(50%+142px)] top-[19.13%] w-[215px]">
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
                  style={{ maskImage: `url("${creatorCardMaskAsset}")` }}
                />
              </div>
            </div>
          </div>
          <div className="creator-copy content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[580px]">
            <p className="creator-title [word-break:break-word] font-poppins font-semibold leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[44px] tracking-[-0.44px] w-[391px]">{`Create & Manage Courses Easily.`}</p>
            <p className="creator-description [word-break:break-word] font-satoshi font-normal leading-[0] not-italic relative shrink-0 text-[#4b4c53] text-[0px] w-[574px]">
              <span className="font-satoshi font-bold leading-[28px] text-[#242528] text-[18px]">
                ByteSpace
              </span>
              <span className="leading-[28px] text-[18px]">{` `}</span>
              <span className="leading-[1.6] text-[18px]">{`supports individuals or entities in the creation, publication, and administration of educational courses. `}</span>
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <AssetImage
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={creatorCheckAsset}
                  />
                </div>
                <p className="[word-break:break-word] font-satoshi font-medium leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">
                  Share Your Expertise
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <AssetImage
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={creatorCheckAsset}
                  />
                </div>
                <p className="[word-break:break-word] font-satoshi font-medium leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">
                  Monetize Your Passion
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <AssetImage
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={creatorCheckAsset}
                  />
                </div>
                <p className="[word-break:break-word] font-satoshi font-medium leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">
                  Flexibility and Autonomy
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <AssetImage
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={creatorCheckAsset}
                  />
                </div>
                <p className="[word-break:break-word] font-satoshi font-medium leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">
                  Build a Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
