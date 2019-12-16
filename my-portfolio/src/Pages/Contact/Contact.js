import React from "react";
import ButtonAppBar from '../../components/Navbar'
import Container from 'react-bootstrap/Container';
import { Form, Button, Row} from "react-bootstrap";
import "./style.css";
import Footer from "../../components/Footer";
import axios from 'axios';


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            name: '',
            subjectLine: '',
            body: '',
            email: ''
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleClose = () => {
    //     this.setState({ show: false });
    //   }
    
    //   handleShow = () => {
    //     this.setState({ show: true });
    //     console.log("running")
    //   }
    

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value });
    }
    
    handleSubmit = e => {
        alert('A email was submitted by: ' + this.state.name);
        e.preventDefault();

        axios.post('http://localhost:3000/contacts',this.state).then(req =>{
            console.log(this.state);
        
            });

        }

        resetForm(){
            document.getElementById('contact-form').reset();
        }

    render() {

        const {name, subjectLine, body, email} = this.state;

        const isEnabled = email.length > 0 && subjectLine.length > 0  &&body.length > 0 && name.length > 0;

        return (
                <div className="contact-page-layout">
                    <ButtonAppBar />
                    <Container className="contactPage">
                        <h1 className="contact">
                             CONTACT ME
                             </h1>

                        <p className="contactBlurb">
                            I WILL BE GLAD TO ANSWER YOUR QUESTIONS!
                         </p>

                        <Form id="contact-form" method="POST" onSubmit={this.handleSubmit} >
                            <Form.Group  value={name} onChange={this.handleChange}>
                                <Form.Control id="name" name="name" type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group  value={email} onChange={this.handleChange}>
                                <Form.Control id="email"name="email" type="text" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group  value={subjectLine} onChange={this.handleChange}>
                                <Form.Control id="subject" name="subjectLine"  type="text" placeholder="Subject Line" />
                            </Form.Group>

                            <Form.Group  value={body} onChange={this.handleChange}>
                                <Form.Control id="message" name="body" as="textarea" rows="10" />
                            </Form.Group>
                        
                            <Button type="submit" disabled={!isEnabled} variant="warning"  >
                                Submit
                             </Button>

                        </Form>
                        <Row>

                        </Row>
                    </Container>
                    <Footer />
                </div>
        );
    }
}

export default Contact;