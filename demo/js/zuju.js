var sorts = [
  "zhuoyou",
  "xuexi",
  "yundong",
  "zhuoyou",
  "zhuoyou",
  "xuexi",
  "zhuoyou",
  "yundong",
  "yundong",
  "xuexi",
  "zhuoyou",
  "zhuoyou",
  "yundong",
  "xuexi",
];
var timess = [
  "5月28日 19:00~21:00",
  "5月29日 14:00~21:00",
  "5月28日 13:00~16:00",
  "5月28日 19:07~22:00",
  "5月28日 16:00~22:00",
  "5月28日 9:00~12:00",
  "5月28日 18:53~22:00",
  "5月28日 18:20~21:40",
  "5月28日 19:00~21:20",
  "5月29日 8:30~11:45",
  "5月28日 19:00~22:50",
  "5月28日 13:00~17:00",
  "5月29日 13:30~16:45",
];
var titles = [
  "激情狼人杀在线等人",
  "图书馆一起监督学习",
  "找一个小姐姐一起打乒乓球",
  "谁是卧底",
  "不要做挑战",
  "一起背英语呀",
  "狼人杀",
  "篮球",
  "来B区踢足球",
  "图书馆约人",
  "麻将牌",
  "篮球单挑",
  "编程学习",
];
var names = [
  "狼人杀",
  "自习",
  "乒乓球",
  "卧底",
  "不要做",
  "英语学习",
  "狼人杀",
  "篮球]",
  "足球",
  "图书馆",
  "麻将",
  "篮球",
  "编程",
];
var peoples = [
  "3/8",
  "1/2",
  "1/2",
  "3/8",
  "3/8",
  "1/2",
  "6/8",
  "5/9",
  "17/22",
  "1/2",
  "1/2",
  "1/2",
];
var addresses = [
  "仓前B区操场",
  "仓前校区图书馆",
  "仓前B区勤园24号楼",
  "仓前B区操场",
  "仓前B区",
  "仓前图书馆",
  "仓前B区",
  "仓前A区篮球场",
  "仓前B区操场",
  "仓前校区图书馆",
  "仓前勤园6-201",
  "仓前B区篮球场",
  "仓前B区",
];
var str = "";
for (let i = 0; i < titles.length; i++) {
  str += `
  <div class=${sorts[i]}>
        <div class="a-title">${titles[i]}</div>
        <div class="a-box1">
          <div class="a-name">${names[i]}</div>
          <div class="a-people"><img src="img/人数.svg" alt="" />${peoples[i]}</div>
        </div>
        <div class="a-time">${timess[i]}</div>
        <div class="a-box2">
          <div class="a-address">
            <img src="img/位置.svg" alt="" /> ${addresses[i]}
          </div>
          <div class="a-jiaru">我要加入</div>
        </div>
      </div>`;
}
$(".activities").html(str);

$(".btn-qb").css(
  "background",
  "linear-gradient(to bottom right, #4a5cd3, #37376e)"
);
$(".btn-zy").on("click", () => {
  $(".xuexi").css("display", "none");
  $(".yundong").css("display", "none");
  $(".zhuoyou").css("display", "block");
  $(".btns div").css(
    "background",
    "linear-gradient(to bottom right, #36428e, #292947)"
  );
  $(".btn-zy").css(
    "background",
    "linear-gradient(to bottom right, #4a5cd3, #37376e)"
  );
});
$(".btn-xx").on("click", () => {
  $(".xuexi").css("display", "block");
  $(".yundong").css("display", "none");
  $(".zhuoyou").css("display", "none");
  $(".btns div").css(
    "background",
    "linear-gradient(to bottom right, #36428e, #292947)"
  );
  $(".btn-xx").css(
    "background",
    "linear-gradient(to bottom right, #4a5cd3, #37376e)"
  );
});
$(".btn-yd").on("click", () => {
  $(".xuexi").css("display", "none");
  $(".yundong").css("display", "block");
  $(".zhuoyou").css("display", "none");
  $(".btns div").css(
    "background",
    "linear-gradient(to bottom right, #36428e, #292947)"
  );
  $(".btn-yd").css(
    "background",
    "linear-gradient(to bottom right, #4a5cd3, #37376e)"
  );
});
$(".btn-qb").on("click", () => {
  $(".xuexi").css("display", "block");
  $(".yundong").css("display", "block");
  $(".zhuoyou").css("display", "block");
  $(".btns div").css(
    "background",
    "linear-gradient(to bottom right, #36428e, #292947)"
  );
  $(".btn-qb").css(
    "background",
    "linear-gradient(to bottom right, #4a5cd3, #37376e)"
  );
});
