import { build } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Starting custom Vite build on Z:/ ...');
await build({
  configFile: false,
  root: 'Z:/',
  plugins: [react()],
  build: {
    outDir: 'Z:/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'Z:/index.html'
    }
  }
});

console.log('Vite build completed successfully. Running prerender.js...');
await import('./prerender.js');
console.log('All builds and prerendering complete!');
