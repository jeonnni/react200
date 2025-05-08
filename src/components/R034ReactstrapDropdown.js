import { Component } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Dropdown 패키지는 대표 메뉴를 클릭하면 하위 메뉴 리스트가 표시되는 기능 
 */

class R034ReactstrapDropdown extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            dropdownOpen:false
        }
    }

    toggle = (e) => {
        this.setState({ dropdownOpen : !this.state.dropdownOpen })
    }

    render(){
        return(
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="http://example.com">
                        <DropdownItem>example 웹사이트로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={e=> alert("버튼")}>버튼</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default R034ReactstrapDropdown;