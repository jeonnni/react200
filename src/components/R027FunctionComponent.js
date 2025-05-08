/**
 * 함수형 컴포넌트
 * @param {{ contents: string }} props - 부모 컴포넌트로부터 전달된 props 객체
 * 
 * 함수형 컴포넌트는 클래스형처럼 render() 함수 없이 JSX를 바로 반환한다.
 * 과거에는 state나 생명주기 함수를 사용할 수 없었지만, 현재는 React Hooks를 통해
 * 상태 관리(useState)와 생명주기 처리(useEffect 등)가 가능하다.
 * 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하며, 코드가 간결하고 가독성이 좋다.
 */

function R027FunctionComponent (props) {
    let { contents } = props;
    console.log(contents);
    
    return (
        <h2>{ contents }</h2>
    )
}

export default R027FunctionComponent;