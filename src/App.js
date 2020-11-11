import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' // import bootstrap 
import styled,{ keyframes } from 'styled-components' // เป็น Dependencies จะใช้ต้อง yarn add styled-components
import ScrollAnimation from 'react-animate-on-scroll'; // เป็น Dependencies จะใช้ต้อง yarn add react-animate-on-scroll
import "animate.css/animate.min.css"; // เป็น Dependencies จะใช้ต้อง yarn add animate.css อันนี้ใช้ร่วมกับ react-animate-on-scroll

// เป็น Dependencies จะใช้ต้อง yarn add react-animate-on-scroll
//import for images
import spin from './img_imports/spin.png'

// import for components
import Navbar from './components/Navbar'
import Content from './components/ContentBlock'

//พี่ชอบเขียน css เเบบ styled-copmponents นะ 

const Container = styled.div`
  background-image: linear-gradient(to right top, #b7fcff, #88e9fd, #56d5ff, #1ebfff, #00a6ff);
  width: 100%;
  min-height: 100vh; 
  padding-bottom: 300px;
  padding-top: 50px;
`
const Image = styled.img`
  width : ${props => props.width } ;
`

const rotate = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(-360deg);}
`

const ImageAnimated = styled(Image)`
  animation: ${rotate} 5s ease-in-out infinite;
`
const Row = styled.div`
  margin: 50px 0px 50px 0px;
`

const ContainerExample = styled.div`
background-color: white;
border: 3px solid green;
`
const RowExample = styled.div`
  background-color: whitesmoke;
  border: 3px solid red;
  height: 250px;
`
const ColExample = styled.div`
  background-color: lightgray;
  border: 1px solid blue;
  height: 80%;
  color: cadetblue;
`
// App นี้เป็น class component เพราพี่จะใช้ state
class App extends React.Component {

  state = {
    stringShow : 'Hello'
  }

  // สามารถเก็บข้อมูลที่ไม่จำเป็นต้องเปลี่ยนระหว่างการเข้าดู เวลาเรียก ใช้คือ this.paragraph[index] เพราะเก็บเป็น Array เนอะ
  paragraph = ["This webpage is going to be used as reference by Hello-World Dolphin participants, such as this content card that you are reading from, this one is an example of react components and the use of props",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "Animation on the left is using keyframe via styled-components, The Image below is an example of how to use {props.children} --see in code"] 
  s =  ['Hello','WhatSup','Goodbye']

  handleClick = i => {
    this.setState(
      {
        stringShow : this.s[i]
      }
    )
  }

  // อันนี้เรื่องของ lifecycle ที่พี่บ่ดั้ยสอน  อันนี้ใช้ง่ายสุด นะ เเค่จำว่า componentDidMount จะถูก Run ทุกครั้งที่มีการ Render Page
  componentDidMount(){
    document.getElementById("0").focus() //พี่ใช้ให้มัน focus ปุ่ม state-1
  }


  render(){
  return (
    <React.Fragment> { /* เนื่องจาก Navbar อยู่นอก container ดังนั้นจึงต้องมี tag ครอบทั้ง Navbar เเละ Container พี่เลยใช้ React.Fragment ซึ่งทำหน้าที่เหมือน <div> เปล่าๆ เเต่เวลาโค้ดถูก Render เป็น HTML React.Fragment จะไม่ถูก Render */}
    <Navbar />
    <Container className="container-fluid"> { /* class container ของ bootstrap */}
      <Row className="row">
      <div className="col-1"></div>
        <div className="col-10">
          <Content header="React References" paragraph={this.paragraph[0]} />
        </div>
       <div className="col-1"></div>
       </Row>
       <Row className="row">
      <div className="col-1"></div>
        <div className="col-10">
          <Content header="Same Component as above but diffrent props" paragraph="Nothing."/>
        </div>
       <div className="col-1"></div>
       </Row>
       <Row className="row">
      <div className="col-1"></div>
      <div className="col-3">
      <ImageAnimated width="80%" src={spin} />
      </div>
        <div className="col-7">
          <Content header="Keyframe" paragraph={this.paragraph[2]} ><img src="./images/logo192.png"/></Content> { /* ใส่ tag เข้าไปใน component ต้องมี props.childen*/}
        </div>
       <div className="col-1"></div>
       </Row>
       <Row className="row">
      <div className="col-1"></div>
        <div className="col-10">
          <Content header="BootStrap Grid (Try resizing your desktop)" paragraph="example of Bootstrap grid and how responsive grid work all of this are just div with a className and a styled component" >
            RedBorder:container -> GreenBorder:row -> BlueBorder:col Ref: <a href="https://getbootstrap.com/docs/4.0/layout/grid/">https://getbootstrap.com/docs/4.0/layout/grid/</a>
            <ContainerExample className="container-fluid">
              <RowExample className="row">
                <ColExample className="col-xs-4 col-sm-4 col-md-6 col-lg-1 col-xl-3">col-sm-4 col-md-6 col-lg-1 col-xl-3</ColExample>
                <ColExample className="col-sm-2 col-md-6 col-lg-5 col-xl-3">col-sm-2 col-md-6 col-lg-5 col-xl-3</ColExample>
                <ColExample className="col-sm-2 col-md-6 col-lg-5 col-xl-3">col-sm-2 col-md-6 col-lg-5 col-xl-3</ColExample>
                <ColExample className="col-sm-4 col-md-6 col-lg-1 col-xl-3">col-sm-4 col-md-6 col-lg-1 col-xl-3</ColExample>
              </RowExample>
            </ContainerExample>
          </Content>
        </div>
       <div className="col-1"></div>
       </Row>
       <Row className="row">
      <div className="col-1"></div>
        <div className="col-10">
          <Content header="State Example" paragraph="this is example of how to use state" >
          <h1>{this.state.stringShow}</h1>
          { /* วิธีเขียน onclick เเบบใส่ parameter ให้เเล้วเเต่ละอัน อันนี้เป็นเรื่องของ callback function เเต่ง่ายๆ คือถ้าอยาก set parameter ตายตัวเเทนการส่ง event อะเนอะ */}
          <input id="0" type="button" onClick={() => this.handleClick(0)} style={{marginRight:"30px"}} className="btn btn-primary" value="State-1"/>
          <input id="1" type="button"  onClick={() => this.handleClick(1)} style={{marginRight:"30px"}} className="btn btn-primary" value="State-2"/>
          <input id="2" type="button"  onClick={() => this.handleClick(2)} style={{marginRight:"30px"}} className="btn btn-primary" value="State-3"/>
          </Content>
        </div>
       <div className="col-1"></div>
       </Row>
       <Row className="row">
      <div className="col-1"></div>
        <div className="col-10">
          {/* ใน animateIn ต้องใส่ชื่อคลาสเองนะ จะเป็น animation ของเราเองก็ได้ หรือ จะใช้ของ animate.css ถ้าใช้ของ animate น้อง ๆ ลองไปดูชื่อคลาสใน node_modules/animate.css/animate.css  */}
          <ScrollAnimation animateIn="animate__fadeInUp" duration={2} delay={2} initiallyVisible={false}  >
          <Content header="Using Animate On Scroll" paragraph="this is example of how to use react-scroll-animate" >
          dependencies : <a href="https://www.npmjs.com/package/react-animate-on-scroll">https://www.npmjs.com/package/react-animate-on-scroll</a>
          </Content>
          </ScrollAnimation>  
        </div>
       <div className="col-1"></div>
       </Row>
    </Container>
    </React.Fragment>
  )
  }
}

export default App;
