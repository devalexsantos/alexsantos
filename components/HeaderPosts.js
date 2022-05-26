import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function HeaderPosts(props) {
  return (
    <AnimatePresence>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col justify-center items-center align-center container mx-auto py-10">
            <div className="md:flex ms:flex-row justify-center items-center align-center text-center md:text-left md:gap-6 mt-10">
              <ul className="p-4">
                {props.categories.map((item) => (
                  <li key={item.id} className="p-1 text-center cursor-pointer">
                    <Link href={`/categoria/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </AnimatePresence>
  );
}
