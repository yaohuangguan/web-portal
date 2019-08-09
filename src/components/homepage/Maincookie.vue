<template>
  <section class="section-news section-t8" id="menu">
    <div class="container">
      <div>
        <div class="title-single-box text-center">
          <h1
            class="title-single font-weight-bold"
            style="color:#444; font-size:30px;letter-spacing:3px"
          >Featured items</h1>
        </div>

        <allList />
      </div>
    </div>
  </section>
</template>

<script>
import allList from "@/components/allList";
import { mapGetters } from "vuex";

export default {
  name: "Main-cookie",
  components: {
    allList
  }
};
</script>

 <style scoped>
.link1 {
  text-decoration: none;
}
.link1:hover {
  text-decoration: none;
}
</style>
 