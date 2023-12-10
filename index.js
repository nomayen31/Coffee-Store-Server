const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())




// 10


app.get('/users', (req, res)=>{
    res.send('user route')
})

app.get('/',(req, res)=>{
    res.send('Coffee making server is running')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })