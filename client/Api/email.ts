import request from 'superagent'
import { Form } from '../components/component/Contact'

export async function sendEmail(form: Form) {
  try {
    const response = await request.post('/v1/email').send(form)
    return response.body
  } catch (error) {
    console.error('Error sending reminder email:', error)
  }
}
