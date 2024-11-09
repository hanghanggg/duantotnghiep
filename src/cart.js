import React from "react";
import './cart.css';

function Cart(){
    return(
        <div className="gh_cart">
           <div className="min_warp">
                <div className="gh_columb">
                    <div className="gh_row1">
                        <div className="gh_form">
                            <h3>Giỏ hàng của bạn</h3>
                            <form className="gh_post">
                                <div className="gh_info">
                                    <div className="info_1"> Thông tin homestay</div>
                                    <div className="info_2"> Đơn giá</div>
                                    <div className="info_2"> Số lượng </div>
                                    <div className="info_2"> Thành tiền </div>
                                </div>
                                <div className="gh_item">
                                    <div className="gh_prod">
                                        <div className="gh_content">
                                            <a className="gh_item_img" href="">
                                                <img src="https://2trip.vn/wp-content/uploads/2023/07/homestay-quang-binh-5.jpg"></img>
                                            </a>
                                            <div className="gh_item_info">
                                                <div className="gh_item_name">
                                                    <a className="item_name">
                                                        Homestay Biển Xanh
                                                    </a>
                                                    <a className="item_dele"> Xóa </a>
                                                </div>
                                                <div className="gird">
                                                    <div className="gh_item_price">
                                                        <span className="span_price"> 400.000đ </span>
                                                    </div>
                                                </div>
                                                <div className="gird">
                                                    <div className="gh_item_sl">
                                                        <span> 1 </span>
                                                    </div>
                                                </div>
                                                <div className="gird justify">
                                                    <div className="gh_item_sum">
                                                        <span className="span_price" > 400.000đ </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="gh_row2">
                        <div className="gh_form2">
                            <h3>Thông tin đơn hàng</h3>
                            <div className="gh_check">
                                <div className="gh_check_sum">
                                    <div className="gh_sum_left">
                                        Tổng tiền
                                    </div>
                                    <div className="gh_sum_right">
                                        <span className="span_price"> 400.000đ</span>
                                    </div>
                                </div>
                            </div>
                            <button className="gh_btn"> Thanh toán ngay</button>
                            <button className="gh_btn"> Tiếp tục chọn</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Cart;