import express from 'express'
const router = express.Router()
import request from 'superagent'
router.post('/', async (req, res) => {
  const form = req.body

  const SERVICE_ID = process.env.SERVICE_ID
  const TEMPLATE_ID = process.env.TEMPLATE_ID
  const USER_ID = process.env.USER_ID
  const PRIVATE_KEY = process.env.PRIVATE_KEY

  const data = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    accessToken: PRIVATE_KEY,
    template_params: {
      from_name: form.name,
      to_name: 'Tom',
      from_email: form.email,
      message: form.message,
    },
  }

  try {
    const response = await request
      .post('https://api.emailjs.com/api/v1.0/email/send')
      .set('Content-Type', 'application/json')
      .send(data)

    if (response.status === 200) {
      res.status(200).send('Email sent successfully')
    } else {
      res.status(response.status).send('Failed to send email')
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
})

export default router
