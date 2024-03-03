import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({ username });
        //checking whether the user already exists
        if (user) {
            return res.status(400).json({ error: "Username already exists." })
        }

        //Hash password here

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            //generate jwt token, well cookie to be precise
             generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();


        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })
        }

        else{
            res.status(400).json({error: "Inavlid user data"});
        }

    } catch (error) {
        console.log("Error in SignUp", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}


export const login = (req, res) => {
    console.log("You are logged in");
}
export const logout = (req, res) => {
    console.log("You are logged out");
}

