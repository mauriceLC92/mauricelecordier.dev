const { PurgeCSS } = require("purgecss");
const fs = require('fs');
// https://github.com/FullHuman/purgecss/issues/43
// https://gist.github.com/martsie/a25dd8a8c57547004548013f07b50a44

/**
 * useful tailwind and react links
 * https://wetainment.com/create-react-app-tailwind-css/
 * https://wetainment.com/create-react-app-tailwind-css/
 * https://github.com/kriswep/cra-tailwindcss
 */
async function runTheThing() {

  const result = await new PurgeCSS().purge({
    content: ['build/static/js/*.js'],
    css: ['build/static/css/*.css']
  });

  // Do stuff with response
  // I'm going to do something like fs.writeFile blah blah
  result.forEach((result) => {
    const file = result.file;
    const css = result.css;
    
    fs.stat(file, (error, originalFileStats) => {
      console.log(originalFileStats);
      fs.writeFileSync(file, css);
      const newFileStats = fs.statSync(file);
      console.log('\x1b[32m', `Purge CSS saved ${Math.round((originalFileStats.size - newFileStats.size) / 1000)}kb on ${file}`);
    });
  });
}

runTheThing();
// const purgecss = new PurgeCSS({
//   content: ['build/static/js/*.js'],
//   css: ['build/static/css/*.css']
// })
// const purgeCSSResults = await new Purgecss().purge({
//   content: ['**/*.html'],
//   css: ['**/*.css']
// })
// const purgecssResult = purgecss.purge();

// purgecssResult.forEach((result) => {
//   const file = result.file;
//   const css = result.css;
  
//   fs.stat(file, (error, originalFileStats) => {
//     console.log(originalFileStats);
//     fs.writeFileSync(file, css);
//     const newFileStats = fs.statSync(file);
//     console.log('\x1b[32m', `Purge CSS saved ${Math.round((originalFileStats.size - newFileStats.size) / 1000)}kb on ${file}`);
//   });
// });
