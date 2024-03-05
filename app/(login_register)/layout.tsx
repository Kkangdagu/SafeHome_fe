export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-white h-screen grid place-items-center">
      {children}
    </div>
  );
}
