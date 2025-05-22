// Script to download professional images for The Last Companion website
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Create images directory if it doesn't exist
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image configurations with Unsplash URLs for high-quality, appropriate images with earthy tones
const images = [
  { 
    name: 'hero-bg', 
    url: 'https://images.unsplash.com/photo-1591030617255-43892ec644bc?q=80&w=1920&h=1080&auto=format&fit=crop',
    description: 'Mosque with earthy tones - serene and dignified background for funeral services'
  },
  { 
    name: 'mosque-silhouette', 
    url: 'https://images.unsplash.com/photo-1542713137-fe6b536ded5b?q=80&w=1920&h=1080&auto=format&fit=crop',
    description: 'Mosque with olive and earth tones - spiritual and peaceful'
  },
  { 
    name: 'pattern-bg', 
    url: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1920&h=1080&auto=format&fit=crop',
    description: 'Islamic geometric pattern in earthy tones - subtle background texture'
  },
  { 
    name: 'team-1', 
    url: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=600&h=600&auto=format&fit=crop&crop=faces',
    description: 'Professional Muslim man in formal attire - funeral director'
  },
  { 
    name: 'team-2', 
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&h=600&auto=format&fit=crop&crop=faces',
    description: 'Professional Muslim woman wearing hijab - funeral services coordinator'
  },
  { 
    name: 'team-3', 
    url: 'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=600&h=600&auto=format&fit=crop&crop=faces',
    description: 'Professional Muslim man in traditional clothing - religious advisor'
  }
];

// Function to download an image from a URL
function downloadImage(imageConfig) {
  return new Promise((resolve, reject) => {
    const { name, url, description } = imageConfig;
    const filePath = path.join(imagesDir, `${name}.jpg`);
    
    console.log(`Downloading ${name}.jpg from Unsplash...`);
    console.log(`Description: ${description}`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`));
        
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded ${name}.jpg`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Download all images asynchronously
async function downloadAllImages() {
  console.log('Downloading professional images from Unsplash...');
  console.log('Note: These images are for development purposes only.');
  console.log('For production, ensure you have proper licenses or attribution for all images.');
  
  try {
    // Download images sequentially to avoid overwhelming the server
    for (const imageConfig of images) {
      await downloadImage(imageConfig);
    }
    console.log('\nDone! All images have been downloaded to public/images/');
    console.log('\nIMPORTANT: For production use, please ensure proper attribution for Unsplash images');
    console.log('or replace with properly licensed images appropriate for your service.');
  } catch (error) {
    console.error('Error downloading images:', error.message);
  }
}

// Run the download process
downloadAllImages();
