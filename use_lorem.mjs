import fs from 'fs';
import { mockItems } from './js/mockData.js';

let data = fs.readFileSync('js/mockData.js', 'utf8');

let newImages = 'export const itemSpecificImages = {\n';

mockItems.forEach((item, index) => {
  const keyword = item.category.toLowerCase();
  // using index as lock to keep images consistent across reloads
  newImages += `  "${item.id}": "https://loremflickr.com/300/400/${keyword}?lock=${index}",\n`;
});

newImages += '};\n';

// Replace the old itemSpecificImages object
data = data.replace(/export const itemSpecificImages = \{[\s\S]*?\};/, newImages);

fs.writeFileSync('js/mockData.js', data);
