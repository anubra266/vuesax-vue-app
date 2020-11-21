<template>
  <div class="hidden">
    <Navbar />

    <Sidebar class="desktop" />

    <Sidebar class="mobile" :mobile="true" />
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/shared/Navbar";
import Sidebar from "@/shared/Sidebar";

export default {
  components: { Navbar, Sidebar },
  created() {
    // document.body.setAttribute("vs-theme", "dark");
  },
};
</script>

<style scoped>
.page {
  margin-top: 50px;
  margin-left: 260px;
  float: left;
}
.mobile{
    display: none;
}
@media (max-width: 767px) {
  .desktop {
    display: none;
  }
  .mobile{
    display: block;
}
  .page {
    margin-left: 0;
  }
}
</style>
