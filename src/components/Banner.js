import { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import header from "../assets/img/angel.png";
import arrow from "../assets/img/rA.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Graphic Designer", "Graphic Artist" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I am Angelwin a `}<span classname="wrap">{text}</span></h1>
                    <p>As a dedicated graphic designer, I meticulously blend innovative creativity with meticulous attention to detail, leveraging my expertise to conceptualize and produce visually striking designs that not only convey messages with clarity but also resonate deeply with diverse audiences, captivating and inspiring them.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={header} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}