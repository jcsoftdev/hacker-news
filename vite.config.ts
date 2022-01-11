import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import reactJsx from 'vite-react-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "@/styles" as common;',
				importer(...args) {
					if (args[0] !== '@/styles') {
						return
					}

					return {
						file: `${path.resolve(__dirname, './src/assets/styles')}`,
					}
				},
			},
			css: {
				additionalData: '@use "@/styles" as common;',
				importer(...args) {
					if (args[0] !== '@/styles') {
						return
					}

					return {
						file: `${path.resolve(__dirname, './src/assets/styles')}`,
					}
				},
			},
		},
	},
})
