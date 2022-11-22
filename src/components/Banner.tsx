import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="bg-gradient-to-b from-sky-900 to-transparent">
            <div className="container mx-auto flex min-h-screen items-center justify-around">
                <h1 className="text-5xl font-medium leading-tight">
                    심심해서
                    <br />
                    만들어보는
                    <br />
                    VPN Service
                </h1>

                <motion.h1
                    className="text-center text-9xl font-bold leading-none"
                    animate={{
                        opacity: [1, 0, 1, 1, 1, 0, 1],
                        transition: { repeat: Infinity, duration: 2 },
                    }}
                >
                    100%
                    <br />
                    Free
                </motion.h1>
            </div>
        </div>
    );
};

export default Banner;
