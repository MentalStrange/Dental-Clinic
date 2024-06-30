import { useRef } from 'react';
import imageCompression from 'browser-image-compression';

export const useImageUpload = (setImage) => {
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1, // Maximum size in MB
        maxWidthOrHeight: 800, // Maximum width or height
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.onerror = (error) => {
          console.error("Error reading file:", error);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return {
    fileInputRef,
    handleImageChange,
    handleIconClick,
  };
};
