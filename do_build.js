import { build } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if Z:/ mapped drive exists (for local Windows UNC path), otherwise use current directory (for Vercel / CI / Linux)
const useZDrive = process.platform === 'win32' && fs.existsSync('Z:/index.html');
const projectRoot = useZDrive ? 'Z:/' : __dirname;
const outDir = useZDrive ? 'Z:/dist' : path.join(__dirname, 'dist');
const indexInput = useZDrive ? 'Z:/index.html' : path.join(__dirname, 'index.html');

console.log(`Starting Vite build in root: ${projectRoot} (outDir: ${outDir})...`);

await build({
  configFile: false,
  root: projectRoot,
  plugins: [react()],
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: indexInput
    }
  }
});

console.log('Vite build completed successfully. Running prerender.js...');
await import('./prerender.js');
console.log('All builds and prerendering complete!');
