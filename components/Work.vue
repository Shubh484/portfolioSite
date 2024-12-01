<template>
    <section id="work" class="mt-[220px] px-4 lg:px-16">
      <div class="text-center">
        <h2 class="text-5xl font-bold mb-6">Projects</h2>
        <p class="text-lg text-gray-600">Here are some of my recent projects.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
  
          <div class="p-6">
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p class="text-gray-600 mt-3">{{ project.description }}</p>
          </div>
  
       
          <div class="flex justify-center items-center bg-gray-100 p-4">
            <a
              :href="project.github"
              target="_blank"
              class="text-gray-600 hover:text-black transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8"
              >
                <path
                  d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.2-1.7-4.2-1.7-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.8.1-.8 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.3-3.2c-.1-.3-.5-1.5.1-3a4.4 4.4 0 01.1 0s1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 01.1 0c.6 1.5.2 2.7.1 3a4.7 4.7 0 011.3 3.2c0 4.7-2.8 5.7-5.5 6 .3.3.6.8.6 1.6v2.4c0 .3.2.6.8.6A12 12 0 0012 0"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  


  <script setup>

import BeautiifyImage from "@/assets/beautiify.jpg";
import googleSearch from "@/assets/google-search.jpg";
import employee from "@/assets/employee.jpg";

const projects = [
  {
    title: "Google Search",
    description: "A google search clone.",
    image: googleSearch, 
    github: "https://github.com/Shubh484?tab=repositories",
  },
  {
    title: "Geofencing WebApp",
    description: "A WebApp for managing employee attendance and work",
    image: employee, 
    github: "https://github.com/Shubh484/Major-project-final",
  },
  {
    title: "Beautiify",
    description:
      "Beautiify comprises a curated selection of beautifully designed components and animations that can be seamlessly incorporated into any website, elevating its overall UI experience.",
    image: BeautiifyImage, 
    github: "https://github.com/Shubh484/Beautiify",
  },
];

</script>
