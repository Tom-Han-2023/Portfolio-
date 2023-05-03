import { SectionWrapper } from '../../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import { projects } from '../../constants'
import Tilt from 'react-parallax-tilt'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: string
  source_code_link: string
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        gyroscope={true}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={`project_${name}`}
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              role="button"
              tabIndex={0}
              onClick={() => window.open(source_code_link, '_blank')}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  window.open(source_code_link, '_blank')
                }
              }}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              aria-label="linkedin profile"
            >
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          My work
        </p>
        <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Projects
        </h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('left', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Here are some of the projects I have worked solo or been involved in
          collaboratively during Bootcamp at Dev Academy. Each project is
          briefly described with links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Please visit my{' '}
          <a
            href="https://tom-han-2023.github.io/"
            className=" text-white underline hover:text-blue-500 focus:text-blue-500  "
            target="_blank"
            rel="noreferrer"
          >
            blog
          </a>{' '}
          where I reflect on my learning in depth.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'project')
