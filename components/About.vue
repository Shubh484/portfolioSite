<template>
  <div id="about" class="flex flex-col items-center mt-16 md:mt-24 lg:mt-[220px] px-6 lg:px-24">

    <div>
      <p class="text-4xl md:text-5xl font-bold tracking-wider text-center">About me</p>
    </div>

    
    <div
      class="mt-[80px] flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 space-y-10 lg:space-y-0 w-full max-w-7xl"
    >
   
      <div class="flex justify-center lg:flex-1">
        <img
          class="w-[250px] md:w-[300px] lg:w-[300px] border rounded-lg shadow-lg "
          src="assets/professional-photo.jpg"
          alt="Shubh Singh"
        />
      </div>

     
      <div class="space-y-6 lg:flex-1 text-center lg:text-left">
        <p class="text-2xl md:text-3xl font-bold">I'm Shubh</p>
        <p class="text-lg md:text-xl font-semibold text-[#4D4DFF]">Full Stack Developer</p>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed">
          Hi, I’m Shubh Singh, a passionate full-stack developer specializing in building efficient, scalable web
          applications. With expertise in the PERN stack, React, and Tailwind CSS, I bring ideas to life through clean
          and responsive designs. I’ve worked on projects like employee management systems and portfolio websites,
          demonstrating my commitment to delivering impactful solutions. I’m a quick learner, problem-solver, and always
          excited to explore new technologies to create meaningful digital experiences.
        </p>
        <p class="text-gray-700">
          <span class="text-[#4D4DFF] font-medium">Email: </span>
          shubhsingh8767@gmail.com
        </p>

        <!-- Button -->
        <div class="pt-4">
          <UButton
            class="bg-[#4D4DFF] hover:bg-blue-600 transition text-sm font-bold text-white px-6 py-2 rounded-md"
            label="Resume"
            color=""
          >
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-6" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}
</style>
