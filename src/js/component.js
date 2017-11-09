var el_header = `<div class="bg"></div>
                  <div class="user_bar">
                    <div class="profile">
                      <span class="user_icon"></span>
                      <span class="user_name">USER</span>
                    </div>
                    <div class="has_login">
                      <div class="btn btn-fill left">
                        <a href="#" id="mem">会员中心</a>
                      </div>    
                      <div class="btn btn-fill right">
                        <a href="#" id="logInOut">登录</a>
                      </div>
                    </div>
                  </div>
                  <a href="https://www.126bet6.com/" target="_blank"><div id="customericon"></div></a>
                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>`;
var el_nav = `<ul>
                  <li><a href="index.html">首页</a></li>
                  <li><a href="slot.html">老虎机</a></li>
                  <li><a href="livegame.html">真人娱乐</a></li>
                  <li><a href="fishing.html">捕鱼王</a></li>
                  <li><a href="promotions.html">优惠活动</a></li>
                  <li><a href="about.html">关于我们</a></li>
                  <li class="phone_only"><a id="login" href="#">登入</a></li>
                  <li class="phone_only"><a href="regist.html">注册</a></li>
              </ul>`;                  
//資料未完成假圖
// var el_footer = `<div class="footer_container">
//             <div class="footer_top clearfix">
//               <div class="partner">
//                 <p class="title">合作伙伴</p>
//                 <ul class="img clearfix">
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_AG@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_bbin@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partnerBETSOFT@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_GAMES@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_MG@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_TOPTREND@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_NYX@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_PLAYnGO@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_NETENT@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_QUICKSPIN@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_PT@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_partner_PLAYSON@1x.png" alt=""></a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="certification">
//                 <p class="title">监管机构</p>
//                 <ul class="img clearfix">
//           <li>
//             <a href=""><img src="img/backgrounds/footer_RegulatoryAuthority_18@1x.png" alt=""></a>
//           </li> 
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_RegulatoryAuthority_CEZA@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_RegulatoryAuthority_PAGCOR@1x.png" alt=""></a>
//                   </li>
//                   <li>
//                     <a href=""><img src="img/backgrounds/footer_RegulatoryAuthority_GAMCARE@1x.png" alt=""></a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="browser">
//                 <p class="title">推荐浏览器</p>
//                 <div class="img">
//                   <div class="img_browser"></div>
//                 </div>
//               </div> 
//             </div>    
//             <div class="footer_bottom clearfix">
//               <ul>
//                 <li><a href="#">关于我们</a></li>
//                 <li><a href="#">博彩责任</a></li>
//                 <li><a href="#">规定条款</a></li>
//                 <li><a href="#">责任条款</a></li>
//                 <li><a href="#">隐私政策</a></li>
//                 <li><a href="#">常见问题</a></li>
//                 <li><a href="#">联系我们</a></li>
//               </ul>    
//             </div> 
//             <div class="copyright">Copyright © 126游戏网 All Right Reserved</div>
//       </div>`;

//正式串接後
var el_footer = `<div class="footer_container">
            <div class="footer_top clearfix">
              <div class="partner">
                <p class="title">合作伙伴</p>
                <ul class="img clearfix"></ul>
              </div>
              <div class="certification">
                <p class="title">监管机构</p>
                <ul class="img clearfix"></ul>
              </div>
              <div class="browser">
                <p class="title">推荐浏览器</p>
                <div class="img">
                  <div class="img_browser"></div>
                </div>
              </div> 
            </div>    
            <div class="footer_bottom clearfix">
              <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">博彩责任</a></li>
                <li><a href="#">规定条款</a></li>
                <li><a href="#">责任条款</a></li>
                <li><a href="#">隐私政策</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">联系我们</a></li>
              </ul>    
            </div> 
            <div class="copyright">Copyright © 126游戏网 All Right Reserved</div>
      </div>`;

var el_marquee = `<div class="marquee_container">
                    <i class="fa fa-volume-up"></i>
                    <div class="marquee_content">
                      <span></span>  
                    </div>
                  </div>`;

var el_loginBox = `<div class="login-section">
                      <div class="login-wrapper"></div>
                      <div class="login-box">
                        <span class="login-close"></span>
                        <h3 class="login-title">126游戏网登录</h3>
                        <div class="login-content">
                          <form action="" class="login-form">
                            <div class="text-field">
                              <label for="account">请输入用户名</label>
                              <div class="del_fix">
                                <input type="text" class="account input" name="account" id="account"/>
                                <span class="input-reset"></span>
                              </div>
                            </div>
                            <div class="text-field">
                              <label for="password">请输入密码</label>
                              <div class="del_fix">
                                <input type="password" class="password input" name="password" id="password"/>
                                <span class="input-reset"></span>
                              </div>
                            </div>
                            <div class="forgot clearfix"><a href="forgetpw.html">忘记密码?</a></div>
                            <div class="errors"></div>
                            <div class="btn btn-fill btn-submit">登入</div>  
                          </form>
                        </div>
                      </div>
                    </div>`;

var el_popup =`<div class="popup-section">
                  <div class="popup-wrapper"></div>
                  <div class="popup-box">
                    <div class="popup-content">
                      <div class="popup-title">登录失败</div>
                      <div class="popup-text">
                      </div>
                      <div class="btn btn-fill btn-pop"></div>  
                    </div>
                  </div>
                </div>`;

var el_validationMail = `<div class="validation-section open">
                          <div class="validation-wrapper"></div>
                          <div class="validation-box">
                            <span class="validation-close"></span>
                            <h3 class="validation-title">邮箱验证</h3>
                            <div class="validation-content">
                              <form action="" class="validation-form">
                                <div class="text-field">
                                  <label for="email">邮箱</label>
                                  <div class="emailinfo">wwww@gmail.com</div>
                                </div>
                                <div class="btn btn-fill btn-check btn-getcode">取得邮箱验证码</div>
                                <div class="text-field">
                                  <label for="validcode">邮箱验证码</label>
                                  <div class="del_fix">
                                    <input type="text" class="password input" name="validcode" id="validcode"/>
                                    <span class="input-reset"></span>        
                                  </div>
                                </div> 
                                <div class="countdownarea clearfix"></div>
                                <div class="btn btn-fill btn-submit btn-val">验证</div>  
                              </form>
                            </div>
                          </div>
                        </div>`;
var el_verify_vcode =  `<div class="vcode-section open">
                          <div class="vcode-wrapper"></div>
                          <div class="vcode-box">
                            <span class="vcode-close"></span>
                            <h3 class="vcode-title">重設密碼</h3>
                            <div class="vcode-content">
                              <form action="" class="vcode-form">
                                <div class="text-field">
                                  <label for="vcode">驗證碼</label>
                                  <div class="del_fix">
                                    <input type="text" class="account input" name="email" id="verifyvcode"/>
                                    <span class="input-reset"></span>
                                  </div>
                                </div>
                                <div class="text-field">
                                  <label for="vcode">新密碼</label>
                                  <div class="del_fix">
                                    <input type="text" class="password input" name="validcode" id="verifypw"/>
                                    <span class="input-reset"></span>            
                                  </div>
                                </div>
                                 <div class="text-field">
                                  <label for="vcode">確認新密碼</label>
                                  <div class="del_fix">
                                    <input type="text" class="password input" name="validcode" id="reverifypw"/>
                                    <span class="input-reset"></span>          
                                  </div>  
                                </div>
                                <div class="errors"></div>
                                <div class="btn btn-fill btn-submit verifyvcodebtn">驗證郵箱</div>  
                              </form>
                            </div>
                          </div>
                        </div>`;
var el_validationPhone = `<div class="validation-section open">
                          <div class="validation-wrapper"></div>
                          <div class="validation-box">
                            <span class="validation-close"></span>
                            <h3 class="validation-title">手机验证</h3>
                            <div class="validation-content">
                              <form action="" class="validation-form">
                                <div class="text-field">
                                  <label for="phonenum">手机号码</label>
                                  <div class="phoneinfo">1111232323</div>
                                </div>
                                <div class="btn btn-fill btn-check btn-getcellcode">取得手机验证码</div>
                                <div class="text-field">
                                  <label for="validcode">手机验证码</label>
                                  <div class="del_fix">
                                    <input type="text" class="password input" name="validcode" id="validcodephone"/>
                                    <span class="input-reset"></span>        
                                  </div>
                                </div> 
                                <div class="countdownarea clearfix"></div>
                                <div class="btn btn-fill btn-submit btn-phone-val">验证</div>  
                              </form>
                            </div>
                          </div>
                        </div>`;