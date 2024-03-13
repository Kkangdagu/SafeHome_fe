export default function LatestPolicySkeleton() {
  return (
    <div className="h-full border-t-2 border-b-2 border-slate-400 flex flex-col gap-3">
      <div className="w-full h-[100px] bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
    </div>
  );
}
