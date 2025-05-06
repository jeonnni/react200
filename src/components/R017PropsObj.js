import { Component } from "react";
import dataType from 'prop-types';

/**
 * props 객체형으로 사용하기
 * 자료형은 object로 선언하고, 객체 형태(내부 변수들)의 자료형을 선언할 때는 shape 유형을 사용함
 * 
 * <Props ObjectJson={{react:'리액트',twohundred:'200'}}/>
 */

class R017PropsObj extends Component {
    render(){
        let {ObjectJson} = this.props

        return(
            <div>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R017PropsObj.propTypes = {
    ObjectJson:dataType.shape({
        react:dataType.string,
        twohundred: dataType.number,
    })
}

export default R017PropsObj;


