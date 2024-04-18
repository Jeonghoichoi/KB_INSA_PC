/* GNB 마우스오버, 포커스 기능 */
$(document).ready(function () {
  mainResizing();
  mainSetBackgroundChange();

  // 20240418 수정
  // $("#header_m .gnb_01").bind("mouseover", gnbIn).bind("mouseleave", gnbOut).bind("focusin", gnbIn).bind("blur", gnbOut);
  // $("#header_m .gnb_02").bind("mouseover", gnbIn).bind("mouseleave", gnbOut).bind("focusin", gnbIn).bind("blur", gnbOut);
  $("#header_m .gnb_03").bind("mouseover", gnbIn).bind("mouseleave", gnbOut).bind("focusin", gnbIn).bind("blur", gnbOut);
  $("#header_m .gnb_04").bind("mouseover", gnbIn).bind("mouseleave", gnbOut).bind("focusin", gnbIn).bind("blur", gnbOut);

  // $("#header_m .gnb_01").find("ul > li").bind("focusin", snbIn);
  // $("#header_m .gnb_02").find("ul > li").bind("focusin", snbIn);
  $("#header_m .gnb_03").find("ul > li").bind("focusin", snbIn);
  $("#header_m .gnb_04").find("ul > li").bind("focusin", snbIn);
});

$(window).resize(function () {
  mainResizing();
});

function gnbIn() {
  gnbOut();
  $(this).addClass("on");
  $("#header_m .bg_gnb_2depth").addClass("on");
}

function gnbOut() {
  $("#header_m .gnb_01").removeClass("on");
  $("#header_m .gnb_02").removeClass("on");
  $("#header_m .gnb_03").removeClass("on");
  $("#header_m .gnb_04").removeClass("on");
  $("#header_m .bg_gnb_2depth").removeClass("on");

  // 현재 로케이션에 맞는 네비게이션으로 맞춤 스크립트 삽입 요청
}

function snbIn() {
  snbOut();
  $(this).addClass("on");
}

function snbOut() {
  $("#header_m .gnb_01").find("ul > li").removeClass("on");
  $("#header_m .gnb_02").find("ul > li").removeClass("on");
  $("#header_m .gnb_03").find("ul > li").removeClass("on");
  $("#header_m .gnb_04").find("ul > li").removeClass("on");

  // 현재 로케이션에 맞는 네비게이션으로 맞춤 스크립트 삽입 요청
}

/* 메인 리사이징 20170125_v1 수정*/
function mainResizing() {
  var win_h = $(window).height();
  console.log(win_h);
  if (win_h < 800) {
    $("#container").css("height", "700px");
    $(".quick_menu").css("top", "135px");
  } else if (win_h < 967) {
    $("#container").css("height", win_h - 88);
    $(".quick_menu").css("top", "165px");
  } else {
    $("#container").css("height", "879px");
    $(".quick_menu").css("top", "205px");
  }
}

/* 메인 이미지 교체 light & dark  */
function mainSetBackgroundChange() {
  let koreaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
  let currentTime = new Date(koreaTime);

  // 현재시간
  let isDark = false;
  let currentHour = currentTime.getHours();

  // 7시부터 19시까지 범위에 있는지 확인
  if (currentHour >= 7 && currentHour < 19) {
    isDark = true;
  } else {
    isDark = false;
  }

  let mainElement = document.querySelector(".main");
  let backgroundImageUrl = isDark ? "apply/common/images/main/@visual_img_01.jpg" : "apply/common/images/main/@visual_img_02.jpg";
  mainElement.style.backgroundImage = `url('${backgroundImageUrl}')`;
}
