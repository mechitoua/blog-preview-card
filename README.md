# Blog Preview Card Component

<div align="center">

| Desktop View | Mobile View |
|-------------|-------------|
| ![Desktop View](/public/card-desktop.png) | ![Mobile View](/public/card_mobile.png) |

</div>

A modern, responsive blog preview card component built with Vue 3, TypeScript, and Tailwind CSS. This component provides a beautiful way to display blog post previews with features like hover effects, responsive images, and proper typography.

## 🚀 Features

- Modern UI design with hover effects and transitions
- Fully responsive layout
- Custom Figtree font integration
- TypeScript for type safety
- Tailwind CSS for styling
- Date formatting with date-fns
- Accessible markup

## 🛠️ Tech Stack

- Vue 3 with `<script setup>`
- TypeScript
- Tailwind CSS
- Vite
- ESLint + Prettier for code quality
- PNPM as package manager

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd blog-preview-card
```

2. Install dependencies with PNPM:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## 🔧 Usage

The BlogCard component accepts a `post` prop of type `BlogPost`:

```typescript
interface BlogPost {
  title: string;
  preview: string;
  publishDate: Date;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}
```

Example usage:
```vue
<template>
  <BlogCard :post="blogPost" />
</template>
```

## 🎨 Customization

The component uses custom colors defined in `tailwind.config.js`:
- Primary Yellow: `hsl(47, 88%, 63%)`
- Gray Text: `hsl(0, 0%, 42%)`
- Dark Text: `hsl(0, 0%, 7%)`

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint code
- `pnpm format` - Format code with Prettier

## 📄 License

[Your chosen license]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
