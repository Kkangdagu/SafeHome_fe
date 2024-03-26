export default function PolicyLetterSkeleton() {
  return (
    <div className="h-[140px] mt-[30px] flex gap-5 mb-5">
      <div className="flex flex-col gap-3">
        <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
          </div>
        </div>
        <div className="w-[90px] bg-[#ddd] h-[20px] relative rounded-md">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-full h-full bg-skeleton shadow-skeleton" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
          </div>
        </div>
        <div className="w-[90px] bg-[#ddd] h-[20px] relative rounded-md">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-full h-full bg-skeleton shadow-skeleton" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
          </div>
        </div>
        <div className="w-[90px] bg-[#ddd] h-[20px] relative rounded-md">
          <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
            <div className="w-full h-full bg-skeleton shadow-skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
}
