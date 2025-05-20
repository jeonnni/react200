import { Component } from "react";

// onMouseOut 특정 tag 영역 안에 마우스 커서가 진입했다가 '벗어날때' 발생
class R053OnMouseOut extends Component {
    MouseOut(tag){
        console.log(`TAG ${tag}`);
    }

    render(){
        return(
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>DIV onMouseOut</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")}></input>
                <select onMouseOut={e=> this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R053OnMouseOut;