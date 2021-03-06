import React,{useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';


function AddUserForm(props) {
    const {users,setUsers} = props
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [userCode, setUserCode] = useState("");
    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        setUsers([...users,{"userCode":userCode,"name":name,"userId":userId}])
        navigate("/", { state: { from: { pathname: "/addUser" } } })
    }
    return (
        <Form className='container m-5' onSubmit={submitHandler}>
            <h2>Add user Details</h2>
            
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter user Id" value={userId} onChange={e => setUserId(e.target.value)}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
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
                        Add User
                    </Button>
                </div>
            </div>
            
        </Form>
    )
}

export default AddUserForm
// id, user-id, name, user-code