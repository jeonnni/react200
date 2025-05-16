import { Component } from "react";
import axios from 'axios';

// axios는 fetch 와 마찬가지로 비동기 통신을 지원 
// npm install axios
class R044AxiosGet extends Component {
    componentDidMount(){
        axios.get('https://httpbin.org/get')
            .then(response => {
                alert(response.data.url)
            })
            
    }
    render(){
        return(
            <h1>axios get</h1>
        )
    }
}

export default R044AxiosGet;