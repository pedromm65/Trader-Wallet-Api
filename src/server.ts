import express, { response } from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("FUNCIONAAAAAAAAAAAAAAAA!")
})

app.listen(3333, () => console.log("Server ON!"))
