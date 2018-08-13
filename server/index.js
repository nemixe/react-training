import express from 'express'
import RenderedHTML from './renderer'

const Server = express()

Server.use(express.static('public'))

Server.get('*', (req, res) => {
  const Markup = RenderedHTML(req)
  res.send(Markup)
})

Server.listen(3000, () => {
  console.log('Success Running on Port 3000')
})
