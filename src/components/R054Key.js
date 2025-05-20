import { Component } from "react";

// onKeyDown - 키보드를 누르는 순간 발생하는 이벤트
// onKeyUp - 키보드를 떼는 순간 발생하는 이벤트
class R054Key extends Component {
    OnKey(event, e){
        let val = e.target.value;
        console.log(`event : ${event} , value : ${val}`);
    }

    render(){
        return(
            <>
                onKeyDown : <input type="text" onKeyDown={e => this.OnKey("onKeyDown",e)}/><br/>
                onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp", e)}/>
            </>
        )
    }
}

export default R054Key;