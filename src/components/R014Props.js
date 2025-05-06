import { Component } from "react";

/**
 * props 는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용하고, 전달받은 자식 컴포넌트에서 데이터를 수정할 수 없다.
 * 데이터를 변경하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야 한다
 */

class R014Props extends Component {
    render(){
        let propsVal = this.props.propsVal;
        propsVal += 'from App.js';

        return(
            <h2>{propsVal}</h2>
        )
    }
}

export default R014Props;