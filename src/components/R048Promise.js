import { Component } from "react";

class R048Promise extends Component {
    componentDidMount(){
        /**
         * resolve()는 성공했을 때,
         * reject()는 실패했을 때 호출.
         */
        new Promise ((resolve, reject)=>{
            reject(Error("error info"))
        })
        .then(result => console.log(`then ${result}`)) //.then()은 resolve()가 호출되었을 때 실행되지만 reject()만 호출되었기 때문에 .then()은 무시됨
        .catch(result => console.log(`catch ${result}`)); //.catch()는 reject()가 호출되었을 때 실행 
    }

    //catch Error: error info 출력
    render(){
        return(
            <h1>Promise</h1>
        )
    }
}

export default R048Promise;