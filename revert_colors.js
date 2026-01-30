const fs = require('fs');
const path = require('path');

const files = [
    'sections/text-with-icons.liquid',
    'sections/slideshow.liquid',
    'sections/advantage-list.liquid',
    'assets/custom.css',
    'config/settings_data.json',
    'sections/collection-list.liquid',
    'sections/header.liquid'
];

const replacements = [
    { from: /#1c3048/gi, to: '#3b0ea4' },
    { from: /28,\s*48,\s*72/g, to: '59, 14, 164' },
    { from: /#ED8C31/gi, to: '#f5740a' },
    { from: /237,\s*140,\s*49/g, to: '245, 116, 10' }
];

files.forEach(file => {
    const filePath = path.resolve(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        replacements.forEach(rep => {
            content = content.replace(rep.from, rep.to);
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${file}`);
        } else {
            console.log(`No changes needed: ${file}`);
        }
    } else {
        console.log(`File not found: ${file}`);
    }
});
