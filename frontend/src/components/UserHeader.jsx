import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { toast } from 'react-toastify'

const UserHeader = () => {

    const copyUrl = () => {
        const currenUrl = window.location.href;
        navigator.clipboard.writeText(currenUrl).then(() => {
            toast.success("Profile Link Copied")
        })
    }
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-8 order-md-1 order-2">
                    <div className="d-flex flex-column">
                        <h1 className='display-6 fw-medium'>Mark Zukerburg</h1>
                        <div className="d-flex align-items-center gap-3">
                            <h3 className='fs-3 fw-normal'>@zukerburg</h3>
                            <span className='border rounded-3 p-2'>thread.net</span>
                        </div>
                        <div className='d-flex flex-column mt-4 mt-md-5'>
                            <p className='mb-2'>Co-founder,Executive Chairman and CEO of Meta.</p>
                            <h6 className='text-muted fw-normal'>4.3k followers  ●  <Link className='text-decoration-none text-muted'>instagram.com</Link></h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 order-1 order-md-2">
                    <div className="d-flex flex-column align-items-md-center mt-md-0 mt-4">
                        <div className='avatar-pic rounded-circle'>
                            <img className='img-fluid' src="./zuck-avatar.png" alt="" />
                        </div>
                        <div className='d-flex align-items-center m-3'>
                            <div className='icon-container'>
                                <FaInstagram className='insta-icon' />
                            </div>
                            <div class="dropdown">
                                <button class="bg-transparent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className='icon-container'>
                                        <HiDotsHorizontal className='shareicon' />
                                    </div>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" onClick={copyUrl}>Copy Link</button></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            <div className="row pb-3 border-bottom ">
                <div className="col-md-12">

                    <ul class="nav nav-pills mb-3 w-100 mt-3 mt-md-0 d-flex  justify-content-between" id="pills-tab" role="tablist">
                        <li class="nav-item w-50 d-flex justify-content-center" role="presentation">
                            <button class="nav-link active w-100 me-md-3" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Threads</button>
                        </li>
                        <li class="nav-item w-50 d-flex justify-content-center" role="presentation">
                            <button class="nav-link w-100 " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Replies</button>
                        </li>
                    </ul>

                </div>
            </div>




        </>
    )
}

export default UserHeader