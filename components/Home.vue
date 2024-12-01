<template>
  <div id="home" class="mt-10 md:mt-[160px] flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-40 md:space-y-0 px-4">
    
    <div>
      <div class="space-y-4 text-center md:text-left">
        <p class="text-3xl md:text-5xl font-bold">Hy There,<br /></p>
        <p class="text-3xl md:text-5xl font-bold">I'm Shubh Singh</p>
        <p class="text-lg md:text-xl font-medium">
          <span class="text-frontend">I am into </span>
          <span class="text-change text-[#4D4DFF]">{{ currentText }}</span>
        </p>
        <div>
          <a href="#about">
            <UButton
              class="bg-[#4D4DFF] text-sm font-semibold px-4 py-2"
              label="About me"
              color=""
            >
              <template #trailing>
                <UIcon name="i-heroicons-arrow-down-20-solid" class="w-5 h-6" />
              </template>
            </UButton>
          </a>
        </div>
      </div>
    </div>

    <div>
      <img
        class="w-48 h-48 md:w-60 md:h-60 border rounded-full mx-auto md:mx-0"
        src="assets/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
        alt="avatar"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentText = ref('Frontend Development');

const toggleText = () => {
  currentText.value =
    currentText.value === 'Frontend Development'
      ? 'Backend Development'
      : 'Frontend Development';
};

let interval;
onMounted(() => {
  interval = setInterval(toggleText, 3000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.text-change {
  display: inline-block;
  transition: opacity 0.5s ease-in-out;
}
</style>
