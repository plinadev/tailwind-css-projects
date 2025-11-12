function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid md:grid-cols-[2fr_1fr] grid-rows-[0.2fr_1fr] lg:px-90 h-screen">
      {children}
    </div>
  );
}

export default Layout;
