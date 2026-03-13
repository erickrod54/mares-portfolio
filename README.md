# Erika Rodriguez | Sterile Processing Leadership 🏥

A professional portfolio showcasing excellence in healthcare operations, sterile processing management, and clinical leadership. This site is designed to reflect high-integrity medical standards through a "Technical Precision" design system.

## 🎨 Branding: "Clinical Integrity"

The visual identity is engineered to bridge the gap between financial accountability (Accounting background) and sterile clinical environments.

* **Deep Navy (`#1B263B`):** Represents professional authority, stability, and trust.
* **Medical Teal (`#415A77`):** The primary color for health sectors, symbolizing hygiene and sterile precision.
* **Silver Steel (`#E0E1DD`):** Reflects the surgical instruments and high-tech equipment (SPM, CensiTrac) managed daily.

---

## 🛠 Design Architecture

### 🌊 Fluid Design with `clamp()`

To ensure a perfect viewing experience on everything from an **iPhone** (for quick resume checks) to a **4K monitor** in a hospital admin office, this project utilizes fluid sizing.

* **The Concept:** A modern CSS function that acts like a "smart rubber band," replacing the need for hundreds of `@media` queries.
* **How it Works:** `clamp(minimum, preferred, maximum)`
  * **Minimum:** The floor for mobile (prevents text from being too small on an iPhone SE).
  * **Preferred:** A fluid value based on viewport width (`vw`) that grows smoothly.
  * **Maximum:** A ceiling to maintain readability on large 82" desktop or 4K screens.
* **The Benefit:** Content scales continuously without harsh "stair-step" jumps, maintaining a professional look on every device.

### 🌙 Modern Dark Theme Architecture

Instead of messy `dark:` utility classes, this project uses a centralized system that swaps "Semantic Tokens."

* **State Management:** React Context toggles a `.dark` class on the `<html>` root.
* **Variables (CSS):** Colors like `--main-bg` change automatically when the `.dark` class is applied.
* **Tailwind v4 Integration:** These variables map directly to the `@theme` directive.
* **The Benefit:** The UI "repaints" itself instantly while keeping the React components clean and easy to maintain.

## 1.- Instalation process

step by step installation from terminal command line to install vite + React + JavaScript:

```bash
# Here will display the menu and select app name + React + JavaScript ( Experimental no) 
npm create vite@latest
```

> **Note:** after vite tooling install, the app won't display, so an extra configuration step must me done
> at vite.config.js.

## 2.- vite configuration

right after installation, vite conf vite will need additional configuration in order to show the app:

```bash
# vite conf adds host true + port 5173 (to ensure the port) 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, // Opcional, para asegurar el puerto
  }
})
```

> **Note:** after tailwind command, add @tailwind tag ( generate color project color palette and branding )
> to index.css and also tailwindcss() plugin vite config.

## 🏗 shadcn/ui Architecture (v4 Optimized)

Unlike traditional component libraries, shadcn is not a closed package. Components are downloaded as source code directly into your `src/components/ui` folder, giving you 100% control.

## Automatic Dependency Management

When running `npx shadcn@latest init`, the modern CLI detects your environment and automatically configures:
**`class-variance-authority` (cva):** For managing component variants (e.g., button sizes/colors).
**`tailwind-merge` & `clsx`:** For intelligent class name merging.
**`src/lib/utils.js`:** Automatically creates the `cn()` utility function used by these libraries.

## 🛠 Core Tech Stack

**Framework:** React + Vite (JS)
**Styling:** Tailwind CSS v4 + shadcn/ui
**Routing:** Wouter (Ultra-lightweight 2kb) -
**Security:** @vitejs/plugin-basic-ssl (Required for modern browser APIs)
**Network:** Tailscale Mesh VPN -

## Plugin basicSsl ( @vitejs/plugin-basic-ssl - Required for modern browser APIs )

this ssl plugin for self signed certificates is highly important for API's, for
later back end and fornt end integration

```bash
# This is a comment inside the code block
npm install @vitejs/plugin-basic-ssl
npm run dev
```

rigght after basicSsl instalation, the configuration has to be added to vite.config:

```bash
# BasicSsl is imported and addeed as a plugin
# and https turn to true 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import BasicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
    BasicSsl()
  ],
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
    https:true
  }
})
```

### Why install `@types/node`?

In modern ESM environments, Node.js does not globally recognize variables like `__dirname`. We install these types manually to:

1. **Configure Path Aliases (`@/`):** Allow Vite to map `@` to the `/src` directory.
2. **Fix Editor Warnings:** Resolve "not defined" errors in `vite.config.js` when using the `path` module.

```bash
// fileURLToPath, path plus manual __dirname __filename as resolve section must 
// be made in this step

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import BasicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname manualmente para ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
    BasicSsl()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Configura el alias @
    },
  },
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
    https:true
  }
})
```

## 📥 Step-by-Step Installation

### 1. Preparation & Typing

Install the base dependencies and Node definitions so your configuration files work without errors.

```bash
npm install
npm install -D @types/node
```

> [!IMPORTANT]
> Ensure your `vite.config.js` defines `__dirname` manually (using `fileURLToPath`) so that shadcn aliases work correctly in ESM modules.

### 2. shadcn/ui Initialization

This command sets up the `components.json` file and the style utilities (`cn`, `cva`, `twMerge`) in one go.

```bash
# Already completed: Configures styles, CSS variables, and class utilities.
npx shadcn@latest init
```
