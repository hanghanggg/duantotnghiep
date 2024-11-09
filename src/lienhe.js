import React from 'react';
 const Lienhe = () => {
    return(
        <main>
  <div className="banner_contact"></div>
  <div className="section_menu">
    {/* form_contact */}
    <div className="bg_contact">
      <div className="min_warp2">
        <div className="row8">
          <div className="img_form_contact" data-aos="fade-up" data-aos-duration="2000">
            <div className="col50">
              <div className="pd_15">
                <div className="box_img_ct" data-aos="fade-up" data-aos-duration="3000">
                  <figure>
                    <img src="/image/contact1.png" alt="icon_contact" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col50">
              <div className="form_contact" data-aos="fade-up" data-aos-duration="3000">
                <div className="box_info_contact">
                  <h2 className="tittle_contact">Thông tin liên hệ</h2>
                  <div className="wrapbox_contact">
                    <ul className="list_contact">
                      <li>
                        <p><strong>Địa chỉ:</strong> 1234 Nguyễn Thị Minh Khai, phường 15, quận 5, Đà Lạt, Lâm Đồng</p>
                      </li>
                      <li>
                        <p>
                          <a className="" href="#">
                            <strong>Điện thoại:</strong> 1900.000.XXX
                          </a>
                        </p>
                      </li>
                      <li className="">
                        <p><strong>Email:</strong> docongdanh357@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="box_send_contact">
                  <h2>Gửi thắc mắc cho chúng tôi</h2>
                  <div id="col-left contactFormWrapper">
                    <form acceptCharset="UTF-8" action="#" className="contact-form" method="post">
                      <input name="form_type" type="hidden" value="contact" />
                      <input name="utf8" type="hidden" value="✓" />
                      <div className="contact-form">
                        <div className="wap_input">
                          <div className="col-sm-12">
                            <div className="input-group">
                              <input
                                required
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Tên của bạn"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-group">
                              <input
                                required
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Email của bạn"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="input-group">
                              <input
                                pattern="[0-9]{10,12}"
                                required
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Số điện thoại của bạn"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                          <div className="input-group">
                            <textarea
                              required
                              name="contact[body]"
                              placeholder="Nội dung"
                            ></textarea>
                          </div>
                          <p className="small_p_capcha">
                            This site is protected by reCAPTCHA and the Google <strong>Privacy Policy</strong> and{" "}
                            <strong>Terms of Service</strong> apply.
                          </p>
                          <div className="btn-more text_left">
                            <a href="#">
                              <button className="ocean-button" id="oceanButton">
                                Gửi cho chúng tôi
                              </button>
                            </a>
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
      </div>
    </div>
  </div>
</main>

    );
  }
  export default Lienhe;