<template>
    <div id="skills" class="mt-[200px] flex flex-col items-center">
    
      <p class="text-5xl font-bold mb-8 tracking-wider">Skills</p>
     
      <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-24 mt-20">
        <li class="flex justify-center items-center">
          <img src="assets/react-icon.png" alt="React" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/vue-icon.png" alt="Vue.js" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/nuxt-icon.png" alt="Nuxt.js" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/node-icon.png" alt="Node.js" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/express-icon.png" alt="Express.js" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/sql-icon.png" alt="SQL" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/sequelize-icon.png" alt="Sequelize" class="w-24 h-24 border rounded-full" />
        </li>
        <li class="flex justify-center items-center">
          <img src="assets/postgres-icon.png" alt="Postgres" class="w-24 h-24 border rounded-full" />
        </li>
      </ul>
    </div>
  </template>
  
  <style>

  ul li img:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
  </style>
  