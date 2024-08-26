import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilepic: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: '',
    },
    followers: {
        type: [String],
        default: [],
    },
    following: {
        type: [String],
        default: [],
    },



}, { timestamps: true })

export const User = mongoose.model('User', userSchema)