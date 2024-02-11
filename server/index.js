import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cloudinary from './cloudinary.js'

dotenv.config()
const app = express();

const cloud = cloudinary;

const port = process.env.PORT;
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

app.get('/', (req, res)=>{
    res.send("welcome on cloudinary project")
})

app.post('/', async(req, res) => {
    const {image} = req.body;
    const uploadedImage = await cloudinary.uploader.upload(image,
  { 
    upload_preset: 'unsigned_upload',
    public_id: "avatar",
    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
    }, 
    function(error, result) {
        if(error){
            console.log(error);
        }
        console.log(result); });
        try {
            res.status(200).json(uploadedImage);
        } catch (error) {
            console.log(error);
            
        }
    
})
app.listen(port, function() {
    console.log(`server running on port ${port}`);
})