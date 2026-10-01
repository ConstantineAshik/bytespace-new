import AssetImage from "@/components/ui/asset-image";
export default function Header() {
  return (
    <div
      className="site-header absolute h-[120px] left-0 overflow-clip top-0 w-[1440px]"
      role="banner"
    >
      <div className="header-navigation -translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex gap-[24px] items-start left-[calc(50%-0.5px)] not-italic text-[#f5f5f6] text-[16px] top-1/2 whitespace-nowrap">
        <a
          className="font-satoshi font-medium leading-[1.2] relative shrink-0"
          href="/"
        >
          Home
        </a>
        <a
          className="font-satoshi font-normal leading-[1.6] relative shrink-0"
          href="#courses"
        >
          Courses
        </a>
        <a
          className="font-satoshi font-normal leading-[1.6] relative shrink-0"
          href="#creators"
        >
          Creators
        </a>
      </div>
      <div className="header-account-navigation absolute content-stretch flex gap-[24px] items-start justify-end right-[120px] top-[48px]">
        <a
          className="header-sign-in [word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap"
          href="/login"
        >
          Sign In
        </a>
        <a
          className="[word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap"
          href="/signup"
        >
          Join Us
        </a>
        <div className="header-cart relative shrink-0 size-[24px]">
          <AssetImage
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/assets/shopping-bag.svg"
          />
        </div>
      </div>
      <div className="absolute contents left-[122px] top-[35px]">
        <div className="header-logo-mark absolute h-[31.5px] left-[122px] top-[35px] w-[28.875px]">
          <AssetImage
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/assets/bytespace-logo-lime.svg"
          />
        </div>
        <p className="header-logo-wordmark [word-break:break-word] absolute font-clash font-bold leading-[normal] left-[159px] not-italic text-[#f5f5f6] text-[24px] top-[42px] whitespace-nowrap">
          ByteSpace
        </p>
      </div>
    </div>
  );
}
