import { Component } from "react";

/**
 * props를 기본값으로 정의
 * props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않았을 때 사용한다 -> defaultProps 문법
 * 
 * ReactString은 기본값 리액트가 표시된다
 * ReactNumber은 부모컴포넌트에서 200이 전달됐기 때문에 200이 표시된다
 * 
 * <Props ReactNumber={200}/>
 */

class R019PropsDefault extends Component {
    render(){
        let {ReactString,ReactNumber} = this.props

        return(
            <div>
                {ReactString}
                {ReactNumber} 
            </div>
        )
    }
}

R019PropsDefault.defaultProps = {
    ReactString: '리액트',
    ReactNumber: 400,
}

export default R019PropsDefault;