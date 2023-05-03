import request from 'superagent'
import { Form } from '../components/component/Contact'

export async function sendEmail(form: Form) {
  try {
    const response = await request.post('api/v1/email').send(form)
    if (!response.ok) {
      throw new Error('Failed to send email.')
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
