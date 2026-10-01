import AssetImage from "@/components/ui/asset-image";
export default function Header() { return (<div className="absolute h-[120px] left-0 overflow-clip top-0 w-[1440px]" data-node-id="1:1778" data-name="Header_Frame" role="banner">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex gap-[24px] items-start left-[calc(50%-0.5px)] not-italic text-[#f5f5f6] text-[16px] top-1/2 whitespace-nowrap" data-node-id="1:1779" data-name="Header_Nav_Menu">
          <a className="font-satoshi font-medium leading-[1.2] relative shrink-0" data-node-id="1:1780" href="/">
            Home
          </a>
          <a className="font-satoshi font-normal leading-[1.6] relative shrink-0" data-node-id="1:1781" href="#courses">
            Courses
          </a>
          <a className="font-satoshi font-normal leading-[1.6] relative shrink-0" data-node-id="1:1782" href="#creators">
            Creators
          </a>
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-start justify-end right-[120px] top-[48px]" data-node-id="1:1783" data-name="Header_Nav_Menu">
          <a className="[word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap" data-node-id="1:1784" href="/login">
            Sign In
          </a>
          <a className="[word-break:break-word] font-satoshi font-normal leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap" data-node-id="1:1785" href="/signup">
            Join Us
          </a>
          <div className="relative shrink-0 size-[24px]" data-node-id="1:1786" data-name="Style=Outlined">
            <AssetImage alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/033ef.svg" />
          </div>
        </div>
        <div className="absolute contents left-[122px] top-[35px]" data-node-id="1:1787" data-name="Header_Logo">
          <div className="absolute h-[31.5px] left-[122px] top-[35px] w-[28.875px]" data-node-id="1:1788" data-name="Vector">
            <AssetImage alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/b8d7a.svg" />
          </div>
          <p className="[word-break:break-word] absolute font-clash font-bold leading-[normal] left-[159px] not-italic text-[#f5f5f6] text-[24px] top-[42px] whitespace-nowrap" data-node-id="1:1789">
            ByteSpace
          </p>
        </div>
      </div>); }

