import React, { useState } from 'react'
import { Form,Row,Col,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/userSlice';

export default function Login() {
  const [name,setName]=useState('');
  const dispatch=useDispatch();
  const handleLogin=()=>{
    dispatch(changeUser(name));
  }
  return (
    <div>
     <Form>
     <h1 className='mt-5'>Login</h1>
     <Row>
       <Col>
       <Form.Control type="text" placeholder="Nome" onChange={(e)=>setName(e.target.value)} />
       </Col>
       <Col sm={6}>
       <Button onClick={handleLogin}>Login</Button>
       </Col>
     </Row>
     <hr />
     </Form>
    </div>
  )
}
