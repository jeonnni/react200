import { PureComponent } from "react";
import { shallowEqualArrays } from "shallow-equal";
/**
 * shallow-equal이라는 패키지를 이용해서 배열을 얕은 비교(shallow compare) 하는 걸 실습하는 예제
 * npm install shallow-equal 패키지 설치
 */

class R026ShallowEqual extends PureComponent {

    constructor(props){
        super(props)
        this.state = {StateString : 'react'}
    }

    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount(){
        const obj = {react:'200'};
        const arr1 = ['리액트', obj]; // obj를 참조
        const arr2 = ['리액트', obj]; // 같은 obj를 참조 → 같다고 판단
        const arr3 = ['리액트', {react:'200'}]; // 새 객체 → 같아 보여도 다름

        console.log(`shallowEqualArrays(arr1,arr2) : ${shallowEqualArrays(arr1,arr2)}`); // true (같은 객체 참조)
        console.log(`shallowEqualArrays(arr2,arr3) : ${shallowEqualArrays(arr2,arr3)}`); // false (다른 객체 참조)

        this.setState({StateString : 'react'})
        
    }


    render(){
        console.log('render 실행');
        
        return(
            <></>
        )
    }
}

export default R026ShallowEqual;