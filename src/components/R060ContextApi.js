import React from 'react';
import Children from './contextChildren';

const {Provider, Consumer} = React.createContext()
export {Consumer}

//props는 데이터가 부모->자식 컴포넌트로 단방향으로만 이동할 수 있지만, 컨텍스트를 사용하면 자식->부모도 가능 
class R060ContextApi extends React.Component {

    constructor(props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value){
        this.setState({name:value})
    }

    render(){
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc 
        }

        return(
            <Provider value={content}>
                <Children />
            </Provider>
        )
    }
}

export default R060ContextApi;