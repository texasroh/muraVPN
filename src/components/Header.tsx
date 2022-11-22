import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Header = () => {
    const { scrollY, scrollYProgress } = useScroll();
    useEffect(() => {
        scrollY.onChange(() => {
            if (scrollY.get() > 80) {
            }
        });
    });
    return (
        <motion.div className="bg-blue-50 px-8 py-2">
            <div className="container mx-auto flex items-center justify-between">
                <div>Logo</div>
                <div className="flex items-center">
                    <div className="px-4 py-1 font-medium">How to use</div>
                    <div className="rounded bg-purple-500 px-4 py-1 font-medium text-white">
                        Request VPN
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
