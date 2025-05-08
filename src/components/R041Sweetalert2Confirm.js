import { Component } from "react";
import Swal from 'sweetalert2';

/**
 * 다시 한번 확인하는 알림 창 표시
 */

class R041Sweetalert2Confirm extends Component {
    deleteAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result)=>{
            if(result){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제완료',
                    'success'
                )
            }
        })
    }
    

    render(){
        return(
            <>
                <h1 id="deleteId">sweetalert2</h1>
                <button onClick={e => this.deleteAlert()}>삭제</button>
            </>
        )
    }
}

export default R041Sweetalert2Confirm;