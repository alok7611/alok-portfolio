<template>
    <div class="w-full py-20" id="faqs">
        <div class="flex flex-col justify-center items-center">
            <div class="w-12/12 text-left">
                <h2>{{ faqitems.title }}</h2>
                <h4>{{ faqitems.desc }}</h4>
                <UAccordion :items="items" :default-open="0">
                  <template #default="{ item }">
                    <h5 class="font-medium">{{ item.label }}</h5>
                  </template>
                  <template #content="{ item }">
                    <p>{{ item.content }}</p>
                  </template>
                </UAccordion>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: faqitems } = await useAsyncData("faq", async () => {
  const items = await queryCollection("home").all();

  // find banner.yml
  const faqContent = items.find((item) => item.stem === "home/faq");
  // return body only
  return faqContent?.meta?.body;
});
const items = faqitems.value?.questions;
</script>
