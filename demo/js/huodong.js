var dates = ["今天", "周五", "周四", "周三", "周一", "周三"];
var titles = [
  "冲刺15天！师大等你",
  "人文学院钱珊入选“2021浙江教育年度新闻人物”",
  "为她打Call，浙江省“最美教师”候选人赵立教授在Educational Re",
  "我校举行庆祝中国共产主义青年团成立100周年主题活动！",
  "好导师！做科研、带学生，拼的都是热爱！",
  "喜迎二十大，奋进新时代",
];
var imgs = ["n2.png", "n3.jpg", "n4.jpg", "n5.jpg", "n6.jpg", "n1.jpg"];
var yuedus = ["1.2万", "5363", "9837", "5547", "1.7万", "2.2万"];
var zans = ["222", "79", "112", "66", "110", "629"];
var duguos = ["11", "2", "8", "3", "9", "15"];
var str = "";
for (let i = 0; i < titles.length; i++) {
  str += `
  <div class="notice">
          <div class="date">${dates[i]}</div>
          <div class="content">
            <div class="content-l">
              <div class="content-l-p">
                ${titles[i]}
              </div>
              <div class="content-l-b">
                <div class="yuedu">阅读${yuedus[i]}</div>
                <div class="zan">赞${zans[i]}</div>
                <div class="duguo">${duguos[i]}个朋友读过</div>
              </div>
            </div>
            <img src="img/${imgs[i]}" alt="" />
          </div>
        </div>`;
}
$(".notices").html(str);
