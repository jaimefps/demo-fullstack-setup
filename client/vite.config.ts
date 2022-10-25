import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import ChildProcess from "child_process"

function apolloServerRestart() {
  // Induces a restart of the VSCode Apollo server
  // whenever a gql file has activity saved. This
  // allows the client to detect backend changes.
  return {
    name: "apollo-touch",
    handleHotUpdate({ file }) {
      if (!file.endsWith(".gql")) {
        return
      }
      // trick found at:
      // https://github.com/apollographql/apollo-tooling/issues/1685#issuecomment-617035300
      ChildProcess.exec("touch apollo.config.js", (error) => {
        if (error) {
          console.error(`🔴 apollo:touch:failed:\n${error.message}`)
          return
        }
        console.log("🟢 apollo:touch:complete")
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apolloServerRestart()],
})
