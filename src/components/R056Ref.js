import React, { Component } from "react";

// Ref - refernce 의 약자로 '참조' 라는 뜻
// element가 참조하는 변수에 접근해 변경하고 제어할 수 있다
class R056Ref extends Component {
    constructor(props){
        super(props)
        this.InputRef = React.createRef(); // ref 객체 생성
    }

    RefFocus = (e) => {
        this.InputRef.current.focus(); // ref로 참조된 input에 포커스
    }

    JavaScriptFocus(){
        document.getElementById('id').focus(); // 전통적인 방식
    }

    render(){
        return(
            <>
                <input type="text" id="id" ref={this.InputRef}></input>
                <input type="button"  value="Ref Focus" onClick={this.RefFocus}></input>
                <input type="button" value="JavaScript Focus" onClick={this.JavaScriptFocus}></input>
            </>
        )
    }
}

export default R056Ref;