export default function PolicyLetterSkeleton() {
  return (
    <div className="h-[140px] mt-[30px] flex mb-5">
      <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
        <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
        <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-[85px] h-[85px] bg-[#ddd] rounded-[50%] relative">
        <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
      <div className="w-[90px] mt-4">ㅋ</div>
    </div>
  );
}
