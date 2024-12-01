<template>
    <header>
      
      <div class="lg:hidden flex justify-between items-center px-4 py-4 bg-gray-900 text-white">
        <h1 class="text-xl font-bold">Portfolio</h1>
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  

      <nav class="bg-gray-900 lg:flex lg:justify-center lg:items-center lg:py-4 text-white">
       
        <ul
          v-if="isMenuOpen"
          class="flex flex-col space-y-4 px-4 py-4 lg:hidden"
        >
          <li>
            <a
              href="#home"
              class="block border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold"
              @click="closeMenu"
            >Home</a>
          </li>
          <li>
            <a
              href="#about"
              class="block border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold"
              @click="closeMenu"
            >About</a>
          </li>
          <li>
            <a
              href="#skills"
              class="block border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold"
              @click="closeMenu"
            >Skills</a>
          </li>
          <li>
            <a
              href="#work"
              class="block border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold"
              @click="closeMenu"
            >Work</a>
          </li>
          <li>
            <a
              href="#contact"
              class="block border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold"
              @click="closeMenu"
            >Contact</a>
          </li>
        </ul>
  
       
        <ul
          class="hidden lg:flex justify-center items-center space-x-8"
        >
          <li>
            <a href="#home" class="border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold">Home</a>
          </li>
          <li>
            <a href="#about" class="border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold">About</a>
          </li>
          <li>
            <a href="#skills" class="border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold">Skills</a>
          </li>
          <li>
            <a href="#work" class="border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold">Work</a>
          </li>
          <li>
            <a href="#contact" class="border-b-2 border-transparent hover:border-[#4D4DFF] p-2 font-semibold">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    position: sticky;
    top: 0;
    z-index: 50;
  }
  </style>
  

