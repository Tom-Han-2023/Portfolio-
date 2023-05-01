import { motion } from 'framer-motion'
import MacCanvas from './Canvas/Mac'

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px]  mx-auto flex max-w-7xl flex-row  items-start gap-5 px-6 sm:px-16`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1
            className={`mt-2 text-[40px] font-black text-white text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]`}
          >
            Hi, I&apos;m <span className="text-[#915EFF]">Tom</span>
          </h1>
          <p
            className={`text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]`}
          >
            I am a Full Stack Developer
          </p>
        </div>
      </div>

      <MacCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
