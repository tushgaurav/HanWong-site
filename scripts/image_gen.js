const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/gallery/images";
const outputDir = "./public/gallery/thumb";
const thumbnailSize = 400; // Size of the thumbnail (width)

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    // Generate thumbnail
    sharp(inputPath)
      .resize(thumbnailSize) // Resize to 200px width, maintain aspect ratio
      .toFile(outputPath)
      .then(() => console.log(`Thumbnail created for ${file}`))
      .catch((err) => console.error(`Error processing ${file}:`, err));
  });
});
