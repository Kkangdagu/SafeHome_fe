export default function PaginationSkeleton() {
  return (
    <div className="mt-2 h-[16px] border rounded">
      <div className="w-full h-full bg-[#ddd] rounded-md relative">
        <div className=" absolute top-0 left-0 w-full h-full animate-skeleton">
          <div className=" w-1/2 h-full bg-skeleton shadow-skeleton skew-x-[-20]" />
        </div>
      </div>
    </div>
  );
}
