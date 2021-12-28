import React,{useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { useNavigate, useLocation } from 'react-router-dom';


function EditUserForm(props) {
    let {state} = useLocation()
    console.log(state)
    const {users} = props
    const [userId, setUserId] = useState(state[0].userId);
    const [name, setName] = useState(state[0].name);
    const [userCode, setUserCode] = useState(state[0].userCode);
    console.log(">>>",userId,name,userCode)
    let navigate = useNavigate()
    

    const submitHandler = (e) => {
        e.preventDefault();
        users.map((user)=>{
            console.log(users)
            if(user.userId === userId){
                user.name = name
                user.userCode = userCode
            }
            return users
        })
        navigate("/", { state: { from: { pathname: "/editUser" } } })
    }
    return (
        <Form className='container m-5' onSubmit={submitHandler}>
            <h2>Edit user Details</h2>
            
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter user Id" value={userId} onChange={e => setUserId(e.target.value)}/>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>User Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Code" value={userCode}  onChange={e => setUserCode(e.target.value)}/>
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit">
                        Edit User
                    </Button>
                </div>
            </div>
            
        </Form>
    )
}

export default EditUserForm
