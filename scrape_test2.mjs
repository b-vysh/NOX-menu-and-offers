import fs from 'fs';

fetch('https://unsplash.com/photos/EUO7L470LXk')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('unsplash.html', text);
    console.log('Saved to unsplash.html');
  })
  .catch(console.error);
