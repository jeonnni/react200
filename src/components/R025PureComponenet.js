import { PureComponent } from "react";

/**
 * class형 컴포넌트에는 Component 와 PureComponent가 있다
 * 두 컴포넌트 모두 props,state 변경에 따라 render() 함수를 호출하는데, 변경에 대한 기준이 다르다
 * 
 * 성능 최적화된 PureComponenet
 * PureComponent는 state나 props가 바뀐 것 같아도 값이 같으면 렌더링 안 함.
 * 객체/배열은 참조가 다르면 무조건 다르다고 판단해서 render됨.
 */

class R025PureComponenet extends PureComponent {

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
            // 값 같음 -> render 안 됨
        } else {
            this.setState({ StateArrayObj : [ 'react' , { react : '200' }]})
            // 참조 달라짐 -> render 실행
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

export default R025PureComponenet;