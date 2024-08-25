import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import Action from '../components/Actions'
import Comments from '../components/Comments'

const PostPage = () => {
    const [liked, Setliked] = useState(false)
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 bg-transparent shadow-none px-md-5 pt-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-cente gap-3">
                                    <div className='post-pic rounded-circle'>
                                        <img className='img-fluid' src="/zuck-avatar.png" alt="" />
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <h1 className='fs-3'>Mark Zukerberg</h1>
                                        <img src="/verified.png" width={30} alt="" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <span>1d</span>
                                    <HiDotsHorizontal className='fs-2' />
                                </div>
                            </div>
                            <p className='fs-5 mt-4'>Lets Talk About a new technology</p>
                            <div className='post-detail-img overflow-hidden rounded-4'>
                                <img src="/post3.png" className='img-fluid w-100' alt="" />
                            </div>
                            <Action liked={liked} Setliked={Setliked} />

                            <h6 className='text-muted fw-normal mt-3'>243 Replies  ●  {99 + (liked ? 1 : 0)} Likes </h6>
                            <hr />
                            <div className=" me-4 d-flex my-4 align-items-center justify-content-between">
                                <h4 className='fw-normal'>👋 Get the app to like,reply and post</h4>
                                <button className='btn fs-5 btn-secondary'>Get</button>
                            </div>
                            <hr />
                            <Comments createat="3d" username='sara' comment="nice and interesting post" likes={120} useravatar='https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a74ee6e1c4fb9187e6f56a_Candice%20Wu-p-500.jpg' />
                            <Comments createat="1d" username='John Dev' comment="interesting post" likes={80} useravatar='https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a74f49e4ae12986f0d9e75_Drew%20Cano-p-500.jpg' />
                            <Comments createat="18hr" username='Saira Jasen' comment="I like it very much" likes={220} useravatar='https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a75016fa58af5ad40896c6_Eve%20Leroy-p-500.jpg' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPage