const fs = require('fs-extra');
const path = require('path');

const directoriesToCopy = [
    'assets/css',
    'assets/img',
    'assets/js',
    'assets/pdf',
];

const filesToCopy = [
    'index.html',
];

const destDir = path.join(__dirname, 'public');

fs.ensureDirSync(destDir);

directoriesToCopy.forEach(dir => {
    const srcDir = path.join(__dirname, dir);
    const destDirFullPath = path.join(destDir, dir);
    fs.copySync(srcDir, destDirFullPath);
    console.log(`Copied ${srcDir} to ${destDirFullPath}`);
});


filesToCopy.forEach(file => {
    const srcFile = path.join(__dirname, file);
    const destFile = path.join(destDir, path.basename(file));
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${file} to ${destFile}`);
});

console.log('Build completed successfully!');