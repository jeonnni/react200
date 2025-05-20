import React from "react";

export default function withHocComponent(InComponent, InComponentName){
    return class OutComponent extends React.Component{
        componentDidMount(){
            console.log(`3. InComponentName : ${InComponent}`);
        }
        render(){
            console.log('1. InComponent render');
            return(
                <InComponent {...this.props}></InComponent>
            )
        }
    }
}