import React, { Component } from "react";
import { Col, Button, } from "reactstrap";
import logontext from "../../image/logontext2.png";
import Footer from "../navi/Footer";
import { Outlet } from 'react-router-dom';

const FirstPage = ()=>{


    return (
      
      <div style={{
        width: "500px",
        height: "1000px",
        position: "sticky",
        left: "36%",
        top: "10%",
      }}>
        <Col>
          <Button size="lg" block href="/main/">Main Page</Button><br/>
          <Button size="lg" block href="/cocktails/">Cocktail List</Button><br/>
          <Button size="lg" block href="/search/">Search</Button><br/>          
        </Col>

      <Footer></Footer>

      <Outlet />

      </div>

    );
  }
  export default FirstPage;
