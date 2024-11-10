const express = require("express")
const app = express()
const PORT = 8000;

// DB export
const {connectToDB} = require("./dbConnect")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
const urlRoute = require("./routes/url")

app.use("/url", urlRoute)


// Connection
connectToDB().then(()=>{
    console.log(`Connected to MongoDb`)
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));