import axios from "axios";
import { Component } from "react";

// axios post 
// get 방식과의 차이 - post함수의 파라미터로 json과 같은 형태의 데이터를 넣고 http body에 담아 url을 호출할 수 있는 점
class R045AxiosPost extends Component {
    componentDidMount () {
        axios.post('https://httpbin.org/post', {
            a: 'react', b:200
        }).then(response => {alert(response.data.url)})
    }
    render(){
        return(
            <h1>axios post</h1>
        )
    }
}

export default R045AxiosPost;