import { Component } from "react";

/**
 * map()
 * 여러 개의 요소(element)를 반복적으로 출력할 때, 배열에 담아두고 map() 함수를 이용해 순서대로 렌더링할 수 있다.
 * React에서는 JSX를 배열로 만들고 map()으로 return하면 반복 출력이 가능하다.
 */

class R030Map extends Component {

    render(){
        const elementArr = [
            <li>react</li>,
            <li>200</li>,
            <li>Array map</li>,
        ]

        return(
            <ul>
                {elementArr.map(v=>v)}
            </ul>
        )
    }
}

export default R030Map;