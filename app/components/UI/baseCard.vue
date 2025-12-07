<template>
  <div class="baseCard flex flex-col justify-center items-center">
    <slot></slot>
  </div>
</template>

<style>
.baseCard {
  background-color: var(--secondary-dark);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
}
</style>