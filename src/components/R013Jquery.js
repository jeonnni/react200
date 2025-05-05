import { Component } from "react";
import $ from 'jquery';

/**
 * Jquery
 * JavaScript 라이브러리 -> 이벤트처리, 애니메이션 등 JavaScript 기능을 간단하고 빠르게 구현할 수 있도록 해줌
 */

class R013Jquery extends Component {
    
    inputAlert = (e) => {
        let inputVal = $("#inputId").val();
        alert(inputVal);
        
        $("#inputId").val("");
    }

    render (){
        return (
            <div>
                <h2>R013Jquery</h2>
                <input id="inputId" name="inputName" />
                <button id="buttonId" onClick={e=>this.inputAlert(e)}>Jquery Button</button>
            </div>
            
        )
    }
}

export default R013Jquery;