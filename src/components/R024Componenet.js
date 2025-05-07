import { Component } from "react";

/**
 * class형 컴포넌트에는 Component 와 PureComponent가 있다
 * 두 컴포넌트 모두 props,state 변경에 따라 render() 함수를 호출하는데, 변경에 대한 기준이 다르다
 * 
 * 기본 Component
 * setState() 호출 시 무조건 실행됨
 */

class R024Componenet extends Component {

    constructor(props){
        super(props)
        this.state = {
            StateString : 'react',
            StateArrayObj : [ 'react' , { react : '200' }],
        }
    }

    buttonClick = (type) => {
        if (type === 'String') {
            this.setState({ StateString : 'react'}) 
            // 값이 같아도 render 실행
        } else {
            this.setState({ StateArrayObj : [ 'react' , { react : '200' }]})
            // 참조가 달라서 render 실행
        }
    }


    render(){
        console.log('render 실행');
        
        return(
            <div>
                <button onClick={e=>this.buttonClick('String')}>문자열 변경</button>
                <button onClick={e=>this.buttonClick('ArrayObject')}>객체 배열 변경</button>
            </div>
        )
    }
}

export default R024Componenet;