import { Component } from "react";






class R009SpreadOperator extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        let array1 = ["num1",'num2'];
        let array2 = ["num3",'num4'];

        // let sumArr = [array1[0], array1[1], array2[0], array2[1]];
        let sumArr = [].concat(array1,array2);
        console.log(`1. sumArr : ${sumArr}`);

        //ES6 Array
        let sumArr2 = [...array1, ...array2];
        console.log(`2. sumArr2 : ${sumArr2}`);

        const [sum1, sum2, ...remain] = sumArr2;
        console.log(`3. sum1:${sum1}, sum2:${sum2}, remain:${remain}`);
        

        let obj1 = {key1:'val1', key2:'val2'};
        let obj2 = {key2:'val2', key3:'val3'};

        let sumObj = Object.assign({}, obj1,obj2);
        console.log(`4. sumObj : ${sumObj}`);
        //ES6 Array
        let sumObj2 = {...obj1, ...obj2};
        console.log(`5. sumObj2 : ${JSON.stringify(sumObj2)}`);
        let {key1, key3, ...others} = sumObj2;
        console.log(`6. key1:${key1}, key3:${key3}, others:${JSON.stringify(others)}`);
        
        
    }




    render(){
        return(<></>)
    }
}

export default R009SpreadOperator;