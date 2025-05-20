import React from "react";
// import Children2 from './contextChildren2';
import { Consumer } from "./R060ContextApi";

//자식 컴포넌트
class contextChildren extends React.Component{
    // render(){
    //     return(
    //         //손자 컴포넌트 렌더링
    //         <Children2 />
    //     )
    // }


    render(){
        return(
            <Consumer>
                {contextValue => 
                    <button onClick={e => contextValue.setStateFunc("react!!!!")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        )
    }
}

export default contextChildren;