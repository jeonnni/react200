import { Component } from "react";

// onMouseMove는 마우스가 해당 요소 위에서 움직일 때 계속해서 호출되는 이벤트
class R051OnMouseMove extends Component {
    MouseMove(tag){
        console.log(`TAG ${tag}`);
    }

    render(){
        return(
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                    <h3>DIV onnMouseMove</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")}></input>
                <select onMouseMove={e=> this.MouseMove("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R051OnMouseMove;