import { useEffect, useState } from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { BiMenu } from 'react-icons/bi'
import { navLinks } from '../../constants'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY
  //     if (scrollTop > 100) {
  //       setScrolled(true)
  //     } else {
  //       setScrolled(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center justify-between px-6 py-5 sm:px-16 ">
      <div className="mx-auto flex w-full max-w-7xl items-center">
        <a
          href="https://github.com/Tom-Han-2023"
          className="mx-3 inline-block text-4xl"
          aria-label="github profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.linkedin.com/in/soung-ouk-han/"
          className=" text-4xl"
          aria-label="linkedin profile"
        >
          <FaGithub />
        </a>
        <a
          href="./PDF/Tom-CV.pdf"
          download="Tom-CV.pdf"
          className=" mx-3 text-4xl"
        >
          <ImProfile />
        </a>
      </div>

      <ul className="hidden list-none flex-row gap-10 sm:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? 'text-white' : 'text-secondary'
            } cursor-pointer text-[18px] font-medium`}
          >
            <a
              href={`#${nav.id}`}
              onClick={() => setActive(nav.title)}
              className="hover:text-white focus:text-white"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        <BiMenu
          aria-label="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } black-gradient absolute top-20 right-0 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === nav.title ? 'text-white' : 'text-secondary'
                }`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
