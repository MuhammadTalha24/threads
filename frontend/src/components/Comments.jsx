import React, { useState } from 'react'
import Actions from '../components/Actions'
import { HiDotsHorizontal } from 'react-icons/hi'
const Comments = (props) => {
    const [liked, Setliked] = useState(false)
    return (
        <>
            <div className="d-flex align-items-start my-4 justify-content-between">
                <div className="d-flex align-items-cente gap-3">
                    <div className='comment-detail-pic rounded-circle'>
                        <img className='img-fluid' src={props.useravatar} alt="" />
                    </div>

                    <div className="d-flex flex-column">
                        <h1 className='fs-5 fw-normal'>{props.username}</h1>
                        <p className='fs-6 mb-0'>{props.comment}</p>

                        <Actions comment={true} liked={liked} Setliked={Setliked} />
                        <h6 className='mt-3 fw-normal'>{props.likes + (liked ? 1 : 0)} Likes</h6>
                    </div>

                </div>
                <div className="d-flex align-items-center gap-3">
                    <span>{props.createat}</span>
                    <HiDotsHorizontal className='fs-2' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Comments