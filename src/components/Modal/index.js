import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

const Modal = ({ showModal, setShowModal, children }) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariant = {
    hidden: {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)",
      transition: "all 600ms ease-out",
    },
    visible: {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
      transition: "all 600ms ease-out",
    },
    exit: "hidden",
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backdrop}
          className="backdrop"
        >
          <div className="close-button__wrapper">
            <button
              onClick={() => setShowModal(false)}
              className="close-button"
            >
              &times;
            </button>
          </div>
          <motion.div className="modal" variants={modalVariant}>
            <div style={{ position: "relative" }}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
