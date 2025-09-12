import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        yellow: {
          50: { value: "#e6ceb2" },
          100: { value: "#e8caa7" },
          200: { value: "#af8d66ff" },
          300: { value: "#856a4c" },
        },
        red: {
          50: { value: "#ff9b96" },
          100: { value: "#f06862" },
          200: { value: "#8d2e2a" },
          300: { value: "#691916" },
        }, 
        brown: {
          50: { value: "#70342d" },
          100: { value: "#57302b" },
          200: { value: "#372523" },
          300: { value: "#150807ff" },
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)