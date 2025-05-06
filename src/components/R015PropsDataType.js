import { Component } from "react";
import dataType from 'prop-types'; 
/**
 * prop-types -> props의 자료형 선언을 위해 리액트 기본 내장 패키지를 임포트
 * 데이터 유효성 검증을 하고 콘솔에 경고 메시지 출력
 */


class R015PropsDataType extends Component {
    render(){
        
        // 1. 지역 변수를 선언해 props로 전달된 값들을 할당
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props

        return (
            <div>
                <p>String : {String}</p>
                <p>Number : {Number}</p>
                <span>BooleanProps : {Boolean.toString()}</span>
                <p>ArrayProps : {Array}</p>
                <p>Object Json Props : {JSON.stringify(ObjectJson)}</p>
                <p>Function Props : {Function()}</p>
            </div>
        )
    }
}

//2. props 값들 각각에 적합한 자료형을 선언
R015PropsDataType.propTypes = {
    String: dataType.number,
    Number: dataType.number,
    Boolean: dataType.bool,
    Array: dataType.array,
    Object: dataType.object,
    Function: dataType.func,
}

export default R015PropsDataType;