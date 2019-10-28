<template>
  <div>
    <div class="title" v-title>this is VueResource component</div>
    <div class="desc">此组件只总结VueResource的相关知识</div>
    <h3>以下是用vue-resource请求过来的图片！</h3>
    <!-- <button @click='handleClick'>click me in son2!</button> -->
    <div>
      <img v-for="img in imgs" :key="img.id" :src="img.url" alt />
    </div>

  </div>
</template>

<script>
export default {
  name: "VueResource",
  data () {
    return {
      imgs:[]
    };
  },

  components: {},

  methods: {},

  created() {
    var _this = this;
    _this.$http
    .get("http://jsonplaceholder.typicode.com/photos", {
      params: {
        albumId: 1
      }
    })
    .then(function(data) {
      for (var i = 0; i < 10; i++) {
        _this.imgs.push(data.body[i]);
      }
    });
  },

  mounted() {}

}

</script>

<style scoped>
img {
  width: 50px;
  margin: 10px;
}
</style>