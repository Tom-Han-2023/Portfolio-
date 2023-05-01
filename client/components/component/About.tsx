import { motion } from 'framer-motion'

import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'

const About = () => {
  return (
    <>
      <div className="md:flex md:flex-row md:justify-between">
        <div>
          <motion.div variants={textVariant()}>
            <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
              Introduction
            </p>
            <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn('right', '', 0.1, 1)}
            className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary "
          >
            <p>
              Hi there! My name is Tom Han, and I am a qualified pharmacist and
              experienced Senior Manager in the pharmacy industry. Over the
              years, I have honed my people and facilitation skills to build and
              lead high-performing teams. Although I have enjoyed my time in the
              pharmacy industry, I have always had a strong passion for learning
              and problem-solving, which ultimately led me to complete Dev
              Academy Aotearoa and explore a career in web development.
            </p>
            <p className="mt-4">
              With my newfound skills in web development and background in
              management, I am seeking a company that can nurture my technical
              career and provide growth opportunities. I am highly motivated,
              dedicated, and thrive in collaborative team environments where I
              can continue to learn and grow as a developer while contributing
              to meaningful projects. When I am not coding, I enjoy spending
              time with my family and friends, playing games, and snowboarding
              the winter New Zealand mountains.
            </p>
            <p className="mt-4">
              I am excited to connect with like-minded professionals and am
              always eager to learn from others in the industry. Please feel
              free to connect with me on Linkedin to discuss potential
              opportunities or just to chat about our shared interests in web
              development and technology.
            </p>
          </motion.div>
        </div>
        <div className="mt-8 h-72 w-72 flex-shrink-0 overflow-hidden rounded-full md:mt-0 md:h-96 md:w-96">
          <motion.img
            variants={fadeIn('left', '', 0.1, 1)}
            src="./Image/profile-pic.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
