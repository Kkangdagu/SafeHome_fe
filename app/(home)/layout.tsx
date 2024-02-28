export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-[390px] h-full bg-blue-300">{children}</div>
  );
}
