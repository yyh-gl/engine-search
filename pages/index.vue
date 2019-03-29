<template>
  <section class="container">
    <div class="title">
      <app-logo/>
      <p>Engine Search</p>
    </div>

    <div class="menu">
      <a class="btn search" href="#">エンジニア検索</a>
      <a class="btn register" href="#">スキル登録</a>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-top: 30px;
  background-image: url('~assets/top-page.jpg');
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
}

.title {
  position: relative;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
  padding-top: 30px;
}

.menu {
  position: relative;
  padding-top: 80px;
}

.btn {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: gray;/*ボタン色*/
  color: white;/*ボタン色より暗く*/
  box-shadow: 0 2px rgba(46, 47, 52, 0.98);
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
}

.btn:active  {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
}
</style>

