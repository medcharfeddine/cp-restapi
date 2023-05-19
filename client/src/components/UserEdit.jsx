import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editUser, getUser } from "../redux/actions";

const UserEdit = ({user}) => {
    // console.log(user)
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedUser = {
        id: user._id,
        name,
        email,
        phone
    }
    dispatch(editUser(editedUser))
    handleClose()
    dispatch(getUser())
    };
    


    
    
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormControl
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></FormControl>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserEdit;
