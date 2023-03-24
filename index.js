const mongoose= require('mongoose');
const port = 3000;
const app = require("./app")

mongoose.connect('mongodb+srv://nikhilsingrajput2016:nikhil123@surveyforms.uwmob15.mongodb.net/?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
  
   
}
);

app.listen(port , ()=>{
    console.log("app is running on port 3000")
})