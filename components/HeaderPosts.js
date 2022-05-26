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
          <div className="flex-col justify-center items-center text-center pt-20">
            <span className="pt-10">Filtro:</span>
            <ul className="flex-col md:flex md:flex-row justify-center gap-3 p-4">
              {props.categories.map((item) => (
                <Link href={`/categoria/${item.slug}`} key={item.id}>
                  <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center cursor-pointer">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      </MotionConfig>
    </AnimatePresence>
  );
}
