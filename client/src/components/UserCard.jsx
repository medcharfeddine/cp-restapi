import React from "react";
import {Card, Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../redux/actions";
import UserEdit from "./UserEdit";

const UserCard = ({user}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title> {user.name} </Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
          <Card.Text>
            {user.phone}
          </Card.Text>
          <Button variant="danger" onClick={()=>{dispatch(deleteUser(user._id)); dispatch(getUser())}} >Delete</Button>
          <UserEdit user={user} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
