import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 500,
    },
    postedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    img: {
        type: String,
    },
    replies: [
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: {
            type: String
        },
        userprofilepic: {
            type: String,
        },
        username: {
            type: String
        }
    ]
}, { timestamps: true })


export const Post = mongoose.model('Post', postSchema)