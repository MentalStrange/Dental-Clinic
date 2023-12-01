const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
const cloudName = import.meta.env.VITE_CLOUD_NAME;

let uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default uploadImageToCloudinary;
