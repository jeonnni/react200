import { Component } from "react";

/**
 * props 자식 컴포넌트에 node 전달하기
 * 
 * node란? html문서를 구성하는 포괄적인 개념. 노드의 종류에는 문서요소,속성,텍스트,주석 등이 있다.
 * <p id="a">bc</p> 에서 <p>태그가 요소, id가 속성, bc가 텍스트 
 * 
 * <Props><span>node from App.js</span></Props>
 */

class R020PropsNode extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default R020PropsNode;