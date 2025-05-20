import React, { Component } from "react";
import withHocComponent from "./withHocComponent";

// 커링과 같이 함수 자체를 인자로 받거나, 반환하는 함수를 고차함수라한다
// 이와 비슷하게 컴포넌트를 인자로 받거나 반환하는 함수를 고차 컴포넌트 HOC, Higher-Order Componenet
class R058Hoc extends Component {
    render(){
        console.log('2. hocComponenet');
        
        return(
            <h2>
                props.name : {this.props.name}
            </h2>
        )
    }
}

export default withHocComponent(R058Hoc, 'R058Hoc');