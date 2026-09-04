fetch('https://unsplash.com/photos/EUO7L470LXk')
  .then(res => res.text())
  .then(text => {
    const match = text.match(/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?[^"]+/);
    console.log(match ? match[0] : 'No match');
  })
  .catch(console.error);
