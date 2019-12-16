import React from "react";
import { Row, Col } from "react-bootstrap";
import Project from './Project'
import "./style.css";



class LightboxPage extends React.Component {
        state = {

                photoIndex: 0,
                images: [
                        "https://res.cloudinary.com/ymuhammad/image/upload/v1568667141/Screen_Shot_2019-09-16_at_1.51.31_PM_cakysg.png",
                        'https://res.cloudinary.com/ymuhammad/image/upload/v1572285264/Screen_Shot_2019-09-19_at_2.35.13_PM_fyy3wb.png',
                        'https://res.cloudinary.com/ymuhammad/image/upload/v1572285329/Screen_Shot_2019-08-22_at_9.51.17_PM_oy571g.png',
                        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',

                ],

        };



        renderImages = () => {
                let photoIndex = -1;
                const { images } = this.state;

                return images.map((imageSrc, ) => {
                        photoIndex++;
                        const privateKey = photoIndex;
                        return (
                                <Col className="boxes" key={photoIndex}>
                                        <div className="ril__builtinButton">
                                                <figure>
                                                        <div className="ril__builtinButton">
                                                                <img src={imageSrc} alt="Gallery" className="img" onClick={(e) => 
                                                                        this.setState({ photoIndex: privateKey })} />
                                                                        
                                                        </div>
                                                </figure>
                                                <div className="profileImg-wrapper-inner">

                                                </div>
                                        </div>
                                </Col>
                        );
                })
        }
       
       
        render() {
                return (
                       
                        <Row className="column-head">
                                <Col className="column1" md={6}>{this.renderImages()}</Col>
                                <div className="column"><Project /></div>
                              </Row>
                
                );
        }
}

export default LightboxPage;