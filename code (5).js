// components/GalleryGrid.js
import { useState } from 'react';
import ImageModal from './ImageModal'; // Assume this component exists
import { motion } from 'framer-motion';

export default function GalleryGrid({ images }) { // images = [{ id, src, alt, ...otherData }]
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id || index}
            className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
}

// components/ImageModal.js - Very simplified
// In a real app, you'd use a portal and more robust styling/features
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose} // Close on overlay click
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-white dark:bg-gray-800 p-2 rounded-lg max-w-4xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <img src={image.highResSrc || image.src} alt={image.alt} className="max-w-full max-h-[85vh] object-contain rounded" />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black dark:text-white bg-white dark:bg-gray-700 rounded-full p-1 text-2xl leading-none"
          >
            &times;
          </button>
          {/* Add image info, download, share buttons here */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}