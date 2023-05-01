import BallCanvas from './Canvas/Ball'
import { SectionWrapper } from '../../hoc'
import { technologies } from '../../constants'

const Technology = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Technology, '')
