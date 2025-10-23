import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicText from "./DynamicText"; // Adjust path based on your project structure

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence
        onExitComplete={() => setIsLoading(false)} // Ensure state updates after exit
      >
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DynamicText onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

export default Loading;