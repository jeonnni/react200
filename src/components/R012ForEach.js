import { Component } from "react";

/**
 * forEach() 함수
 * 배열의 처음부터 마지막 순번까지 모두 작업할 경우
 */

class R012ForEach extends Component{
    componentDidMount(){

        //for
        let forArr = [3,2,8,8];
        let forNewArr = [];
        for (let i = 0; i < forArr.length; i++) {
            forNewArr.push(forArr[i]);
        }
        console.log(`1. forNewArr : ${forNewArr}`);

        // forEach
        let forEachArr = [3,3,9,8];
        let forEachNewArr = [];
        forEachArr.forEach((result)=>{
            forEachNewArr.push(result);
        })
        console.log(`2. forEachNewArr : ${forEachNewArr}`);
    }

    render(){
        return(
            <h2>ForEach</h2>
        )
    }
}

export default R012ForEach;