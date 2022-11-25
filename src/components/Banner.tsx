import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-gradient-to-b from-sky-900 to-transparent">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-evenly md:flex-row md:justify-around">
        <h1 className="text-3xl font-medium leading-tight md:text-5xl">
          심심해서
          <br />
          만들어보는
          <br />
          VPN Service
        </h1>

        <motion.h1
          className="text-center text-5xl font-bold leading-none md:text-9xl"
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
    </section>
  );
};

export default Banner;
