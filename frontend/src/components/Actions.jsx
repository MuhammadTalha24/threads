import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { IoShareOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const Actions = ({ liked, Setliked, comment }) => {

    return (
        <>
            <div onClick={(e) => e.preventDefault()} className={`d-flex actions align-items-center gap-3 mt-4 ${comment ? 'fs-4' : 'fs-2'}`}>
                <FaRegHeart onClick={() => Setliked(!liked)} className={liked ? 'text-warning' : ''} />
                <BiMessageRounded />
                <FiSend />
                <IoShareOutline />
            </div>
        </>
    )
}

export default Actions