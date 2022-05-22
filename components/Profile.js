import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Profile(props) {
  return (
    <AnimatePresence>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col justify-center items-center align-center container mx-auto py-10">
            <div className="flex flex-col justify-center items-center align-center text-center">
              <Image
                src={props.info.avatar}
                width={150}
                height={150}
                alt="Alex Santos"
                className="rounded-full"
              />
              <h1 className="text-2xl md:text-3xl">{props.info.name}</h1>
              <p className="p-2 font-light">{props.info.bio}</p>
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </AnimatePresence>
  );
}