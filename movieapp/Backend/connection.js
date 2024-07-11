const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://akashpr715:akash1234@cluster0.b0ukfps.mongodb.net/').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{  
    console.log('DB is not connected')

})