export default function PathPageLayout({ children }) {
  return (
    <div className="py-[30px] px-[30px] min-h-[90vh] flex flex-col justify-center items-center md:gap-[50px] gap-[20px] w-full ">
      {children}
    </div>
  );
}
