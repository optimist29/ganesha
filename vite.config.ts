import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        'ganesha-1': 'ganesha-1.html',
        'ganesha-2': 'ganesha-2.html',
        'ganesha-3': 'ganesha-3.html',
        'ganesha-4': 'ganesha-4.html',
        'ganesha-5': 'ganesha-5.html',
        'ganesha-6': 'ganesha-6.html',
        'ganesha-7': 'ganesha-7.html',
        'ganesha-8': 'ganesha-8.html',
        'ganesha-9': 'ganesha-9.html',
        'ganesha-10': 'ganesha-10.html',
        'ganesha-11': 'ganesha-11.html',
        'ganesha-12': 'ganesha-12.html',
        'ganesha-13': 'ganesha-13.html',
        'ganesha-14': 'ganesha-14.html',
        'ganesha-15': 'ganesha-15.html',
        'ganesha-16': 'ganesha-16.html',
        'ganesha-17': 'ganesha-17.html',
        'ganesha-18': 'ganesha-18.html',
        'ganesha-19': 'ganesha-19.html',
        'ganesha-20': 'ganesha-20.html',
        'ganesha-21': 'ganesha-21.html',
        'ganesha-22': 'ganesha-22.html',
        'ganesha-23': 'ganesha-23.html',
        'ganesha-24': 'ganesha-24.html',
        'ganesha-25': 'ganesha-25.html',
        'ganesha-26': 'ganesha-26.html',
        'ganesha-27': 'ganesha-27.html',
        'ganesha-28': 'ganesha-28.html',
        'ganesha-29': 'ganesha-29.html',
        'ganesha-30': 'ganesha-30.html',
        'ganesha-31': 'ganesha-31.html',
        'ganesha-32': 'ganesha-32.html'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});