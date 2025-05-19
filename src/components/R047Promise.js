import { Component } from "react";

//promise - 콜백함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용
//하지만 콜백함수와 달리 코드 가독성을 높일 수 있고, 예외 처리도 쉽게 할 수 있다.
class R047Promise extends Component {
    componentDidMount(){
        new Promise(resolve => {
            setTimeout(function(){
                resolve('react');
            },1500);
        }).then(function(result) {
            console.log(result);
            return result + 200;
        }).then(result => {
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