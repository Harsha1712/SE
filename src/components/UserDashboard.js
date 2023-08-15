import React from "react";
import {useSelector} from 'react-redux'
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Outlet } from "react-router-dom";
function UserDashboard()
{
    let {userObj}=useSelector(state=>state.user)
return (
    <>
    <Nav className='justify-content-center mt-3' defaultActiveKey='/profile'>
        <Nav.Item>
            <Nav.Link to='profile' as={NavLink}>
                User Profile
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link to='balance' as={NavLink}>
                Check Balance
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link to='withdraw' as={NavLink}>
                Withdraw Amount
            </Nav.Link>
        </Nav.Item>
    </Nav>
    <div className="mt-3">
        <Outlet/>
    </div>
    </>
)
}

export default UserDashboard