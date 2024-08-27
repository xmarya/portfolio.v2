import { motion } from "framer-motion";

export default function Language({parentVariants}) {
    return (
        <motion.div variants={parentVariants} initial="initial" animate="animate">
          <div>
          E | ع
          </div>
        </motion.div>
    )
}

