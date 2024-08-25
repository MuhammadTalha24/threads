import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from "react-icons/hi";
import Actions from './Actions';

const UserPost = (props) => {
    const [liked, Setliked] = useState(false)

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <Link className='text-decoration-none' to={'/markzukerberg/post/1'}>
                                <div className="row mt-4 pb-4 align-items-start border-bottom">
                                    <div className="col-md-1 col-2">
                                        <div className="d-flex flex-column align-items-center ms-2 ms-md-0">
                                            <div className='post-pic rounded-circle'>
                                                <img className='img-fluid' src="./zuck-avatar.png" alt="" />
                                            </div>
                                            <div className="d-flex my-2 vr-height">
                                                <div className="vr"></div>
                                            </div>
                                            <div className="d-flex justify-content-center flex-wrap gap-2">
                                                <div className='comment-pic rounded-circle'>
                                                    <img className='img-fluid' src="./zuck-avatar.png" alt="" />
                                                </div>
                                                <div className='comment-pic rounded-circle'>
                                                    <img className='img-fluid' src="./zuck-avatar.png" alt="" />
                                                </div>
                                                <div className='comment-pic rounded-circle'>
                                                    <img className='img-fluid' src="./zuck-avatar.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-11 col-lg-8 col-10">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex gap-2 align-items-center">
                                                <h3 className=''>markzukerberg</h3>
                                                <img width={25} src="./verified.png" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <span>1d</span>
                                                <HiDotsHorizontal className='fs-2' />
                                            </div>
                                        </div>
                                        <p className='line-clamp'>{props.description}</p>
                                        <div className='post-image rounded-3'>
                                            <img src={props.postimg} className='img-fluid' alt="" />
                                        </div>
                                        <Actions liked={liked} Setliked={Setliked} />
                                        <h6 className='text-muted fw-normal mt-3'>{props.replies} Replies  ●  {props.likes} Likes </h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...ddd</div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default UserPost