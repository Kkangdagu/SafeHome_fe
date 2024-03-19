export default function OnboardingSkeleton() {
  return (
    <div className="w-[358px] h-[189px] mt-9 mb-5 border rounded-md">
      <div className="w-full h-full bg-[#ddd] rounded-md relative">
        <div className="absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className="w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
    </div>
  );
}
