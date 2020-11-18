<template>
  <div>
    <div class="container mx-auto">
      <div align="center">
        <img
          src="@/assets/images/logo.png"
          alt="API party logo"
        >
        <span class="text-gray-600">The awesome API collection!</span>
      </div>
    </div>
    <div class="bg-gray-200 my-8">
      <div class="container mx-auto py-6 text-center">
        <p>
          If you are wondering what is it all about, then this is an a small
          project built to list the awesome API created by hundres of users and
          companies around the world.
        </p>
        <span>
          Everyone loves to use awesome API in their personal/professional
          project. That is why we introduce
          <b>API Party.</b>
        </span>
      </div>
    </div>
    <div align="center">
      <button
        class="bg-blue-300 rounded-md px-4 py-2 focus:outline-none"
        @click="$router.push('/list')"
      >
        <span class="font-semibold">Check Awesome List</span>
      </button>
    </div>
  </div>
</template>

<script>
	export default {};
</script>
