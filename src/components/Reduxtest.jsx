import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/CounterAction'


const Reduxtest = () => {

    const showCounter = useSelector(state => state.counter);
    const showUser = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE", payload: value })
    }

    return (
        <div>
            <h3>Counter : {showCounter}</h3>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>

            <br />
            <br />
            <br />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='update user' onChange={(e) => setValue(e.target.value)}></input>
                <button type="submit">Update</button>
                <h3>User : {showUser.nama}</h3>
                <h3>umur : {showUser.umur}</h3>
                <h3>alamat : {showUser.alamat}</h3>
            </form>
        </div>
    )
}

export default Reduxtest