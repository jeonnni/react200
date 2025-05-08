import { useEffect, useState } from "react";

/**
 * 함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state 생명주기 함수와 같은 기능을 사용하기 위해 hook을 이용한다
 * 대표적인 hook 함수에는 useState(), useEffect()
 */

function R028Hook (props) {
    const [contents, setContents] = useState('[THIS IS REACT]');
    useEffect(()=>{
        console.log('useEffect');
    });
    return (
        <div>
            <h2>{contents}</h2>
            <button onClick={()=>setContents('[THIS IS Hook!!!!!]')}>버튼</button>
        </div>
    )
}

export default R028Hook;