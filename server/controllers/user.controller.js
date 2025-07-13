import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async(req,res)=>{
    try {
        const{email,password}=req.body;


        if ( !email || !password ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format",
                success: false
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"Admin already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email,password:hashedPassword});
        await newUser.save();
        return res.status(201).json({
            message:"Admin registered successfully",
            success:true
        });

    } catch (error) {
         console.log(error);
    }
}
export const adminRegister = async(req,res)=>{
    try {
        const{email,password}=req.body;


        if ( !email || !password ) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"Admin already exists",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email,password:hashedPassword});
        await newUser.save();
        return res.status(201).json({
            message:"Admin registered successfully",
            success:true,
            newUser
        });

    } catch (error) {
         console.log(error);
    }
}

// export const login = async(req,res)=>{
//     try {
//         const{email,password}=req.body;
        
//         if (!email || !password) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         };

//         let user = await User.findOne({email});
//         if(!user){
//             return res.status(400).json({
//                 message:"User not found",
//                 success: false,
//             });
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             })
//         };
//         const tokenData = {
//             userId: user._id
//         }
//         const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
//         user = {
//             _id: user._id,
//             email: user.email,
//         }

//         return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
//             message: 'Welcome back Admin',
//             success: true,
//              user,
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    user = {
      _id: user._id,
      email: user.email,
    };

    // ✅ Set secure, cross-origin, httpOnly cookie
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        message: 'Welcome back Admin',
        success: true,
        user,
      });

  } catch (error) {
    console.log("Login Error:", error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false
    });
  }
};


// export const logout = async (req, res) => {
//     try {
//         return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//             message: "Logged out successfully.",
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,       // Must match login cookie
      sameSite: "None",   // Must match login cookie
    });

    return res.status(200).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      message: "Logout failed.",
      success: false,
    });
  }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ 
            message:"User fetched successfully",
            success:true,
            users
         });
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req, res) => {
    try {   
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            message:"User deleted successfully",
            success:true
         });
    } catch (error) {
        console.log(error);
    }
}







