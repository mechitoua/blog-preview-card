<script setup lang="ts">
import { format } from 'date-fns';
import type { BlogPost } from '../types/blog';

const props = defineProps<{
  post: BlogPost;
}>();
const post = props.post;

const formattedDate = format(props.post.publishDate, 'd MMM yyyy');
</script>

<template>
  <article
    class="bg-white rounded-[20px] overflow-hidden max-w-sm font-figtree border border-gray-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] p-6">
    <div class="relative mb-6">
      <img :src="post.imageUrl" :alt="post.title" class="w-full rounded-[10px] object-cover" />
    </div>

    <div class="space-y-3">
      <span class="inline-block px-3 py-1 bg-yellow-primary text-gray-950 rounded-full text-sm font-medium">
        {{ post.category }}
      </span>

      <time :datetime="post.publishDate.toISOString()" class="block text-gray-500 text-sm">
        Published {{ formattedDate }}
      </time>

      <h2 class="text-xl font-extrabold text-gray-950 hover:text-yellow-primary transition-colors duration-200">
        <a href="#" class="block">{{ post.title }}</a>
      </h2>

      <p class="text-gray-500 line-clamp-3">
        {{ post.preview }}
      </p>

      <div class="mt-6 pt-6 border-t border-gray-200 flex items-center gap-3">
        <img :src="post.author.avatarUrl" :alt="post.author.name" class="w-10 h-10 rounded-full object-cover" />
        <span class="font-medium text-gray-950">{{ post.author.name }}</span>
      </div>
    </div>
  </article>
</template>
