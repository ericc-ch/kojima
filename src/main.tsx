/* @refresh reload */
import { render } from "solid-js/web"

import { App } from "./app"
import "./global.css"

const root = document.querySelector("#root")

if (!(root instanceof HTMLElement)) {
  throw new TypeError(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  )
}

render(() => <App />, root)
