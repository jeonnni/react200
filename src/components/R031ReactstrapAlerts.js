import { Component } from "react";
import { Alert, UncontrolledAlert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * npm install --save reactstrap 
 * npm install --save bootstrap 
 * 
 * Alert 컴포넌트: 상태를 제어하여 표시하거나 숨길 수 있는 경고창을 생성.​
 * UncontrolledAlert 컴포넌트: 내부적으로 상태를 관리하여 자동으로 표시하거나 숨기는 경고창을 생성.
 */

class R031ReactstrapAlerts extends Component {
    render(){
        return(
            <div>
                <Alert color="light">
                    Simple Alert [color: light]
                </Alert>
                <UncontrolledAlert color="info">
                    UncontrolledAlert
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R031ReactstrapAlerts;