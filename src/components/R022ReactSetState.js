import { Component } from "react";

/**
 * setState
 */

class R022ReactSetState extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) => {
        // if(flag == 'direct'){this.state.StateString = '리액트'}; // state를 직접 변경하면 안 됨
        if(flag == 'setState'){this.setState({StateString : '리액트'})}; // ✅ 올바른 방식
    }
    render(){
        return(
            <div>
                <button onClick={(e)=> this.StateChange('direct', e)}>state 직접 변경</button>
                <button onClick={(e)=> this.StateChange('setState', e)}>setState 로 변경</button>
                <br/>
                <br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }
}

export default R022ReactSetState;