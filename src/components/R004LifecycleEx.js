import { Component } from "react";

/**
 * 생명주기 함수 render()
 * return 되는 html 형식의 코드를 화면에 그려주는 함수 
 */
class R004LifecycleEx extends Component{
    render () {
        console.log('3, render Call')
        return (
            <h2>[THIS IS RENDER FUNTION]</h2>
        )
    }
}


export default R004LifecycleEx;