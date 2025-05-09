// pages/gallery/index.js
import Head from 'next/head';
import Link from 'next/link';
import GalleryGrid from '../../components/GalleryGrid';
import { getGalleries } from '../../lib/galleryData'; // Fetch from CMS or local file

export async function getStaticProps() {
  const galleries = await getGalleries(); // Returns array of { id, title, thumbnailUrl, category }
  return {
    props: { galleries },
  };
}

export default function GalleryPage({ galleries }) {
  // Group galleries by category for display if needed
  const categories = [...new Set(galleries.map(g => g.category))];

  return (
    <>
      <Head>
        <title>Whispers of Wonder - AuraTerra Galleries</title>
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-elegant text-center mb-10">Whispers of Wonder</h1>
        {/* Could have filters here */}
        {categories.map(category => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 capitalize">{category}</h2>
            <GalleryGrid images={galleries.filter(g => g.category === category).map(g => ({...g, src: g.thumbnailUrl, alt: g.title }))} />
            {/* In a real app, GalleryGrid would take images for a specific gallery, not all thumbnails */}
          </section>
        ))}
      </main>
    </>
  );
}