import { Component } from "react";


class R010ClassPrototype extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    
    componentDidMount(){

        //prototype
        let ExamCountFun = (function () {
            function ExamCountFun(num) {
                this.number = num;
            }
            ExamCountFun.prototype.showNum = function(){
                console.log(`1. react_${this.number}`);
                
            }
            return ExamCountFun;
        }());

        let cnt = new ExamCountFun('200');
        cnt.showNum();


        //class
        class ExamCountFun2 {
            constructor(num2){
                this.number2 = num2;
            }
            showNum(){
                console.log(`2. react_${this.number2}`);
            }
        }
        let cnt2 = new ExamCountFun2('2hundred');
        cnt2.showNum();

    }




    render() {
        return (
            <h2>THIS IS Class</h2>
        )
    }
}

export default R010ClassPrototype;