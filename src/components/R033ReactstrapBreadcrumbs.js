import { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Breadcrumb 패키지는 페이지 위치 경로를 지정한 웹 내비게이션에 사용됨.
 */

class R033ReactstrapBreadcrumbs extends Component {
    render(){
        return(
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop:"1000px"}}>
                    <span>bottom</span>
                </div>
            </div>
        )
    }
}

export default R033ReactstrapBreadcrumbs;