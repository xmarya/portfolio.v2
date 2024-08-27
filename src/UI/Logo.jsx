import { motion } from "framer-motion";

export default function Logo({parentVariants}) {
    return (
        <motion.div variants={parentVariants} initial="initial" animate="animate">
           <div>
           Logo
           </div>
        </motion.div>
    )
}

