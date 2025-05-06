import { Component } from "react";

/**
 * Map() 함수
 * 차이점? return 으로 반환값을 받을 수 있음
 */

class R013Map extends Component {

    componentDidMount(){

        let mapArr = [3,2,8,8];
        let mapNewArr = mapArr.map(x=>x);
        console.log(`1. mapNewArr : ${mapNewArr}`);


        let mapMulitArr = mapArr.map(x => x*2);
        console.log(`1. mapMulitArr : ${mapMulitArr}`);


        let objArr = [
            {key:'react', value:'200'},
            {key:'리액트', value:'TowHundred'},
        ];
        let mapObj = objArr.map((obj,i)=>{
            console.log(`${i+3}, obj : ${JSON.stringify(obj)}`);

            //return 으로 반환값을 받을 수 있음
            return obj
        });
        //return 으로 반환값을 받을 수 있음 -> 안하면 '5. mapObj : [null,null]' 출력
       console.log(`5. mapObj : ${JSON.stringify(mapObj)}`);
        
    };

    render(){
        return(
            <h2>R013Map</h2>
        );
    }
}

export default R013Map;