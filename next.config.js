const withSourcebit = require('sourcebit').sourcebitNext();
const withOptimizedImages = require('next-optimized-images');
module.exports = withSourcebit({});
module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
});
