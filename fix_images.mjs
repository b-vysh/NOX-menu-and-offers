import fs from 'fs';
let data = fs.readFileSync('js/mockData.js', 'utf8');
data = data.replace(/"(MAT-\d+)":\s*"https:\/\/picsum\.photos\/seed\/picsum\/300\/400"/g, '"$1": "https://picsum.photos/seed/$1/300/400"');
fs.writeFileSync('js/mockData.js', data);
