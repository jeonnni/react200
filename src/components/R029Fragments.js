import React, { Component } from "react";

/**
 * element 반환시 하나의 <html> 태그로 감싸지 않으면 에러남
 * <React.Fragment> 태그를 약식으로 <></> 사용가능
 */

class R029Fragments extends Component {
    render(){
        return(
            // <p>P TAG</p>
            // <span>SPAN TAG</span>
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R029Fragments;