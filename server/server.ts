import express from 'express'
import { join } from 'node:path'
import 'dotenv/config'
import emailRouter from './routes/email'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/api/v1/email', emailRouter)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
