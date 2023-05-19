import axios from "axios"
import { ADDUSERS, DELETEUSERS, EDITUSERS, GETUSERS } from "./actionTypes"



export const getUser = () => async (dispatch)=>{
    try {
        const res = await axios.get("/getUsers")
        console.log(res)
        dispatch({
            type: GETUSERS,
            payload: res.data
        })
    } catch (error) {
     alert("get error")   
    }
}

export const addUser = (newUser) => async (dispatch) => {
    try {
        const {data} = await axios.post("/addUsers", newUser)
        dispatch({
            type: ADDUSERS,
            payload: data
        })
    } catch (error) {
        alert("post error")
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/deleteUser/${id}`)
        dispatch({
            type: DELETEUSERS,
            payload: id
        })
    } catch (error) {
        alert('delete error')
    }
}

export const editUser = (editedUser) => async (dispatch) => {
    try {
        const res = await axios.put(`/editUser/${editedUser.id}`,editedUser)
        dispatch({
            type: EDITUSERS,
            payload: res.data
            })
    } catch (error) {
        console.log(error)
    }
}