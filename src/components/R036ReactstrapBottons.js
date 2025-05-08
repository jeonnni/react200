import { Component } from "react";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Bottons 패키지는 <Bottons> 태그에 color 속성에 약속된 문자열을 넣으면 용도에 맞는 버튼 스타일을 지원함 
 */

class R036ReactstrapBottons extends Component {
    render(){
        return(
            <div>
                <Button color="primary">버튼</Button>
                <Button color="info">버튼</Button>
                <Button color="success">버튼</Button>
                <Button color="warning">버튼</Button>
                <Button color="danger">버튼</Button>
                <Button color="dark">버튼</Button>
                <Button color="secondary">버튼</Button>
                <Button color="light">버튼</Button>
            </div>
        )
    }
}

export default R036ReactstrapBottons;