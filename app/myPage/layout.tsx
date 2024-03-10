export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-[#FFFFFF] h-full grid place-items-center">
      {children}
    </div>
  );
}
