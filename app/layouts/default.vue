<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center main-layout-wrapper"
  >
    <header class="w-full flex justify-center items-center">
      <div class="flex w-full justify-center items-center">
          <nav class="flex w-full md:w-8/12 lg:w-3/12 justify-center items-center sticky-header">
            <ul class="flex justify-between gap-5 md:gap-9">
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutUs">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li>
                <button @click="toggleColorMode">
                  <Icon
                    v-if="colorMode.value === 'light'"
                    name="uil:moon"
                    class="w-6 h-6"
                  />
                  <Icon v-else name="uil:sun" class="w-6 h-6" />
                </button>
              </li>
            </ul>
          </nav>
      </div>
    </header>
    <div class="container">
      <slot></slot>
    </div>
    <footer class="w-full pt-10 pb-5">
      <div class="w-full">
        <div class="flex">
          <div class="w-10/12">
            <p>© Kshatriya Alok</p>
          </div>

          <div class="w-2/12 flex justify-end">
            <Icon name="uil:github" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>


<style>
.main-layout-wrapper {
  border-inline: 1px solid var(--borderColor);
  padding: 0 4%;
  min-height: 100vh;
}
header {
  min-height: 100px;
}
header .iconify{
  cursor: pointer;
}
</style>