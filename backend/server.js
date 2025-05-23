const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")

dotenv.config()
const app=express()
const PORT= process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("backend is running")
})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB Connection Error:', err);
});