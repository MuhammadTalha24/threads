import { User } from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js"
export const userSignup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body

        const user = await User.findOne({ $or: [{ email }, { username }] })
        if (user) {
            return res.status(400).json({
                message: "User Already Exist"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            username,
        })

        await newUser.save()

        if (newUser) {
            generateToken(newUser._id, res)
            return res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                name: newUser.name,
                message: "Account Created Successfully"
            })
        } else {
            return res.status(400).json({
                message: 'Invalid User Data'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({
                message: "User Not Found"
            })
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if (!isPasswordMatched) {
            return res.status(401).json({
                message: "Password Do Not Match"
            })
        }

        generateToken(user._id, res)

        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            message: 'Login Successfully'
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
        console.log(error)
    }
}


export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 1 })
        return res.status(201).json({
            message: "Logout Successfully"
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
        console.log(error)
    }
}

export const followOrunfollow = async (req, res) => {
    try {
        const personwhofollowed = req.params.id;
        const personwhofollow = req.id
        const usertoModify = await User.findById(personwhofollowed)
        const currentUser = await User.findById(personwhofollow)
    } catch (error) {
        return res.status(500).json({ message: error.message })
        console.log(error);

    }
}