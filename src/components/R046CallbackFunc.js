import { Component } from "react";

//자바스크립트는 비동기적으로 동작한다
//하지만 콜백함수를 이용하면 특정 코드에 순서를 정해 원하는 시점에 실행할 수 있다 
class R046CallbackFunc extends Component {
    componentDidMount(){

        // 첫 번째 logPrint 실행: param = 1, 콜백 함수 전달
        this.logPrint(1, (return1) => {
            console.log("return: "+ return1); 

            // 두 번째 logPrint 실행: param = return1 = 2, 콜백 함수 전달
            this.logPrint(return1, (return2) => {
                console.log("return2: "+ return2); 
            })
        });
    }

    logPrint(param, callback) {
        console.log("logPrint param"+ param); 
        param += param; // param을 자기 자신과 더함
        callback(param);
    }

    render(){
        return(
            <h1>callback</h1>
        )
    }
}

export default R046CallbackFunc;