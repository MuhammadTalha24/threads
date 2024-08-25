import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
    return (
        <>

            <UserHeader />
            <UserPost likes={2221} replies={1298} postimg='./post1.png' description='Its my first threads post' />
            <UserPost likes={511} replies={12} postimg='./post2.png' description='Let Going To New Part In Developemnt' />
            <UserPost likes={331} replies={177} postimg='./post3.png' description='comes from mobile devices (excluding tablets), so it makes sense to favor designing for mobile screens. Prioritizing design for mobile devices also ensures that key constraints are tackled early. However, having less space is more challenging; it compels designers to remove anything that isn’t necessary. Once you’re happy with the mobile layout for mobile screens. Prioritizing design for mobile devices also ensures that key constraints are tackled early. However, having less space is more challenging; it compels designers to remove anything that isn’t necessary. Once you’re happy with the mobile layout, for mobile screens. Prioritizing design for mobile devices also ensures that key constraints are tackled early. However, having less space is more challenging; it compels designers to remove anything that isn’t necessary. Once you’re happy with the mobile layout,' />
            <UserPost likes={321} replies={12} postimg='./post1.png' description='software engineering in meta' />
            <UserPost likes={461} replies={123} postimg='./post3.png' description='New Part In Developemnt' />

        </>
    )
}

export default UserPage