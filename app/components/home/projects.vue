<template>
  <div class="w-full py-20" id="projects">
    <div class="flex flex-col justify-center items-cemter">
      <div class="w-12/12 mb-5">
        <h2>{{ project.title }}</h2>
        <h5 class="mb-6">{{ project.desc }}</h5>
        <hr class="base-hr" />
      </div>
      <div class="w-12/12">
        <div class="flex flex-col items-cemter gap-6">
          <div v-for="item in items" :key="item" class="items-start mb-4">
            <div class="mb-6">
              <h5 class="text-left mb-2">{{ item.name }}</h5>
              <p class="text-left">{{ item.desc }}</p>
              <a v-if="item.link" :href="item.link" class="font-semibold flex gap-2 items-center" target="_blank">Check Here 
                <Icon name="heroicons:arrow-long-right" class="text-xl mt-1" /></a>
            </div>
            <hr class="base-hr" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: project } = await useAsyncData("projects", async () => {
  const items = await queryCollection("home").all();

  // find banner.yml
  const projectsContent = items.find((item) => item.stem === "home/projects");
  // return body only
  return projectsContent?.meta?.body;
});
const items = project.value?.projects;
</script>
