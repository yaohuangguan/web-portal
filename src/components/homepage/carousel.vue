<template>
  <div class="intro intro-carousel no-margin">
    <div id="carousel" class="owl-carousel owl-theme">
      <div
        class="carousel-item-a intro-item bg-image"
        :style="{'background-image': 'url(' + require('@/assets/img/slide-2.jpg') + ')'}"
      >
        <div class="overlay overlay-a"></div>
        <div class="intro-content display-table">
          <div class="table-cell">
            <div class="container">
              <div class="row">
                <div class="col-lg-8">
                  <div class="intro-body">
                    <h1 class="intro-title mb-4 animated lightSpeedIn">
                      Lets build
                      <br />Your own
                      <span class="color-b">
                        <i class="fas fa-cookie-bite"></i>
                      </span>
                    </h1>
                    <div>
                      <div class="row">
                        <a href="#menu" style="margin-top:40px;margin-right:10px">
                          <span class="price-a">
                            <i class="fas fa-caret-down"></i>great!
                          </span>
                        </a>

                        <!-- <router-link to="/cookie" style="margin-top:40px;margin-right:10px"><span class="price-a">Customize</span></router-link> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
