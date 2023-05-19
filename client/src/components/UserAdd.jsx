import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../redux/actions";
import Modal from "react-modal";
import { Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
    background: "#09142F",
    color: "white",
    marginTop: "20px"
  },
};

Modal.setAppElement("#root");

const UserAdd = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      avatar,
    };
    dispatch(addUser(newUser));
    await dispatch(getUser());
    setName("");
    setEmail("");
    setPhone("");
    setAvatar("");
  };

  return (
    <div>
      <button style={{background:"#09142F", marginTop: "10px"}} className="btn p-2 text-white" onClick={openModal}>Add New User</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="form" onSubmit={handelSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Avatar</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <Button style={{margin: "10px 0"}} type="submit" variant="primary" >Confirm</Button>
        </form>
        <Button variant="danger" onClick={closeModal} >Close</Button>
      </Modal>
    </div>
  );
};

export default UserAdd;
