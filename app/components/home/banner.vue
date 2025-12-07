<template>
  <section class="w-full py-20" id="home">
    <div
      class="container flex justify-center items-center text-center flex-col mb-10"
    >
      <img src="/home/me.png" alt="My Image" class="meImg" />
      <h1>{{ bannerData?.name }}</h1>
      <h4>{{ bannerData?.title }}</h4>
      <p>{{ bannerData?.subtitle }}</p>
    </div>
    <div class="container flex justify-center items-center">
      <UCarousel
        v-slot="{ item }"
        :items="badgeImages"
        loop
        arrows
        auto-scroll
        :ui="{ item: 'basis-1/2 md:basis-1/4 lg:basis-1/6' }"
      >
        <base-card>
          <img :src="item.img" class="rounded-lg badgeImg" />
        </base-card>
      </UCarousel>
    </div>
  </section>
</template>

<script setup>
import baseCard from "../UI/baseCard.vue";
const { data: bannerData } = await useAsyncData("banner", async () => {
  const items = await queryCollection("home").all();

  // find banner.yml
  const banner = items.find((item) => item.stem === "home/banner");
  // return body only
  return banner?.meta?.body;
});
const badgeImages = bannerData.value?.badges || [];
</script>

<style scoped>
.meImg {
  width: 250px;
  height: auto;
  padding: 8px;
  border: 1px dashed var(--borderColor);
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.badgeImg {
  height: 100px;
  width: 120px;
  object-fit: contain;
  padding: 5% 8%;
}
</style>

