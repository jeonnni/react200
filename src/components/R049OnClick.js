import { Component } from "react";

class R049OnClick extends Component {
    buttonClick = (param) => {
        if(typeof param != 'string') param = "Click a"
        console.log(`param ${param}`);
    }

    /**
     * 세 개의 요소 모두 클릭 이벤트가 발생하면 this.buttonClick()함수가 호출되고, 각각 문자열을 param으로 넘겨줌
     * 이 함수는 매개변수 param이 문자열이 아닌 경우 "Click a"로 바꿔서 콘솔에 출력
     */
    render(){
        return(
            <>
                <button onClick={e => this.buttonClick("Click button")}>Click Button</button>
                <div onClick={e => this.buttonClick("Click div")}>Click div</div>
                <a href="#" onClick={(e) => {this.buttonClick("Click a")}}>Click a</a>
            </>
        )
    }
}

export default R049OnClick;