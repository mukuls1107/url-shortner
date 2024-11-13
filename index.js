const express = require("express")
const app = express()
const PORT = 8000;
const path = require("path")
// DB export
const { connectToDB } = require("./dbConnect")


//mmiddlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
// Routes
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRoute")

app.use("/url", urlRoute)

app.use("/", staticRoute)


// Connection
connectToDB().then(() => {
    console.log(`Connected to MongoDb`)
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));