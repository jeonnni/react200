import { Component } from "react";




class R006LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log(`2. getDerivedStateFromProps Call : ${props.props_value}`);
        return {};
    }

    constructor(props){
        super(props);
        this.state = {};
        console.log(`1. constructor Call`)
    }

    render(){
        console.log(`3. render Call`)
        return(
            <h2>R006LifecycleEx</h2>
        )
    }
}

export default R006LifecycleEx;