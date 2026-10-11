import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/anhqui-portfolio/', // <--- Phải có dòng này chính xác theo tên repo của bạn
  plugins: [react()],
})