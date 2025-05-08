import { Component } from "react";
import Swal from 'sweetalert2';

/**
 * Sweetalert 패키지는 다양한 디자인과 기능의 알람창을 지원한다
 * Swal.fire()-> 비동기 함수
 */

class R039Sweetalert28Basic extends Component {
    componentDidMount(){
        // Swal.fire('1. SweetAlert')
        // alert('2. alert()')


        // Swal 알림창 표시 (비동기) 사용자가 닫을 때까지 기다림
        // 닫으면 .then() 실행 → alert로 결과 출력
        Swal.fire('1. SweetAlert').then(result=>
        { alert(`2. result.value : ${result.value}`)}
        )
    }

    render(){
        return(
            <h1>sweetalert2</h1>
        )
    }
}

export default R039Sweetalert28Basic;