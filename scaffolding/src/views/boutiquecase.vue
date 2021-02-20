<template>
  <div class="home-whoweare">
    <div class="container">
      <div class="flexbox">
        <div class="leftcontent">
          <div class="info">
            <h2>WHO ARE WE</h2>
            <h3>联点文旅集团 ——点亮欢乐梦想</h3>
            <p class="des">
              深圳联点文旅成立于1994年，总部位于深圳市，深耕行业20多年始终不忘初心，成功打造了众多优质的文旅项目，成为行业有影响力值得信赖的服务供应商。
              业务范围涵盖：主题公园、旅游度假区、休闲娱乐综合体、特色小镇、创意科技产品的项目咨询，策划规划，设计和项目落地建设。
              联点汇聚了一批既有丰富经验又有创新意识的业内精英，形成专业的成熟团队。现有50多位专业设计师，500多人专业工程管理施工队伍，3家艺术产品加工厂。
            </p>
            <div class="num-group">
              <div class="item">
                <p class="num">27<span>+</span></p>
                <p class="numdes">年行业经验</p>
              </div>
              <div class="item">
                <p class="num">120<span>+</span></p>
                <p class="numdes">位行业精英</p>
              </div>
              <div class="item">
                <p class="num">200<span>+</span></p>
                <p class="numdes">个成熟项目</p>
              </div>
            </div>
            <div class="goods">
              <a href="javascript:;"
                >品牌故事
                <img
                  src="https://www.ua48.com/static/home/images/home/more.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="rightcontent">
          <div class="image">
            <img
              class="mask"
              src="https://live.staticflickr.com/4118/4795587445_945d1f4fe4_b.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 初始化css样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* h2的样式 */
.info > h2 {
  color: #333;
  font-size: 48px;
  margin: 0 0 25px;
  text-align: left;
}
/* h3的样式 */
.info h3 {
  text-align: left;
  color: #333;
  font-size: 30px;
  margin: 0 0 50px;
}
/* p.containt的样式 */
.des {
  color: #999;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 460px;
  height: 196px;
  line-height: 2;
  margin: 0 0 70px;
}
.num-group {
  margin: 0 0 80px;
}
.num {
  color: #faa635;
  font-size: 72px;
  margin: 0 0;
}
.num > span {
  font-size: 45px;
}
.goods > a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 155px;
  height: 46px;
  background-color: #faa635;
  border-radius: 5%;
  line-height: 46px;
}
.goods > a:hover {
  cursor: pointer;
}
.home-whoweare {
  width: 1583px;
  height: 959px;
  margin: 0 0 130px;
  padding: 140px 0;
}
.flexbox {
  width: 1440px;
  height: 679px;
  display: flex;
  padding-left: 50px;
}
.info {
  width: 450px;
  height: 679px;
}
.num-group {
  display: flex;
  justify-content: space-between;
}
.mask {
  width: 626px;
  height: 679px;
  margin-left: 300px;
  transition: all 0.5s;
}
.mask:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>