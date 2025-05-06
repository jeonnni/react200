import { Component } from "react";

/**
 * props 값을 Boolean 형으로 하위 컴포넌트에 전달할 경우 true,false 중 하나를 할당한다
 * 할당하지 않고 넘기면 기본 true 가 기본값
 */

class R016PropsBoolean extends Component {
    render(){
        let {BooleanTrueFalse} = this.props

        return(
            <div>
                {BooleanTrueFalse ? '2. ' : '1. '} 
                {BooleanTrueFalse.toString()} 
            </div>
        )
    }
}

export default R016PropsBoolean;