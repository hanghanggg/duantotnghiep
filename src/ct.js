import React , { useState } from 'react';
import { Link , useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './ChiTiet.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './ct.css';

const CT = () => {
    const [checkInDate, setCheckInDate] = useState(new Date()); // Mặc định là ngày hôm nay
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [images, setImages] = useState([]);
    const { id } = useParams(); // Lấy id từ URL
    const [homestay, setHomestay] = useState(null);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchHomestay = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/ct_homestay/${id}`);
                setHomestay(response.data);
            } catch (error) {
                console.error('Error fetching homestay:', error);
            }
        };
        fetchHomestay();
    }, [id]);

    const fetchHomestayImages = async () => {
    try {
    const response = await fetch('http://localhost:3000/dshinhanh');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setImages(data); // Đặt dữ liệu vào state
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
};
useEffect(() => {
    fetchHomestayImages();
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`http://localhost:3000/homestaylienquan/${id}`);
        const data = await response.json();
        console.log(data); // Kiểm tra dữ liệu từ API
  
        // Lọc dữ liệu để loại bỏ các id_homestay trùng lặp
        const uniqueRooms = data.filter((room, index, self) => 
          index === self.findIndex((r) => r.id_homestay === room.id_homestay)
        );
  
        // Cập nhật danh sách rooms
        setRooms(uniqueRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, [id]);
  
  
  
  return (  
    <div style={{ position: 'relative' }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        effect="coverflow"
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }} 
        loop={true} // Bật chế độ lặp cho Swiper
      >
         {images.length > 0 ? (
        images.map((image, index) => {
        if(homestay.id_homestay == image.id_homestay) {
        return (
            <SwiperSlide >
                <div className='wrap_img'>
                <img className='detail' src={image.url_hinh} alt={image.ten_homestay} />
                </div>
            </SwiperSlide>
            )
        }   
        }))
        :
        (
        <p> Không có hình để hiển thị</p>
        )}
      </Swiper>

     
      <div className="swiper-button-prev">
        &#10094;
      </div>
      <div className="swiper-button-next">
        &#10095; 
      </div>
      {/* <div className="productDetail--gallery">
            <div className="product-container-gallery">
                <div className="wrapbox-gallery">
                    <div className="wrapbox-image">
                        <div className="productGallery_slider">
                            <div className="gallery">
                                {images.length > 0 ? (
                                images.map((image, index) => {
                                if(homestay.id_homestay == image.id_homestay) {
                                return (
                                    <div key={index}  className="large">
                                        <img src={image.url_hinh} alt={image.ten_homestay || 'Hình ảnh homestay'}/>
                                    </div>
                                    )
                                }   
                                }))
                                :
                                (
                                <p> Không có hình để hiển thị</p>
                                )}
                            </div>
                            <div className="icon-gallery pc-show mb-show">
                                <span>Xem tất cả ảnh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

      <div className="min_warp">
          <div className="productDetail--content">
              <div className="wrapbox-inner">
                  <div className="d-flex flex-wrap">
                      <div className="col-lg-8 col-md-12 col-12 wrapbox-left">
                          {homestay ?(
                          <div class="proloop-detail">
                              <h3><a href="/products/double-suite">{homestay.ten_homestay}</a></h3>
                              <div class="pro-tag">
                                  <div class="tag-item tag-area">
                                      <span>150</span> <span class="tag-unit">m<sup>2</sup></span>
                                  </div>                                     
                                  <div class="tag-item tag-guests">
                                      <span>10</span> <span class="tag-unit">Guests</span>
                                  </div>
                                  <div class="tag-item tag-bed">
                                      <span>5</span> <span class="tag-unit">Beds</span>
                                  </div>
                                  <div class="tag-item tag-bathroom">
                                      <span>4</span> <span class="tag-unit">Bathroom</span>
                                  </div>
                              </div>
                          </div>
                          ):(
                          <p>Loading...</p>
                      )}
                          <div className="wrapbox-detaill">
                              <div className="content-desc">
                                  <div className="productDetail--box box -detail-description mg-top">
                                      <div className="product-description">
                                          <div className="description-content expandable-toggle opened">
                                              {homestay ?(
                                              <div className="description-productdetail">
                                                  <p>{homestay.mota}</p>
                                              </div>
                                              )
                                          :(    
                                              <p>Loading...</p>
                                          )}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className=" col-lg-4 col-md-12 col-12 wrapbox-right" id="form-booking-pro">
                          <div className="wrapbox-detail">
                              <div className="product-price" id="price-preview">
                                  <span className="pro-title">ĐẶT PHÒNG: </span>
                                  <div className="pro-price-chitiet no-sale">
                                      <div className="percent-price">
                                          <span className="price">3,200,000₫<span className="person">/ Đêm</span></span>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="product-variants hidden" style={{ display: 'none' }}>
                                  <form id="add-item-form" action="" method="post" className="variants clearfix">
                                      <div className="select clearfix" style={{ display: 'none' }}>
                                          <select id="product-select" name="id" style={{ display: 'none' }}>
                                              <option value="1128215632">Default Title - 3,200,000₫</option>
                                          </select>
                                      </div>
                                      
                                  </form>
                              </div>
                              <div className="form-booking_chitiet">
                                  <form id="formbooking" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJOblQa_xzuTB8Gq5HRvzspVC8EEvAUpxcEL_QCYx-3-mx-g/formResponse" data-shop="Maple Inn">
                                      <div className="contact-form">
                                          <div className="row_bth">
                                              <div className="col-sm-12 col-xs-12">
                                                  <div className="input-group">
                                                      <input required type="text" name="entry.1773600104" id="full_name" data-valid="full_name" className="form-control" placeholder="Tên của bạn" aria-describedby="basic-addon1" />
                                                  </div>
                                                  <p className="full_name-validation field-error"></p>
                                              </div>
                                              <div className="col-sm-12 col-xs-12">
                                                  <div className="input-group">
                                                      <input pattern="[0-9]{10,12}" required type="text" name="entry.195991160" id="your_phone" data-valid="your_phone" className="form-control" placeholder="Số điện thoại" aria-describedby="basic-addon1" />
                                                  </div>
                                                  <p className="your_phone-validation field-error"></p>
                                              </div>
                                              <div className="col-sm-12 col-xs-12">
                                                  <div className="input-group">
                                                      <input required type="text" name="entry.597310941" id="your_email" data-valid="your_email" className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
                                                  </div>
                                                  <p className="your_email-validation field-error"></p>
                                              </div>
                                              <div className="col-sm-12 col-xs-12">
                                                  <div className="pro-datepicker t-datepicker">
                                                      <div className="pro-item pro-when pro-checkin">
                                                          <div className="pro-form">
                                                              <label>Ngày nhận phòng</label>
                                                              <div className="t-check-in">
                                                                  <DatePicker
                                                                      selected={checkInDate}
                                                                      onChange={(date) => setCheckInDate(date)}
                                                                      dateFormat="dd/MM/yyyy"
                                                                      className="t-input-check-in"
                                                                      minDate={new Date()}
                                                                  />
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="pro-item pro-when pro-checkout">
                                                          <div className="pro-form">
                                                              <label>Ngày trả phòng</label>
                                                              <div className="t-check-out">
                                                                  <DatePicker
                                                                      selected={checkOutDate}
                                                                      onChange={(date) => setCheckOutDate(date)}
                                                                      dateFormat="dd/MM/yyyy"
                                                                      className="t-input-check-out"
                                                                      minDate={checkInDate}
                                                                  />
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <input type="hidden" name="entry.1366726942" value={checkInDate.toLocaleDateString("en-GB")} />
                                                      <input type="hidden" name="entry.1192184549" value={checkOutDate.toLocaleDateString("en-GB")} />
                                                  <div className="col-sm-12 col-xs-12">
                                                      <input type="hidden" id="link_pro" name="entry.1473149859" value="https://maple-inn.myharavan.com/products/double -suite" />
                                                      <div className="pro-total">
                                                          <label>Tổng cộng: </label>
                                                      <div className="pro-num-total" data-price="320000000"> 
                                                          3,200,000₫
                                                      </div>
                                                  </div>
                                              </div>
                                                  </div>
                                              </div>
                                              
                                              <div className="col-sm-12 col-xs-12">
                                                  <div className="btn-more   aaaa text-center">
                                                      <a href="#"><button className="ocean-button" id="oceanButton">Đặt phòng ngay</button></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="sp_lienquan">
              <h2 className='text_24px'>Xem thêm phòng khác</h2>
              <ul class="homestay_list" data-aos="fade-up" data-aos-duration="2000">
              {Array.isArray(rooms) && rooms.length > 0 ? (
                  rooms.map((room, index) => (
                      <li key={index}>  
                          <Link href="#">
                              <div className="img_homstay">
                                  <div className="pro-price pri_chitiet">
                                      <span className="price">{room.gia_homestay}₫</span>
                                      <span>/ Đêm</span>
                                  </div>
                                  <img src={room.url_hinh} alt={room.ten_homestay} />
                              </div>
                              <div class="des_hst">
                                  <div class="proloop-detail">
                                      <h3><a href="/products/double-suite">{room.ten_homestay} </a></h3>
                                      <div class="pro-tag">
                                          <div class="tag-item tag-area">
                                              <span>150</span> <span class="tag-unit">m<sup>2</sup></span>
                                          </div>                                     
                                          <div class="tag-item tag-guests">
                                              <span>10</span> <span class="tag-unit">Guests</span>
                                          </div>
                                          <div class="tag-item tag-bed">
                                              <span>5</span> <span class="tag-unit">Beds</span>
                                          </div>
                                          <div class="tag-item tag-bathroom">
                                              <span>4</span> <span class="tag-unit">Bathroom</span>
                                          </div>
                                      </div>
                                  <div className="pro-desc">
                                  {room.mota}
                                  </div>
                                  <div className="btn_ev">
                                  <Link to={``}>
                                      <span>Xem chi tiết
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                      </svg>
                                      </span>
                                  </Link>
                                  </div>
                              </div>
                              </div>
                          </Link>
                      </li>
                  ))
              ): (
                  <p>No rooms available</p>
                )}
              </ul>
          </div>
      </div>
    </div>
  );
};


export default CT;
