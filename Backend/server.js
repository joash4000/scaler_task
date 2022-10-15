const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;
const userRoutes = express.Router();
var cookieParser = require('cookie-parser');
var multer = require('multer')
var upload = multer({dest:'uploads/'})
var session = require("express-session");


let Listofcan = require('./models/listofcandidates')

app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());


app.use(bodyParser.json());
app.use(session({secret:"lkasdjflsadjf",saveUninitialized : true,resave:false}));
const dburl="mongodb+srv://josh:sdb9691387540@cluster4.z8iv8vw.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dburl, { useNewUrlParser: true ,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

userRoutes.post('/candidadeform',async function(req,res){
        try{
        const candidates=await Listofcan.find({candidates_username:req.body.candidates_username,candidates_email:req.body.candidates_email});
        var flag=0;
        for(var i in candidates){
          //  console.log("41" ,req.body.start_time>lis[i].start_time  && req.body.start_time<lis[i].end_time)
           // console.log("42" ,req.body.end_time>lis[i].start_time  && req.body.end_time<lis[i].end_time)
            if(req.body.start_time>candidates[i].start_time  && req.body.start_time<candidates[i].end_time){
               
                 flag=1;
                 break;
            }
            if(req.body.end_time>candidates[i].start_time  && req.body.end_time<candidates[i].end_time){
             flag=1;
                 break;
            } 
            if(req.body.start_time<candidates[i].start_time  && req.body.end_time>candidates[i].end_time){
                flag=1;
                    break;
             } 
               if(req.body.start_time>candidates[i].start_time  && req.body.end_time<candidates[i].end_time){
                flag=1;
                    break;
               } 
        }
        if(flag===1){
            console.log(flag)
            res.status(400).json({success:false,message:"Candidate not available in the time slot"});
            return ;
        }else{
            let list = new Listofcan(req.body);
            const can=list.save();
            res.status(200).json({'success':true});
        }
        }catch(e){
            return res.status(500).send('Error');
        }
       
});
userRoutes.get('/getcan',function(req,res){
    Listofcan.find({},function(err,lis){
       if(err){
           console.log(err);
           return res.status(500).send({success:false,message:"server error"});
       }
       if(!lis){
           console.log("ldsl")
           res.send({success:false,message:"NOT FOUND"});
           // res.redirect('/')
           return res
       }
       return res.status(200).json(lis);
   })
});
userRoutes.post('/deleterecord',function(req,res){
    var can_id =req.body.id;
    console.log(can_id)
    Listofcan.deleteOne({_id:can_id},function(err){
        if(err){
            console.log(err);
            return res.status(500).send({success:false,message:"server error"});
        }
        return res.status(204).send({success:true,message:"record deleted"});;
    })

});
userRoutes.post('/addrate',function(req,res){
    console.log(req.body)
    var can_id =req.body.can_id;
    
    Listofcan.findOne({_id:can_id},function(err,lst){
        if(err){
            console.log(err);
            return res.status(500).send({success:false,message:"server error"});
        }
        if(!lst){
            console.log('List not found');
            return res.status(500).send({success:false,message:"server error"});
        }
        lst.start_time=req.body.start_time
        lst.end_time=req.body.end_time
        lst.interviewer_email=req.body.interviewer_email
        lst.save(function(err,upd){
            if(err){
                return res.status(500)
            }
        })

        return res.status(200).send({success:true,message:"server error"})
    })
    

});


app.use('/', userRoutes);
app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
