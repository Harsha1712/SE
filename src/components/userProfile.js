import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
function UserProfile(){
  let navigate=new useNavigate()
    let {userObj}=useSelector(state=>state.user);
    let navigater=()=>{
      navigate('/userdashboard/todos')   
    }
    return(
      
        <Card style={{ width: '18rem' }} className="mx-auto mt-5">
        <Card.Img variant="top" src={userObj.profileImg} />
        <Card.Body>
          <Card.Title>{userObj.username}</Card.Title>
          <Card.Text>
            {userObj.email}
          </Card.Text>
          <Card.Text>
            {userObj.city}
          </Card.Text>
          <Card.Text>
            Balance:{userObj.balance}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default UserProfile