import { Component } from "react";

// form 제출 이벤트를 처리하고, 그 안에 입력된 값을 콘솔에 출력하는 예제
class R055OnSubmit extends Component {
    Submit(e){
        let inputValue = document.getElementById("inputId").value;
        console.log(`inputValue : ${inputValue}`);
        e.preventDefault(); //기본 동작 막기 (form은 기본적으로 제출 시 새로고침 되는데, 그걸 막는 코드)
    }

    render(){
        return(
            <>
                <form onSubmit={this.Submit}>
                    <input type="text" name="inputValue" id="inputId"/>
                    <input type="submit" value="제출"/>
                </form>
            </>
        )
    }
}

export default R055OnSubmit;