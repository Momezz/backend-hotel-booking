const cloudinary = require('cloudinary').v2;

async function uploadImage(image: string) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'dataFiles',
      use_filename: true,
      unique_filename: false,
    })
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default uploadImage;
