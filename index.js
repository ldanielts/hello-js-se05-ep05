const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const app = express()

app.use(express.static("public"))

app.use(morgan("dev"))

app.use(bodyparser.urlencoded())

app.get("/listcontatos", (req, res) => {
  knex("contato").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })  
})
app.post("/addcontato", (req, res) => {
  var contato = req.body;
  knex("contato").insert(contato, "idcontato").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ => 
  app.listen(3000, _ => 
    console.log("server online!")))