const express = require('express')

const app = express()

app.get('/', (req, res) => res.end('Hello guys! goodluck to us.'))


const port = 3010
app.listen(port, () => {
    console.log(`Express server up running listening at port ${port} ...`)
})