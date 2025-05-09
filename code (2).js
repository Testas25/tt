// pages/index.js
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
// ... import other components for featured content

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AuraTerra: Your Digital Sanctuary</title>
        <meta name="description" content="Find Your Calm. Explore the Wonder." />
      </Head>
      <HeroSection
        videoSrc="/videos/serene-nature-loop.mp4" // Example path
        title="AuraTerra"
        subtitle="Find Your Calm. Explore the Wonder."
      />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-elegant text-center mb-6">Discover</h2>
        {/* Placeholder for featured gallery cards, soundscapes, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">Featured Gallery Preview</div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">Featured Soundscape</div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">Interactive Art Link</div>
        </div>
      </main>
    </>
  );
}