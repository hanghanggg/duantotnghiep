import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="banner-top">
                <img
                    src="https://theme.hstatic.net/200000909393/1001269498/14/banner_header_about_us.jpg?v=2535" 
                    alt="Khách sạn từ năm 1998"
                    className="banner-image"
                />
                <div className="banner-text-top">
                    <h3>MỘT KHÁCH SẠN MANG TÍNH BIỂU TƯỢNG TỪ NĂM 1998</h3>
                    <h1>Giới thiệu</h1>
                    <p>Thiên đường nghỉ dưỡng, yên tĩnh và phục hồi</p>
                </div>
            </section>

            {/* Content Section with Image and Text */}
            <section className="content-section">
                <p className="welcome-text">CHÀO MỪNG BẠN ĐẾN VỚI MAPLE INN</p>
                <h2>Nằm ngay trung tâm thành phố, cảnh quan tuyệt đẹp</h2>
                <p className="description-text">
                    Nằm giữa lòng khu nghỉ dưỡng, trên rìa của một những con dốc yên tĩnh và xinh đẹp, Maple Inn là thiên đường ấm áp, tĩnh lặng và trẻ hóa. Tắm mình trong ánh nắng rực rỡ và bầu trời trong xanh, nơi đây có tầm nhìn tuyệt đẹp ra những bãi biển rợp bóng cọ và rạn san hô tuyệt đẹp.
                </p>
            </section>  

            {/* Image Row Section */}
            <section className="image-row-section">
                <div className="image-row">
                    <div className="image-item">
                        <img 
                            src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_1_banner_1.jpg?v=2537" 
                            alt="Ảnh 1"
                            className="image"
                        />
                    </div>
                    <div className="image-item">
                        <img 
                            src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_1_banner_2.jpg?v=2537" 
                            alt="Ảnh 2"
                            className="image"
                        />
                    </div>
                    <div className="image-item">
                        <img 
                            src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_1_banner_3.jpg?v=2537" 
                            alt="Ảnh 3"
                            className="image"
                        />
                    </div>
                </div>
            </section>

            {/* Banner Below Images */}
            <section className="banner-bottom">
                <img
                    src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_parallax_bg.jpg?v=2535" 
                    alt="Tận hưởng kỳ nghỉ tại Paradiso"
                    className="banner-image-bottom"
                />
                <div className="banner-text-bottom">
                    <h3>TẬN HƯỞNG KỲ NGHỈ CỦA BẠN TẠI PARADISO</h3>
                    <h1>Hãy tận hưởng kỳ nghỉ thoải mái của bạn tại trung tâm khu rừng xinh đẹp</h1>
                </div>

                {/* Overlay Text */}
                <div className="banner-overlay-text">
                    <h4>72</h4>
                    <h4>Phòng Premium</h4>
                    <h4>20</h4>
                    <h4>Phòng Deluxe</h4>
                    <h4>12</h4>
                    <h4>Nhà gỗ riêng</h4>
                    <h4>9</h4>
                    <h4>Năm thành lập</h4>
                </div>
            </section>

            {/* Content Boxes with Button */}
            <section className="content-boxes">
                <div className="text-box">
                    <h2>Trải nghiệm lưu trú tuyệt vời tại Maple Inn</h2>
                    <h1>Phòng nghỉ tự nhiên và nhà gỗ riêng</h1>
                    <p>
                        Nằm giữa lòng khu nghỉ dưỡng, trên rìa của một những con dốc yên tĩnh và xinh đẹp, Maple Inn là thiên đường ấm áp, tĩnh lặng và trẻ hóa. Tắm mình trong ánh nắng rực rỡ và bầu trời trong xanh, nơi đây có tầm nhìn tuyệt đẹp ra những bãi biển rợp bóng cọ và rạn san hô tuyệt đẹp.
                    </p>
                    <button className="book-now-button">Đặt phòng ngay</button> {/* Button added here */}
                </div>
                <div className="image-box">
                    <img
                        src="https://product.hstatic.net/200000909393/product/clay-banks-tgpeqzybnkc-unsplash-780x520_eecbdd4aeb6d47f28fcdceebd40bf604_1024x1024.jpg" 
                        alt="Phòng nghỉ tại Maple Inn"
                        className="room-image"
                    />
                </div>
            </section>

            {/* Additional Content Section */}
            <section className="content-boxess">
                <div className="image-box">
                    <img
                        src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_3_banner_1.jpg?v=2537" 
                        alt="Hình ảnh nhỏ Maple Inn"
                        className="room-image-small"
                    />
                    <img
                        src="https://theme.hstatic.net/200000909393/1001269498/14/about_us_3_banner_2.jpg?v=2537" 
                        alt="Phòng nghỉ tại Maple Inn"
                        className="room-image-large"
                    />
                </div>
                <div className="text-box">
                    <h2>Trải nghiệm lưu trú tuyệt vời tại Maple Inn</h2>
                    <h1>Phòng nghỉ tự nhiên và nhà gỗ riêng</h1>
                    <p>
                        Nằm giữa lòng khu nghỉ dưỡng, trên rìa của một những con dốc yên tĩnh và xinh đẹp, Maple Inn là thiên đường ấm áp, tĩnh lặng và trẻ hóa. Tắm mình trong ánh nắng rực rỡ và bầu trời trong xanh, nơi đây có tầm nhìn tuyệt đẹp ra những bãi biển rợp bóng cọ và rạn san hô tuyệt đẹp.
                    </p>
                    <button className="book-now-button">Đặt phòng ngay</button>
                </div>
            </section>

            {/* Service Section */}
            <section className="section-about-us-service">
                
                    <div className="heading-title text-center">
                        <p className="title1">Dịch vụ và Tiện nghi</p>
                        <h2 className="title2">Tất cả cho một kỳ nghỉ ấm cúng và thoải mái</h2>
                        <p className="heading-desc">Các tiện nghi hiện đại bao gồm phòng chờ gác xép hai tầng ấn tượng, phòng chờ trên tầng thượng ngoạn mục, trung tâm thể dục, góc truyền thông và đội ngũ dịch vụ tận tình phục vụ 24/7.</p>
                    </div>
                    <div className="row">
                        {[
                            {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_1.jpg?v=2537",
                                alt: "Dịch vụ đưa đón sân bay",
                                title: "Dịch vụ đưa đón sân bay",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            },
                            {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_2.jpg?v=2537",
                                alt: "Dịch vụ quản gia",
                                title: "Dịch vụ quản gia",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            },
                            {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_3.jpg?v=2537",
                                alt: "Wifi & Internet",
                                title: "Wifi & Internet",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            }, {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_4.jpg?v=2537",
                                alt: "Dịch vụ giặt ủi",
                                title: "Dịch vụ giặt ủi",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            },
                            {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_5.jpg?v=2537",
                                alt: "Bữa sáng tại phòng",
                                title: "Bữa sáng tại phòng",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            },
                            {
                                src: "//theme.hstatic.net/200000909393/1001269498/14/about_us_service_img_6.jpg?v=2537",
                                alt: "Hồ bơi vô cực",
                                title: "Hồ bơi vô cực",
                                desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-12">
                                <div className="service-item">
                                    
                                    <div className="item-detail">
                                        
                                    <div className="item-icon">
                                        <img src={item.src} alt={item.alt} />
                                    
                                        <h3 className="detail-title">{item.title}</h3>
                                        <p className="detail-desc">{item.desc}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
            </section>
        </div>
    );
};

export default Banner;

			
