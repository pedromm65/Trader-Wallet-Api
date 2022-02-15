import express from "express"

const app = express()

app.get("/", (request, response) => {
  response.json({ message: "ALIADO É O MEU MENTOR!!!" })
})

app.listen(3000, () => console.log("Server ON!"))
