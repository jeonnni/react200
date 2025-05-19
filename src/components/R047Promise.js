import { Component } from "react";

//promise - 콜백함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용
//하지만 콜백함수와 달리 코드 가독성을 높일 수 있고, 예외 처리도 쉽게 할 수 있다.
class R047Promise extends Component {
    componentDidMount(){
        new Promise(resolve => {
            setTimeout(function(){
                //resolve -> 작업이 성공적으로 끝났을 때 호출하는 함수
                resolve('react'); 
            },1500);
        }).then(function(result) { 
            //.then()은 Promise가 성공(resolve) 했을 때 실행. 
            // result는 'react'
            //콘솔에 'react'를 출력하고, 'react200'을 다음 .then()으로 넘겨줌 
            console.log(result);
            return result + 200; 
        }).then(result => { 
            //result는 'react200'
            console.log(result);
            
        })
    }
    render(){
        return(
            <h1>Promise</h1>
        )
    }
}

export default R047Promise;