const express=require("express");
const morgan=require("morgan");
const mongoose=require("mongoose");
const User=require("./models/User");
const cookieParser=require("cookie-parser");
const girisRoutes=require("./routers/girisRouter");
const kullaniciRoutes=require("./routers/kullaniciRouter");
const yoneticiRoutes=require("./routers/yoneticiRouter");
const authRoutes=require("./routers/authRouter");
const {requireAuth,checkUser}=require("./middlewares/authMiddleware");


const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

//VERİ TABANI BAĞLANTISI*********************************************************************************************
const dbURL=MONGO_URI;//Sizin mongo urlniz
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=>{
    console.log("mongose baglantisi başarılı");
})
.catch((err)=>{
    console.log(err);
})
//*********************************************************************************************************************




app.set("view engine","ejs");
app.listen(5001);

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser());



app.get("*",checkUser)


//requireAuth,
app.use(girisRoutes);
app.use(authRoutes);

app.use(kullaniciRoutes);
app.use(requireAuth,yoneticiRoutes);



//sayfaya veritabanından veri ekleme

// app.post("/giris",(req,res)=>{
 
// })

// app.get("/kayit",(req,res)=>{
//     res.render("kayit");
// })
// app.post("/kayit",(req,res)=>{

//    const user=new User(req.body)
//     console.log(req.body.name);
//     user.save()
//     .then((result)=>{
//         res.redirect("kullanici")

//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// app.get("/oturumAc",(req,res)=>{
//     res.render("oturumAc");
// })




//veritabanına ekleme
app.get("/add",(req,res)=>{
    const user=new User({
        name:"mbkmbkmbk",
        password:"14567"
    });

    user.save()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
    
})



// veri tabanından veri çekme
app.get("/all",(req,res)=>{
    
    User.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})

//veri tananından tek veri alma
app.get("/single",(req,res)=>{
    
    User.findById("601b1daa7e16ff01801b36d5")
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})






// app.get("/giris",(req,res)=>{
//     res.render("giris");
    
// })

// app.get("/kullanici",(req,res)=>{
//     res.render("kullanici",{root:__dirname});
// })






















app.get("/yonetici",(req,res)=>{
    res.render("yonetici");
})



