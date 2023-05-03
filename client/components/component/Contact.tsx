import { useState } from 'react'
import { motion } from 'framer-motion'
import EarthCanvas from './Canvas/Earth'
import { SectionWrapper } from '../../hoc'
import { slideIn } from '../../utils/motion'
import { sendEmail } from '../../Api/email'

export interface Form {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendEmail(form)
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setLoading(false)
      console.error(error)
      alert('Ahh, something went wrong. Please try again.')
    }
  }

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Get in touch
        </p>
        <h3 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact.
        </h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Email Address"
              required
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              required
              className="rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary py-3 px-8 font-bold text-white shadow-md shadow-primary outline-none"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
