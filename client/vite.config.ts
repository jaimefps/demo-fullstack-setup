import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import ChildProcess from "child_process"

function codegen() {
  return {
    name: "codegen-reload",
    handleHotUpdate({ file }) {
      if (!file.endsWith(".gql")) {
        return
      }
      ChildProcess.exec("yarn codegen", (error) => {
        if (error) {
          console.error(`🔴 vite:codegen:error:\n${error.message}`)
          return
        }
        console.log("🟢 vite:codegen:complete")
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codegen()],
})
