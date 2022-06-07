var names = [
  "计算机201 滕孜荣",
  "经济205 刘琵",
  "数学201 蔡徐坤",
  "物理201 王德发",
  "小教203 珍迪枇",
  "计算机201 芳德恒",
];
var titles = ["核酸", "手表", "520请用糖", "十佳", "地人演唱会", "捞人"];
var contents = [
  "学校的核核酸一般是早上几点钟开始的呀？学校的核核酸一般是早上几点钟开始的呀？学校的核核酸一般是早上几点钟开始的呀？",
  "大家看我新买的苹果手表怎么样？",
  "去见你想见的人吧。趁阳光正好。趁微风不躁。趁繁花还未开至荼蘼。趁现在还年轻，还可以走很长很长的路，还能诉说很深很深的四年。趁世界还不那么拥挤。趁飞机还没起飞。趁时光尚未吞噬思念。",
  "昨晚人文文创十佳的李萌乔同学唱歌唱得好好听 完全被治愈了！！有没有可能求个微信号之类的qwq",
  "就是想问问，帝国都办了，地人可不可以也拥有一场呀，大三了，再不来就来不及了呜呜呜 坐标仓前！",
  "捞一下计算机201tzr，",
];
var imgs = ["q1.jpg", "q2.jpg", "q3.jpg", "q4.jpg", "", ""];
var answers = ["65", "91", "47", "6", "12", "5"];
var dianzans = ["231", "117", "296", "189", "137", "123"];
var str = "";
for (let i = 0; i < titles.length; i++) {
  str += `<div class="question">
  <div class="stu">
    <img src="img/头像.svg" alt="" />
    <div class="name">${names[i]}</div>
    <div class="ddd">···</div>
  </div>
  <div class="question-t">${titles[i]}</div>
  <div class="question-p">${contents[i]}</div>
  <img class="question-img" src="img/${imgs[i]}" alt="" />
  <div class="question-buttom">
    <div class="answer"><img src="img/消息.svg" alt="" />${answers[i]}</div>
    <div class="answer"><img src="img/点赞.svg" alt="" />${dianzans[i]}</div>
  </div>
</div>`;
}
$(".questions").html(str);
