import React, { Component } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//"Use of comments during the code"

class App extends Component {
  state = {
    person: {
      fullName: "Void",
      bio: "Plays video games",
      imgSrc: "https://i.ibb.co/3YkBqxZ/spoonkid69420.jpg",
      profession: "Student",
    },
    show: false,
    inter: new Date(),
  };
  
//"Use of comments during the code"
tog = () => this.setState(({ show }) => ({ show: !show }));
//"Use of comments during the code"
calc = () => Math.floor((new Date() - this.state.inter) / 1000);

render() {
  const { fullName, bio, imgSrc, profession } = this.state.person;
  const { show } = this.state;
  //"Use of comments during the code"
  return (
      <>
        <Button variant="primary" onClick={this.tog}>Show Profile</Button>{' '}
        {show ? (
          <div className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgSrc} id="gg"/>
              <Card.Body>
                <Card.Title>{fullName}</Card.Title>
                <Card.Text>
                  <p><strong>Bio:</strong> {bio}</p>
                  <p><strong>Profession:</strong> {profession}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : null
        } <br /><br />
        <h3>The time since the component was mounted: <span style={{textDecoration:"underline"}}>{this.calc()} seconds</span></h3>
      </>
    );
  }
}
//"Use of comments during the code"

export default App;

//"Use of comments during the code"