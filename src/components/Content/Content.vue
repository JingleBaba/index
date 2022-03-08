<template>
  <div class="Content min-h-screen col-span-8 p-6 pt-12">
    <div id="introduction">
      <h2 class="text-2xl mb-4">Introduction</h2>
      <p class="text-lg">
        Prismic is a CMS system, which makes use of various pre-build elements
        to create the reusable components.
      </p>
      <p class="text-lg">
        As there is no official integration for prismic in shopify platform, we
        use prismic events/hooks to trigger modification or creation of page and
        its metafields for the integration.
      </p>
      <p class="text-lg">All of these fun stuffs are taken care by backend.</p>
      <h3 class="text-xl mt-6 underline">
        Common Prismic Terminology
      </h3>
      <p class="text-lg mt-8">
        <span class="block font-semibold">Custom Types:</span>
        <span>Each document(pages) created through prismic should have a template. Custom Types serve as the template for these documents. </span>
        <a class="text-green-600 underline font-semibold block mt-1"> Add a new Custom Type +</a>
      </p>

      <p class="text-lg mt-8">
        <span class="block font-semibold">Slices:</span>
        <span>Slices serves as a component. A component is a collection of elements/placeholder grouped together. It can be shared across the custom types.</span>
        <a class="text-green-600 underline font-semibold block mt-1"> Add a new slice +</a>
      </p>
      <p class="text-lg mt-8">
        <span class="block font-semibold">Elements:</span>
        <span>Elements acts as a placeholder. There are predefined elements that we can use to create data placeholders.</span>
        <a class="text-green-600 underline font-semibold block mt-1"> Add a new Elements +</a>
        <span class="block font-semibold mt-4">We will be refering <span class="text-red-400">elements</span> as <span class="text-green-400">placeholder</span></span>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>