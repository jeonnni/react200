import { Component } from "react";

// input이랑 select 요소에서 입력값이 바뀔 때(onChange) 어떤 동작을 할지 보여주는 예제
class R050OnChange extends Component {
    change = (e) => {
        let val = e.target.value; // 이벤트가 발생한 요소(input이나 select)의 현재 값
        console.log(`param ${val}`);
    }

    render(){
        return(
            <>
                <input type="text" onChange={this.change}></input>
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R050OnChange;