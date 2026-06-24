import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/shd-virtual-construction-partners-website/', 
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})