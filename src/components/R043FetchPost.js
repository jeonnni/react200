import { Component } from "react";

// POST - 서버의 상태나 데이터를 변경하는 등 수행 작업
class R043FetchPost extends Component {
    async componentDidMount () {

        //get과 비슷하지만 두번째 파라미터에 post 호출에 대한 정보가 추가가 됨 
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: { //header 부분에서 어떤 형태의 데이터를 사용할지 지정. json 형태의 데이터를 사용하기 위해 application/json 할당
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ a: "react", b: 200 }),
        });
        const body = await response.json();
        console.log(body.json); 
        alert(body.data)
    } 

    render(){
        return(
            <h1>fetch post</h1>
        )
    }
}

export default R043FetchPost;