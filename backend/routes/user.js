const router = require("express").Router();
const User=require('../models/User');
const {isAuthenticated} = require('../middleware/check-auth');
const Review = require("../models/Review");


router.get("/reviews", (req,res)=>{
    Product.find().limit(4).then((result)=>{
                res.render("index",{result});
            }).catch((err)=>{
                console.log(err)
            }) 
})

router.post("/review", async (req,res)=>{
  // const user = await User.findById(req.user._id);
  const { album_name, rating, review,user_name } = req.body;
  // const user_name = "anidude";
  // console.log("backend called");
  try {
    console.log(req.body)
    const contactForm = await Review.create({
      album_name,
      user_name,
      rating,
      review
    });   
    contactForm.save((err)=>{
      if(err){
        console.log(err);
      }
      else{
          console.log("data added!!")
      }
  })
 res.redirect("/");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


  //  const contactForm = await Review.create({
  //     album_name,
  //     user_name,
  //     rating,
  //     review
  //   });   
  //   contactForm.save((err)=>{
  //     if(err){
  //       console.log(err);
  //     }
  //     else{
  //         console.log("data added!!")
  //     }
  // })
//  res.redirect("/");
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// })

router.get("/login",(req,res)=>{
  res.render("login")
})

router.post("/register", async (req,res)=>{
    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        let user = await User.findOne({ email });
        if (user) {
          return res
            .status(400)
            .json({ success: false, message: "User already exists" });
        }
    
        user = await User.create({
          name,
          email,
          password
        });    
        const token = await user.generateToken();
        const options = {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
    
        res.status(201).cookie("token", token, options).json({
          success: true,
          user,
          token,
        });

        await user.save();
        console.log("saved")
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
})



router.post("/login",async (req,res)=>{
  console.log("login called");
    try {
      const { email, password } = req.body;
      console.log(req.body)
  
      const user = await User.findOne({ email })
        .select("+password")
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        });
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
  
      const token = await user.generateToken();
  
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
  
      res.status(200).cookie("token", token, options).redirect("/");
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });

module.exports = router 