const express = require('express')
var cors = require('cors')

//configure http server
const app = express()
const port = 3005

//enables ALL CORS requests
app.use(cors())


app.get('/health', async (req, res) => {
    res.status(200).json({ "status": "up" });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})