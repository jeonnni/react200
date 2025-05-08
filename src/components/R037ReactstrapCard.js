import { Component } from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶음 
 * Card 단위로 리스트를 만들어 반복해서 출력하면 정형화된 콘텐츠 목록을 만들 수 있다
 */

class R037ReactstrapCard extends Component {
    render(){
        return(
            <div>
                <Card>
                    <CardImg top height="200px" src="http://bitly.kr/4KkfRxZfR" alt="Card img"></CardImg>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R037ReactstrapCard;