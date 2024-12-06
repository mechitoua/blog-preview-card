<script setup lang="ts">
import { format } from 'date-fns';
import type { BlogPost } from '../types/blog';

const { post } = defineProps<{
  post: BlogPost;
}>();

const formattedDate = format(post.publishDate, 'd MMM yyyy');
</script>

<template>
  <article
    class="bg-white rounded-[20px] overflow-hidden max-w-sm font-figtree border border-gray-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] p-6"
    itemscope
    itemtype="http://schema.org/BlogPosting">
    <header>
      <figure class="relative mb-6">
        <img
          :src="post.imageUrl"
          :alt="post.title"
          class="w-full rounded-[10px] object-cover max-sm:h-[200px]"
          itemprop="image" />
      </figure>

      <div class="space-y-3">
        <span
          class="inline-block px-3 py-1 bg-yellow-primary text-black rounded-md max-sm:text-xs font-extrabold"
          role="tag"
          itemprop="articleSection">
          {{ post.category }}
        </span>

        <time
          :datetime="post.publishDate.toISOString()"
          class="block text-black max-sm:text-xs font-medium"
          itemprop="datePublished">
          Published {{ formattedDate }}
        </time>
      </div>
    </header>

    <main class="space-y-3 my-3">
      <h2 class="max-sm:text-xl text-2xl font-extrabold text-gray-950" itemprop="headline">
        <a
          href="#"
          class="block hover:text-yellow-primary transition-colors duration-200"
          aria-label="Read more about {{ post.title }}">
          {{ post.title }}
        </a>
      </h2>

      <p class="text-gray-500 line-clamp-3 font-medium" itemprop="description">
        {{ post.preview }}
      </p>
    </main>

    <footer class="mt-6 pt-6 border-gray-200 flex items-center gap-3">
      <img
        :src="post.author.avatarUrl"
        :alt="'Avatar of ' + post.author.name"
        class="w-10 h-10 rounded-full object-cover" />
      <span class="font-extrabold text-md text-black" itemprop="author">
        {{ post.author.name }}
      </span>
    </footer>
  </article>
</template>
