import fs from 'fs';
let render = fs.readFileSync('js/render.js', 'utf8');
render = render.replace(/<img class="product-image" src="\$\{product\.image\}" alt="\$\{product\.title\}" \/>/g, '<img class="product-image" src="${product.image}" alt="${product.title}" referrerpolicy="no-referrer" />');
fs.writeFileSync('js/render.js', render);
