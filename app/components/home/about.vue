<template>
  <div class="w-full flex flex-col-reverse sm:flex-row py-20" id="aboutUs">
    <div class="w-full md:w-6/12">
      <h2>{{ aboutUs.name }}</h2>
      <p v-html="aboutUs.para1"></p>
      <p>{{ aboutUs.para2 }}</p>
    </div>
    <div class="w-full md:w-6/12">
      <div class="flex flex-col justify-center items-center text-center">
        <div class="w-8/12">
          <div class="border-box">
            <img src="/home/aboutSection/Me.png" class="aboutsecImg" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import baseCard from "../UI/baseCard.vue";
const { data: aboutUs } = await useAsyncData("about", async () => {
  const items = await queryCollection("home").all();
  const aboutData = items.find((item) => item.stem === "home/about");
  return aboutData?.meta?.body;
});
</script>

<style scoped>
.prog-icon {
  width: 100px;
  height: auto;
}
.aboutsecImg{
    background: var(--green);
    width: 400px;
    border-radius: 50%;
}
.border-box{
  padding: 12px;
  border: 2px var(--green);
  border-style: dashed;
  border-radius: 50%;
  max-width: 412px;
}
</style>