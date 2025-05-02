import { Component } from "react";

class R011ArrowFunction extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrowFun: 'react200',
            num:3,
        };
    };

    componentDidMount(){
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1){
            return console.log(`${num1}, Es5 Function`);
        }
    }


    Function2 = (num1,num2) => {
        let num3 = num1+num2;
        console.log(`${num3}, Arrow Function : ${this.state.arrowFun}`);
    }

    Function3 = () => {
        //1. 콜백함수 내부에서는 컴포넌트에 this로 접근❌ 그래서 변수에 this를 백업
        let this_bind = this;
        setTimeout(function(){
            //2. 백업된 변수 this_bind를 통해 컴포넌트에 state에 접근
            console.log(`${this_bind.state.num}, Es5 Callback Function noBind`);
            // console.log(`${this.state.arrowFun}`);
            // 콜백함수 내부에서 this는 window 객체다. this로 state 변수에 접근하면 undefined
        },100);
    }

    Function4() {
        setTimeout(function(){
            console.log(`4. Es5 Callback Function Bind, ${this.state.arrowFun}`);
        }.bind(this),100); //콜백함수에 함수 밖의 this를 바인딩 해주면 this를 컴포넌트로 사용할 수 있다
    }


    // //화살표 함수는 this를 자동으로 바인딩 함
    Function5 = (num1,num2,num3) => {
        let num4 = num1+num2+num3;
        setTimeout(()=>{ 
            console.log(`${num4}, Arrow Callback Function, ${this.state.arrowFun}`);
        },100);
    }


    render() {
        return(
            <h2>this is arrow function</h2>
        )
    }
}

export default R011ArrowFunction;