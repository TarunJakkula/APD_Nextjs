function Backdrop({ children }) {
  return (
    <div
      className="bg-[#121212d5] absolute top-0 left-0 h-screen w-screen flex justify-center items-center"
      key="modal-background"
    >
      {children}
    </div>
  );
}

export default Backdrop;
