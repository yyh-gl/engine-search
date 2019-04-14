<template>
  <section class="container">
    <div class="title">
      <p>エンジニア検索</p>
    </div>

     <!-- TODO: デザインを作り込む -->
    <select>
      <option disabled value="none" selected>言語を選択</option>
      <option v-for="lang in langList" v-bind:key="lang.id" v-bind:value="lang.id">
        {{ lang.name }}
      </option>
    </select>

  </section>
</template>

<script>
  export default {
    name: "search",
    data () {
      return {
        langList: process.env.programmingLanguageList
      }
    }
  }
</script>

<style scoped>
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
    font-size: 70px;
    color: white;
    letter-spacing: 1px;
    padding-top: 10px;
  }

  select {
    position: relative;
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
