$(function () {
  // 首页轮播
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal", // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
  });

  // 二级导航动态调整
  (function () {
    var strs = [
      "问题求助",
      "捞捞征婚",
      "失物招领",
      "兼职实习",
      "贴吧吐槽",
      "闲置交易",
      "活动资讯",
      "组局大厅",
    ];
    var colors = [
      "ff9d00",
      "feca2b",
      "42d6ba",
      "f94a87",
      "32a2f1",
      "fd4e4e",
      "acce0e",
      "b160df",
    ];
    var urls = [
      "demo/qiuzhu.html",
      "捞捞征婚/laolaozhenghun.html",
      "失物招领/index.html",
      "兼职/index.html",
      "贴吧吐槽/tiebatucao.html",
      "demo/xianzhi.html",
      "demo/huodong.html",
      "demo/zuju.html",
    ];
    var str = "";
    for (var i = 0; i < strs.length; i++) {
      str += `<div class="item">
                <a href="${urls[i]}">
                    <div class="item-img"></div>
                    <p style='color:#${colors[i]}'>${strs[i]}</p>
                </a>
            </div>`;
    }
    $(".nav").html(str);
  })();
});
