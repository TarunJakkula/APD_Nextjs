export default function GridPageLayout({ children }) {
  return (
    <div className="animate-slide3 py-[40px] px-[30px] min-h-[90vh] flex justify-evenly items-center gap-[50px] flex-wrap-reverse w-[100vw]">
      {children}
    </div>
  );
}
