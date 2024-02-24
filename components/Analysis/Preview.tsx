import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';

export default function Preview() {
  return (
    <div className="w-full h-[320px] border rounded-[50px] flex justify-center items-center px-5 bg-white-0">
      <div className="w-full h-[260px] border border-blue-500 border-dashed rounded-[40px] flex flex-col justify-center items-center text-[6rem]">
        <HiOutlineDocumentDuplicate />
        <p className="text-[26px] mt-5 mb-2">계약서 이미지</p>
        <p className="text-[26px]">JPG / PNG / PDF</p>
      </div>
    </div>
  );
}
