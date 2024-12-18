import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Chao mung den voi app KoiFishDelivery')
})

app.listen(port, () => {
  console.log(`Project này đang chạy trên post ${port}`)
})