import React, { Component } from "react";

// 커링(Currying)이란 함수를 나눠서 리턴하는 함수
class R057Currying extends Component {
    plusNumOrString(c,d){
        return c+d;
    }
    plusFun1(a){
        return function(b){
            return this.plusNumOrString(a,b)
        }.bind(this)
    }
    plusFun2 = a => b => this.plusNumOrString(a,b)
    plusFun(a){
        return this.plusFun1(a)(200)
    }

    render(){
        return(
            <>
                <input type="button"  value="NumberPlus" onClick={e=>alert(this.plusFun(100))}></input>
                <input type="button" value="StringPlus" onClick={e=> alert(this.plusFun("react"))}></input>
            </>
        )
    }
}

export default R057Currying;