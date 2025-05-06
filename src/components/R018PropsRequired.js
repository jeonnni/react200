import { Component } from "react";
import dataType from 'prop-types';

/**
 * props를 필수 값으로 사용하기
 * 
 * ReactString 값은 비어 있기 때문에 상위 컴포넌트에서 전달받은 ReactNumber 변숫값 200만 출력됨 
 * 
 * <Props ReactNumber={200}/>
 */

class R018PropsRequired extends Component {
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

R018PropsRequired.propTypes = {
    ReactString: dataType.isRequired,
}

export default R018PropsRequired;