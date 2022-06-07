var good_names = [
  "佰草集",
  "拍拍灯",
  "出书（任意一本）",
  "滋色16色盘",
  "护手霜",
  "RTX3060显卡",
  "出5支笔",
  "背垫",
  "口罩",
  "名创收纳",
];
var imgs = [
  "w1.jpg",
  "w2.jpg",
  "w3.jpg",
  "w4.jpg",
  "w5.jpg",
  "显卡.jpg",
  "w6.jpg",
  "w7.jpg",
  "w8.jpg",
  "w9.jpg",
];
var news = ["100新", "99新", "90新", "99新", "100新", "95新", "100新", "95新", "100新", "95新"];
var prices = ["15", "10", "3000", "90", "10", "3000", "1", "5", "2", "3"];
var sellers = [
  "sherlock",
  "学前193何为",
  "数学183洁莹",
  "zy",
  "科教201周烨",
  "tzratw",
  "生科181张西",
  "zy",
  "生科191叶琪",
  "日语173皮皮虾"
];
var str = "";
for (let i = 0; i < good_names.length; i++) {
  str += `<div class="good" id="${i}">
  <img src="img/${imgs[i]}" alt="" />
  <h5 class="good_name">${good_names[i]}</h5>
  <div class="newi">${news[i]}</div>
  <h3 class="price">￥${prices[i]}</h3></div>`;
}
$(".goods").html(str);

for (let i = 0; i < good_names.length; i++) {
  $("#" + i).on("click", () => {
    $(".hide").css("display", "flex");
    $(".detail-top").html(`
    <div class="detail-top">
    <div class="return"><img src="img/返回.svg" alt="" /></div>
      <img src="img/${imgs[i]}" alt="" />
      <h5 class="good_name">${good_names[i]}</h5>
      <div class="new">${news[i]}</div>
      <h3 class="price">￥${prices[i]}</h3>   
      <div class="seller">
        <img src="img/头像.svg" alt="" />
        ${sellers[i]}
      </div>
    </div>
    `);
  });
}
$(".hide").on("click", ".return", () => {
  $(".hide").css("display", "none");
});
