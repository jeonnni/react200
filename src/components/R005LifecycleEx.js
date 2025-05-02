import { Component } from "react";

class R005LifecycleEx extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log(`1. constructor Call`);
    }

    render(){
        console.log(`3. render Call`);
        
        return(
            <h2>[R005LifecycleEx]</h2>
        )
    }
}

export default R005LifecycleEx;