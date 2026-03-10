import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = "La-Matria"

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === "build"
      ? (process.env.GITHUB_ACTIONS ? `/${repoName}/` : "/")
      : "/"
  }
})