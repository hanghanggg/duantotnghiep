import React, { useState } from 'react';
import './HF.css';
function Header() {
    const [active, setActive] = useState("");

    const handleActive = () => {
        if (active === "") {
            setActive("active") 
        }else{ 
            setActive("")
        }
    }
    return(
        <header>
        <div className="bg_menu" data-aos="fade" data-aos-easing="linear" data-aos-duration="700">
            <div className="min_warp">
                <div className="wap_menu">
                    <div className="logo">
                        <a href="/">
                            <img src="/image/Logo.png" alt="Logo PARADICO"/>
                        </a>
                    </div>
                    {/* <!-- logo --> */}
                    <nav className="navbar">
                        <ul className="list_menu">
                            <li className="">
                                <a href="/trangchu" title="Trang chủ"> 
                                    Trang chủ
                                </a>
                            </li>
                            <li className="">
                                <a href="/" title="Trang chủ"> 
                                Về Maple Inn
                                </a>
                            </li>
                            <li className="">
                                <a href="/phong" title="Trang chủ"> 
                                    Phòng
                                </a>
                            </li>
                            <li className="has-submenu active ">
                                <a href="" title="Dịch vụ tại Maple Inn">
                                    Dịch vụ tại Maple Inn
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" x="0" y="0" viewBox="0 0 128 128"><g><path d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></g></svg>
                                </a>
                                <ul className="menuList-submain">
                                    <li className="active">
                                        <a href="/dichvu" title="Nhà hàng"> 
                                            Nhà hàng
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/tiec" title="Tiệc &amp; Sự kiện"> 
                                            Tiệc &amp; Sự kiện
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/spa" title="Spa &amp; Massage"> 
                                            Spa &amp; Massage
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="/cn" title="Trang chủ"> 
                                Cẩm nang du lịch
                                </a>
                            </li>
                            <li className="">
                                <a href="/Banner" title="Trang chủ"> 
                                Giới thiệu
                                </a>
                            </li>
                            <li className="">
                                <a href="/lienhe" title="Trang chủ"> 
                                Liên hệ
                                </a>
                            </li>
                        </ul>  
                        {/* <div className="header_hotline">
                            <a href="">
                                <span>
                                Tel: 09743231234
                                </span>
                            </a>
                        </div> */}
                        <div className="contact_menu">
                            <a href="#"><button className="ocean-button" id="oceanButton">Liên hệ ngay</button></a>
                        </div>
                    </nav>
                    {/* <!-- nav -->
                    <!-- navmobile -->
                    <!-- hiển thị thanh slidebar mobile bằng input checked --> */}
                    <label  for="click_open_close" className="menu_icon" id="menu-icon"><i className="fa-light fa-bars"></i></label>
                    <input hidden type="checkbox" name="" className="nav_input" id="click_open_close"/>
                    <label  for="click_open_close" className="box_overlay"></label>
                        {/* <!-- slidebar mobile --> */}
                        {/* <div className="sidebar_mobile">
                            <label  for="click_open_close" className="x_sdide_bar"><i className="fa-sharp fa-regular fa-x"></i></label>
                            <div className="logo_mb">
                                <a href="#">
                                    <img src="/image/Logo.png" alt="Logo PARADICO"/>
                                </a>
                            </div>
                            <div className="dkdn_mb">
                                <p className="t_dkdn_mb">Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.</p>
                                <a href="#">Đăng nhập &amp; Đăng ký</a>
                            </div>
                            <div className="wap_menu_mobile"> 
                                <ul className="menu_mobile">
                                    <li><a href="./index.html" className="active" >Trang chủ</a></li>
                                    <li className="has-submenu">
                                        <a href="#" className={"submenu-toggle " + (active)} >Về Paradico <span onClick={handleActive}><i className="fa-light fa-chevron-down"></i></span></a>
                                        <ul className={"submenu_mobile " + (active)}>
                                            <li><a href="XXXX">blabla</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="XXXX">Phòng</a></li>
                                    <li className="has-submenu">
                                        <a href="./Dich_Vu.html" className="submenu-toggle" >Dịch vụ tại Paradico <span><i className="fa-light fa-chevron-down"></i></span></a>
                                        <ul className="submenu_mobile">
                                            <li><a href="./dvkd_map.html">Đơn vị kinh doanh Map</a></li>
                                            <li><a href="./dvkd_navi.html">Đơn vị kinh doanh Navigation</a></li>
                                            <li><a href="./dvkd_tracking.html">Đơn vị kinh doanh Tracking</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href="/BlogPage" className="submenu-toggle" >Cẩm nang du lịch <span><i className="fa-light fa-chevron-down"></i></span></a>
                                        <ul className="submenu_mobile">
                                            <li><a href="XXXX">Kiểm tra bảo hành</a></li>
                                            <li><a href="XXXX">Kích hoạt bảo hành </a></li>
                                            <li><a href="XXXX">Câu hỏi thường gặp </a></li>
                                            <li><a href="XXXX">Map API </a></li>   
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href="XXXX" className="submenu-toggle" >Giới thiệu<span><i className="fa-light fa-chevron-down"></i></span></a>
                                        <ul className="submenu_mobile">
                                            <li><a href="#">Chính sách bảo mật</a></li>
                                            <li><a href="#">Chính sách đổi trả</a></li>
                                            <li><a href="#">Chính sách bảo hành</a></li>
                                            <li><a href="#">Chính sách giao nhận</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./Lien_he.html">Liên hệ</a></li>
                                </ul>
                                <ul className="list_social_rwd">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-square-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <!-- slidebar mobile -->
                    <!-- navmobile --> */}
                </div>
            </div>
        </div>
        <div style={{height:'70px'}}></div>
       </header>
    )
}
export default Header;
