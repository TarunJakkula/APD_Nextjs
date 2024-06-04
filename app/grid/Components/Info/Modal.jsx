import Backdrop from "./Backdrop";
import Info from "./Info";
import { motion } from "framer-motion";

function Modal({ showModal }) {
  return (
    <Backdrop>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-[#212121] md:px-10 px-6 md:w-[600px] w-[300px] md:py-10 py-8 flex flex-col gap-[20px] justify-center  rounded-xl relative"
      >
        <motion.button
          onClick={() => showModal(false)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 0.8 }}
          className=" bg-white rounded-full w-[30px] h-[30px] absolute -top-[15px] -left-[15px] py-0 px-0"
          key="close-button"
        ></motion.button>
        <Info />
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
