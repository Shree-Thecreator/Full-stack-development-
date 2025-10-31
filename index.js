const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

// Optional: fallback route if index.html isn't found
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



// app.get('/', (req, res) => {
// //   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
// //   res.sendFile(Path.join(__dirname, 'index.html'))
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
