<script setup lang="ts">
import blogPreviewImage from './assets/illustration-article.svg';
import authorAvatar from './assets/image-avatar.webp';
import BlogCard from './components/BlogCard.vue';
import type { BlogPost } from './types/blog';

const post: BlogPost = {
  id: '1',
  category: 'Learning',
  publishDate: new Date('2023-12-21'),
  title: 'HTML & CSS foundations',
  preview: 'These languages are the backbone of every website, defining structure, content, and presentation.',
  imageUrl: blogPreviewImage,
  author: {
    name: 'Greg Hooper',
    avatarUrl: authorAvatar,
  },
};
</script>

<template>
  <main class="min-h-screen bg-yellow-300 flex items-center justify-center p-6">
    <BlogCard :post="post" />
  </main>
</template>
