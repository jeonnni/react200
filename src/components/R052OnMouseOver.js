import { Component } from "react";

// onMouseOver 이벤트는 특정 tag 영역 안에 마우스 커서가 진입할때 발생
// onMouseOver , onMouseMove 차이 
// onMouseOver 는 마우스가 영역에 "들어가는 순간"에만 실행됨.
// onMouseMove 는 해당 영역 위에서 마우스를 움직이는 동안 계속 실행됨.
class R052OnMouseOver extends Component {
    MouseOver(tag){
        console.log(`TAG ${tag}`);
    }

    render(){
        return(
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")}></input>
                <select onMouseOver={e=> this.MouseOver("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R052OnMouseOver;