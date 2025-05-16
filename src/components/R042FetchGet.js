import { Component } from "react";

// GET - 데이터 조회해 가져옴
class R042FetchGet extends Component {
    async componentDidMount () {
        try {
            // fetch()로 외부 서버에 데이터 요청을 보냄 (비동기)
            // const response = await fetch('http://date.jsontest.com/');
            const response = await fetch('https://httpbin.org/get');
            console.log(response);
            

            // 받은 응답을 JSON 형식으로 변환 (또 비동기)
            const body = await response.json();
            
            // 변환된 JSON 객체에서 날짜 값을 꺼내서 알림창으로 보여줌
            alert(body.data)

        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <h1>fetch get</h1>
        )
    }
}

export default R042FetchGet;
