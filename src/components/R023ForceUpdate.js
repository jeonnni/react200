import { Component } from "react";

/**
 * this.state를 직접 바꾸면 render() 함수를 호출하지 않으므로 원래는 화면에 반영되지 않지만, 
 * this.forceUpdate()는 React의 정상적인 흐름을 무시하고 강제로 렌더링을 시켜버림
 * 그래서 에러 없이 화면은 바뀌지만, 이런 코드는 비추천
 */

class R023ForceUpdate extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = () => {
        this.state.StateString = '리액트'; // ❌ 직접 state 변경 (좋지 않음)
        this.forceUpdate(); // ✅ 강제로 컴포넌트 리렌더링
    }
    
    render(){
        return(
            <div>
                <button onClick={(e)=> this.StateChange('direct', e)}>state 직접 변경</button>
                <br/>
                <br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R023ForceUpdate;