const app = require('express')()
const PORT = 8080

app.get('/ping', (req, res) => {
    res.status(200).send({
        status:'200.',
        response:'Ping is successful.'
    })

})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
  })