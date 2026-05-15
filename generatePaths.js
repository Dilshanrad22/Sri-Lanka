const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const outputFilePath = path.join(__dirname, 'src', 'utils', 'imagePaths.ts');

const getImages = (dir) => {
    let results = {};
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results[file] = fs.readdirSync(filePath)
                .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
                .map(f => `/images/${file}/${f}`);
        }
    });
    return results;
};

const imagePaths = getImages(imagesDir);
const content = `// Automatically generated file
export const imagePaths = ${JSON.stringify(imagePaths, null, 2)};
`;

fs.writeFileSync(outputFilePath, content);
console.log('imagePaths.ts updated successfully');
