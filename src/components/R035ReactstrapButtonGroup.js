import { Component } from "react";
import { Button, ButtonGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * ButtonGroup 패키지는 비슷한 형태와 기능을 하는 버튼들을 그룹으로 관리할 수 있게 지원함 
 */

class R035ReactstrapButtonGroup extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            number:10
        }
    }

    move = (type,e) => {
        if(type === 'Left'){
            this.setState({number:this.state.number - 1})
        } else if(type === 'Right'){
            this.setState({number:this.state.number + 1})
        }
    }

    render(){
        return(
            <div>
                <ButtonGroup>
                    <Button onClick={e=>this.move('Left')}>Left</Button>
                    <Button onClick={e=>this.move('Middle')}>Middle</Button>
                    <Button onClick={e=>this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br/>
                {this.state.number}
            </div>
        )
    }
}

export default R035ReactstrapButtonGroup;