// Middleware in Express JS

const express = require('express')
const app = express()
const port = 3000

// app.use(express.static("public"))


// Middleware - 1 
app.use((req, res,next) =>{
    console.log('m1')
    res.send("Hacked by middleware 1")
    next() 
    
// comment out the "next()"   local host 3000 will just running runinng running ...no final result 
})

// middleware-2
app.use((req, res,next) =>{
    console.log('m2')
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
