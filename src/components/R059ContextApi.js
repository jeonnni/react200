import React, { Component } from "react";
import Children from './contextChildren';

//컨텍스트 - 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있다 
//공급자(Provider), 소비자(Consumer)
const {Provider, Consumer} = React.createContext()
export {Consumer}

//부모 컴포넌트
class R059ContextApi extends Component {
    render(){
        return(
            <Provider value='React200'>
                <Children />
            </Provider>
        )
    }
}

export default R059ContextApi;