$(function(){ 
  //導覽列開關 
  $("header button").on("click",function(){
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
    if($('nav').hasClass("open")){  
        //內文及頁腳左滑
        $('.main,footer').css({
          transform: "translateX(-130px)",
          "transition-delay": "0.2s"
        });

        //禁止滑動
        $("nav").on("touchmove",handler,false);

        //蓋遮罩
        $('body').append('<div class="wrapper"></div>');  
        $('.wrapper').css({
          width: "100%",
          height: $('html').outerHeight(),
          "background-color" : "rgba(0,0,0,0.8)",
          "z-index": 9,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        });
      }else{       
        $('.main,footer').css({
          transform: "",//translateX(0px)
          "transition-delay": "0s"
        });  
        $('.wrapper').remove();      
      }
  });

  // 登入燈箱
  function setLoginBox(){
    $('html').toggleClass('noscroll');
    $(".login-section").toggleClass("open");       
    $(".login-section").on("touchmove",handler,false);    
  }

  $(".btn-login,.login-close").on("click",function(){
    setLoginBox();
  });
  //修復手機虛擬鍵盤將彈窗上推，動態將他下移
  $(".login-section input").on('blur', function(){
    $('body').animate({
      scrollTop: 0
    },300);
  });
  //導覽列登入功能
  $('#login').on("click",function(e){
    e.preventDefault();
    $("header button").trigger("click");
    // console.log("nav");
    $(".btn-login").trigger("click");
    // console.log("login");
  });

  //動態設置關閉按鈕的位置
  // setClosePos();
  
  
  $(window).resize(function(){
    // setClosePos();
  });
  //输入框判断是否显示关闭按钮
  var input = $('.text-field input');
  input.on('keyup', function(){
    // console.log("keyup");
    if($(this).val().length <= 0){
      $(this).siblings('.input-reset').hide();
    }else{        
      $(this).siblings('.input-reset').show();
    }   
  }); 
  input.on('focus', function(){
    
    // setClosePos();
   

    $(this).closest('form').find('.input-reset').hide();
    if($(this).val().length > 0){   
      $(this).siblings('.input-reset').show();
    }
  });   
  $('.input-reset').on('click', function(){ 
    $(this).siblings('input').val('');
    $(this).hide();
  })

  //表單送出按鈕注冊
  $('.regist-form .btn-fill').on("click",function(){

    $('.regist-form').submit();

  }); 
  $('.login-section .btn-fill').on("click",function(){

    $("form").submit();  

  }); 

  $('.forgetpw-form .btn-fill').on("click",function(){
    // var submitpw = true;
    // if(submitpw){
    //   //提取密碼成功
    //   setPopup(true,{
    //       title: "提取密码成功",
    //       content: "<p>密码提取成功，请回登录页面进行登录</p>",
    //       btnText: "<a href ='index.html#'>立刻前往</a>"
    //   });
    // }else{
    //   //提取密碼失敗
    //   setPopup(false,{
    //       title: "提取密码失败",
    //       content: "<p>密码提取失败，请咨询在线客服</p>",
    //       btnText: "确定"
    //   });
    // }
    $(".forgetpw-form").submit();
  });

  //忘記密碼 
  $(".vcode-section").removeClass("open");
  $(".forgetpw-form").validate({  
    submitHandler: function() {
      var account = $('#account').val();
      var email = $('#email').val();
      var data = {
         "companyId":3,
         "loginName":account,
         "mailbox":email
      }
      $.ajax(
        { 
          method: "POST",
          url: API_BaseuUrl + "/member/forgetPassword",
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify(data)
        })
      .done(function(data) {
         console.log( data );
         if(data.code == 0){
            console.log(data.data.token);
            //呼叫輸入vcode視窗
            $(".vcode-section").addClass("open");
            $('html').toggleClass('noscroll');
            $(".vcode-section").on("touchmove",handler,false);
            $('html').on("click", '.vcode-close', function(){
              $('.validation-section').remove();   
              $('html').removeClass('noscroll');
            })

            $("#verifycodebtn").on("click",function(){
              var vcode = $("#verifyvcode").val();
              var newpw = $("#verifypw").val();
              var data ={
                "vcode":vcode,
                "newPassword":newpw
              }
              $.ajax(
                {
                  method: "POST",
                  url: API_BaseuUrl+"/member/resetPassword",
                  contentType: 'application/json',
                  dataType: 'json',
                  data: JSON.stringify(data)
                })
              .done(function(data){
                  console.log(data);
                  if(data.code == 0){
                    setPopup(true,{
                      title: "重设密码成功",
                      content: "<p>重设密码成功，请返回首页页登录</p>",
                      btnText: "<a href ='index.html'>确定</a>"
                    });
                  }
              })
             .fail(function() {
                 console.log( "error" );
              })
              .always(function() {
                 console.log("succeed");
              });
              console.log("submit click");
            })
         }
         else{
            setPopup(false,{
                title: "提取密码失败",
                content: "<p>密码提取失败，请咨询在线客服</p>",
                btnText: "<p>确定</p>"
            });
         }
      })
      .fail(function() {
         console.log( "error" );
      })
      .always(function() {
         console.log("succeed");
      });
      console.log("submit click");
    },
    errorElement: "span",
    rules: {
      account: "required",
      email: "required",
      verification: "required"
    },
    messages: {
      account: {
        required: " (必需字段)",
        minlength: " (不能少于 3 个字母)"
      },
      email: {
        required: " (必需字段)"
      },
      verification: {
        required: " (必需字段)"
      }
    }
  });
  //表單規則
  //註冊表單
  $(".regist-form").validate({  
    submitHandler: function() {

      var account = $("#account").val();
      var password = $("#password").val();
      var phone = $("#phone").val();
      var data = {
           "loginName":account,
           "password":password,
           "companyId":3,
           "firstName":"",
           "lastName":"",
           "mailbox":"john.yang@arribatech.com",
           "telephone":phone,
           "qqnumber":"",
           "birthday":"",
           "sex":"1",
           "invitecode":null,
           "agent_code":null
          };
      var jqxhr = $.ajax(
      {
        method: "POST",
        url: API_BaseuUrl + "/member/createMember",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(data)
      })
        .done(function(data) {
             console.log( data );
             if(data.code == 0){
              console.log(data.data.token);
              window.location.replace("regist_suc.html");            
             }
             else{
              setPopup(false,{
                  title: "注册失败",
                  content: "<p>请重新输入。</p>",
                  btnText: "<a href ='regist.html'>确定</div>"
              });
             }
        })
        .fail(function() {
           console.log( "error" );
        })
        .always(function() {
           console.log( "finished" );
        });

      console.log("submit click");
    },
    errorElement: "span",
    rules: {
      account: "required",
      password: "required",
      pwdconfirm: "required",
      phone: "required"
    },
    messages: {
      account: {
        required: " (必需字段)",
        minlength: " (不能少于 3 个字母)"
      },
      password: {
        required: " (必需字段)",
        minlength: " (字母不能少于 5 个且不能大于 12 个)",
        maxlength: " (字母不能少于 5 个且不能大于 12 个)"
      }
    }
  });




//移除默認
function handler(e) {
    e.preventDefault();
}

/* 手風琴單開
 * $this   : 點擊的 $物件
 * closeBtn: 是否為關閉按鈕
 */
function accordion($this,closeBtn){
  var $this_content = $this.siblings(".content_section");
  //header 的高度
  var top = $(window).outerWidth() > 768 ? $(window).outerWidth() > 1024 ? 167 : 147 : 115;
  
  //優惠活動的關閉按鈕
  //先滑動至頂才做開關
  if(closeBtn){
    $('body').animate({
      scrollTop: $this.offset().top - top
    },500,function(){
      $this.toggleClass('open');
      $this_content.slideToggle();
    });
    return;
  }   
  
  if($this.parent().siblings('.no_tap_highlight').find(".main_section").hasClass('open')){
    console.log("hasOpen");
    $this.parent().siblings('.no_tap_highlight').find(".content_section").slideUp(500);
    $this.parent().siblings('.no_tap_highlight').find(".main_section").removeClass('open');
    setTimeout(function(){
      $('body').animate({
        scrollTop: $this.offset().top - top
      },500,function(){      
        $this.toggleClass('open'); 
        $this_content.slideToggle(800);
      });
    },500)
  }else{
    console.log("NoHasOpen");
    $('body').animate({
      scrollTop: $this.offset().top - top
    },500,function(){      
      $this.toggleClass('open'); 
      $this_content.slideToggle(800);
    });
  }
}
//popup通用格式
function setPopup(popuptype,popupobj){
  $('body').append(el_popup);
  $('.btn-pop').off("click");

  $('.login-section').removeClass("open");
  $('.popup-section').addClass("open");

  if(popuptype){    
    $('.popup-title').html(popupobj.title);
    $('.popup-text').html(popupobj.content);
    $('.btn-pop').append(popupobj.btnText);
    $('.btn-pop').on("click",function(){
      $('.popup-section').removeClass("open");
    });
  }else{
    $('.popup-title').html(popupobj.title);
    $('.popup-text').html(popupobj.content);
    $('.btn-pop').html(popupobj.btnText);
    $('.btn-pop').on("click",function(){
      $('.popup-section').removeClass("open");
      // $('.login-section').addClass("open");
    });
  }
}

function validationBox(type){
  if($('.validation-section').length > 0){
    $('.validation-section').remove();
    // console.log("REMOVE");
  }
  var timeoutHandle = null;
  function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = $("#timer");
        var current_minutes = mins-1
        seconds--;
        counter.text(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));                     
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        }else if( seconds <=0) {
            if(mins > 1){
           // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(
                    function() { 
                        countdown(mins - 1); 
                    }, 1000);
            }
        }
        else if(seconds == 0&&mins == 0){
            $('.btn-getcode').bind('click');
            $('.btn-getcode').css("color","white");
        }
        
    }
    tick();
  }
  

  switch(type){
    case "mail":  
      $('body').append(el_validationMail);
      var mailvalue = $('#mail').val();
      $('.emailinfo').html(mailvalue);
      $('.validation-section').css({
        top: $(window).scrollTop()
      });
      var ORIGIN_TOP = $('body').scrollTop();
      console.log("ORIGIN_TOP"+ ORIGIN_TOP) 
      $(".validation-section input").on('focus', function(){  
        console.log($('body').scrollTop()); 
      });
      $(".validation-section input").on('blur', function(){
        $('body').animate({
          scrollTop: ORIGIN_TOP
        },300);
      });



      // console.log("html: " + $('html').height());
      // console.log("body: " + $('body').height());
      // console.log("validation-section: " + $('.validation-section').height());
      $('.btn-getcode').on("click", function(){
          //獲取驗證碼
          $(this).unbind('click');
          $(this).unbind('hover');
          $(this).css("color","#ec6e93");

          var data = {
             "mailbox": $('#mail').val()/*"john.yang@arribatech.com"*/
          }
          $.ajax({
            url: API_BaseuUrl + "/member/sendVcodeByMail",  
            method: "POST",
            contentType: 'application/json',
            dataType: 'json',
            headers: {
              token: $.cookie("token")
            },
            data: JSON.stringify(data)
          })
          .done(function(data) {

              console.log(data);
              $('.validation-form .countdownarea').html("");
              $('.validation-form .countdownarea').append("<div class='counttext'>有效時間</div><div id='timer' >15:00</div>");
              countdown(15);
            
          })
          .fail(function(){
              console.log( "error" );
          });
          
      })
      
      $('.btn-submit').on("click", function(){
          //驗證郵箱

          var vcodenum = $('#validcode').val();
          var data = {
            "vcode": vcodenum/*"NZN3576Z6IWOCH3LJK11RHWQQ7E9OENTVL30U72ELIKXRNSNO6FGPUWN9ZZMWDX6R4VRY6PP8L30V9DTOREFNRI19WKRWYRQ1MSR8GFJ3FQ3WYTY4B1UWNCH4Q42OXCM"*/
          }
          $.ajax({
            url: API_BaseuUrl + "/member/validateVcodeByMail",  
            method: "POST",
            contentType: 'application/json',
            dataType: 'json',
            headers: {
              token: $.cookie("token")
            },
            data: JSON.stringify(data)
          })
          .done(function(data) {
              // console.log("data:"+JSON.stringify(data)); 
              console.log(data);
              if(data.code==0){
                setPopup(true,{
                  title: "验证成功",
                  content: "<p>您已通过验证，继续回用户信息中心填写完整。</p>",
                  btnText: "<a href ='member.html'>确定</a>"
                });
                $('#mail').unbind('click');
                $('.btn-check-email').unbind('click');
              }
              else{
                setPopup(false,{
                  title: "验证失敗",
                  content: "<p>您尚未完成验证，请回用户信息中心页面重新验证，或联系在线客服。</p>",
                  btnText: "<a href ='#'>确定</a>"
                });
              }
          })
          .fail(function(){
              console.log( "error" );
          });
      })

      //鎖住整個頁面無法滾動
      $('html').toggleClass('noscroll');
      $(".validation-section").on("touchmove",handler,false);
      break;


    case "phone":      
      $('body').append(el_validationPhone);
      var phonevalue = $('#phone').val();
      $('.phoneinfo').html(phonevalue);
      $('.validation-section').css({
        top: $(window).scrollTop()
      });
      var ORIGIN_TOP = $('body').scrollTop();
      console.log("ORIGIN_TOP"+ ORIGIN_TOP) 
      $(".validation-section input").on('focus', function(){  
        console.log($('body').scrollTop()); 
      });
      $(".validation-section input").on('blur', function(){
        $('body').animate({
          scrollTop: ORIGIN_TOP
        },300);
      });
      
      $('.btn-getcellcode').on("click", function(){
        //取得驗證碼
        $(this).unbind('click');
        $(this).unbind('hover');
        $(this).css("color","#ec6e93");

        var data = {
           "telephone": $('#phone').val()/*"john.yang@arribatech.com"*/
        }
        $.ajax({
          url:"https://192.168.0.99:8443/api/v1/member/sendVcodeByPhone",  
          method: "POST",
          contentType: 'application/json',
          dataType: 'json',
          headers: {
            token: $.cookie("token")
          },
          data: JSON.stringify(data)
        })
        .done(function(data) {

            console.log(data);
            $('.validation-form .countdownarea').html("");
            $('.validation-form .countdownarea').append("<div class='counttext'>有效時間</div><div id='timer' >15:00</div>");
            // countdown(15);
          
        })
        .fail(function(){
            console.log( "error" );
        });

      })
      $('.btn-phone-val').on("click", function(){
        //驗證手機
        }
    })

      //鎖住整個頁面無法滾動
      $('html').toggleClass('noscroll');
      $(".validation-section").on("touchmove",handler,false);
      break;
  }

  $('html').on("click", '.validation-close', function(){
    $('.validation-section').remove();   
    $('html').removeClass('noscroll');
    clearTimeout(timeoutHandle);
  })

}


//JSON時間轉換 BY Eason
function _toLocalDateTime(sDate) {
  try {
    var date = new Date(sDate + "Z");//add Z for all browser
    var nValue = date.valueOf();

    if (nValue > 0) {
        return date.toLocaleString();
    } else {
        return "-";
    }
  } catch (e) {
    return "-";
  }
}

//需要在畫面變動時做處理/更新的 fn
function pageRefresh(fn){
  $(window).on('load resize', function(){
    fn();
  })
}



//top
var winheight =$(window).height();
$('.main').append("<div id='gotop'></div>");
$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 0){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});

//customerservice
$('.main').append("<a href='https://www.126bet6.com/' target='_blank'><div id='customer'></div></a>");


