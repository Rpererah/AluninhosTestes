
import React from 'react'
import axios from 'axios'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';


export default function App() {
  const [post,setPost]=useState("");
  const [senha,setSenha]=useState("");

  const listar = () => {
    axios.get(`http://localhost:3000/posts`)
      .then(function (response) {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      });
  }
  const enviar=()=>{
    axios.post('http://localhost:3000/posts', {
      usuario:`${post}`,
      senha:`${senha}`
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (

    <div >

      <Container style={{ marginTop: 100, marginLeft: 'auto' }}>
        <Row>
          <Col>      <Button onClick={listar}>Dados</Button>
          </Col>
          <hr />
          <Col>
          <form>
            <input type="text" name="post" onChange={(e)=>setPost(e.target.value)} /><br/>
            <input type="text" name="senha" onChange={(e)=>setSenha(e.target.value)} />
            <input type="button" onClick={enviar} value="Enviar" />

          </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
