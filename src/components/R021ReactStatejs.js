import { Component } from "react";

/**
 * props를 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달할 때 사용했다며면, state는 하나의 컴포넌트 안에서 전역 변수처럼 사용한다.
 */

class R021ReactStatejs extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render(){
        return(
            <div>
                {this.state.StateString}
                {this.state.StateNumber}
            </div>
        )
    }
}

export default R021ReactStatejs;