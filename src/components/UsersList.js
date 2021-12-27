import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import {Table, Button,Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiSearch,FiEdit} from 'react-icons/fi'
import {RiDeleteBin7Line} from 'react-icons/ri'

function UsersList(props) {
    const {users,setUsers,term, searchKeyword} = props
    const inputEl = useRef("")
    let navigate = useNavigate()
    
    let renderedUsersList = users.map((user,i) => (
        <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>{user.name}</td>
            <td>{user.userCode}</td>
            <td className="d-flex justify-content-center">
                <Button variant="info" onClick={() => editUserHandler(user.userId)}><FiEdit/></Button>
                <Button variant="danger" onClick={() => deleteUserHandler(user.userId)}><RiDeleteBin7Line/></Button>
            </td>
        </tr>
    ))


    const getSearchTerm = () => {
        searchKeyword(inputEl.current.value)

    }
        

        // const searchFilter = () => {
        //       const searchedUser = users.filter(user => {
        //         return user.userId === term || user.name.toLowerCase() === term.toLowerCase() || user.userCode.toLowerCase() === term.toLowerCase()
        //         // return 
        //     })
        //     console.log("searchedUser -------",searchedUser)
        //     console.log("users------->",users)
           
        //     setUsers(searchedUser)
        // }
        const enterHandler = (event) => {
            // event.preventDefault();
            if (event.key === "Enter") {
                event.preventDefault();
            }
        }
    const editUserHandler = (key) => {
        const targetedUser = users.filter(user => {
            return key === user.userId
        })
        console.log("targetted user ",targetedUser)
        navigate("/editUser", { state:targetedUser } )
        // console.log(newUsers)
        // setUsers(newUsers)
    }
    const deleteUserHandler = (key) => {
        const newUsers = users.filter(user => {
            return key !== user.userId
        })
        // console.log(newUsers)
        setUsers(newUsers)
    }
    return (
        <div className="m-5">
            <h2>Users List</h2>
            <Form>
                <Row className="align-items-center justify-content-between">
                   <Col>
                   <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden >
                            Search User
                        </Form.Label>
                        <InputGroup  onKeyPress={enterHandler}>
                            <FormControl id="inlineFormInputGroupUsername"  placeholder="Search User" ref={inputEl} value={term} onChange={getSearchTerm} autoComplete='off'/>
                            {/* onClick={searchFilter} */}
                            <InputGroup.Text    id='searchBtn'><FiSearch /></InputGroup.Text>
                        </InputGroup>
                    </Col>
                   </Col>
                    <Col xs="auto" className="my-1">
                        <Link to="./AddUser"><Button variant="primary">Add User</Button></Link>
                    </Col>
                </Row>
            </Form>
            
            {/* <Link to="./AddUser"><Button variant="primary">Add User</Button></Link> */}
        
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>User Code</th>
                    </tr>
                </thead>
                <tbody>
                        {renderedUsersList.length > 0 ? renderedUsersList : "No users found"}
                </tbody>
      </Table>
        </div>
  
    )
     
}

export default UsersList
