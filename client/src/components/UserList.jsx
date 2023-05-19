import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { getUser } from "../redux/actions";

const UserList = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="userlist" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        users.map((el) => {
            return <UserCard key={el._id} user={el} />;
        })
      )}
    </div>
  );
};

export default UserList;
