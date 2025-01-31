# 🍕 Pizza Dash

Pizza Dash is a **React-based** web application designed to streamline pizza ordering and management. Built with **Vite**, **React Router**, **Redux Toolkit**, and **TailwindCSS**, this project offers a fast and modern frontend experience.

---

## 🚀 Features

- 🍕 **Order Management** - Easily place and track orders.
- 📜 **Dynamic UI** - Styled using TailwindCSS.
- 🔄 **State Management** - Powered by Redux Toolkit.
- 🌍 **Routing** - Integrated with React Router.
- ⚡ **Fast Development** - Uses Vite for blazing-fast builds.
- ✅ **Linting & Formatting** - ESLint and Prettier configured.

---

## 🏗️ Project Structure

```
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── [Various icons & images]
├── src
│   ├── App.jsx
│   ├── features/        # Feature modules
│   ├── index.css
│   ├── main.jsx         # Entry point
│   ├── services/        # API & data fetching
│   ├── store.js         # Redux store setup
│   ├── ui/              # UI components
│   └── utils/           # Utility functions
├── store.js
├── tailwind.config.js
└── vite.config.js
```

---

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/pizza-dash.git
   cd pizza-dash
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```

---

## 🛠️ Built With

### **Frontend**

- [React 18](https://react.dev/) - UI framework
- [React Router](https://reactrouter.com/) - Client-side routing
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [TailwindCSS](https://tailwindcss.com/) - Utility-first styling
- [Vite](https://vitejs.dev/) - Fast build tool

### **Development Tools**

- [ESLint](https://eslint.org/) - Linter for maintaining code quality
- [Prettier](https://prettier.io/) - Code formatter

---

## 📜 Scripts

The following scripts are available:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

- `npm run dev` → Start development server
- `npm run build` → Build production files
- `npm run lint` → Check for linting issues
- `npm run preview` → Preview production build

---

## 📌 Configuration

### **Vite Config (`vite.config.js`)**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
});
```

### **TailwindCSS Config (`tailwind.config.js`)**

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
```

### **ESLint Configuration (`.eslintrc.js`)**

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
  },
};
```

---

## 🎯 Future Improvements

- 🌟 Add authentication (e.g., Firebase, Auth0)
- 🚀 Implement backend API (Node.js, Express, or Firebase)
- 📱 Improve mobile responsiveness
- 🎨 Enhance UI/UX with animations & transitions

---

## 📄 License

This project is **MIT Licensed**. Feel free to modify and use it as needed!

---

## 💬 Feedback & Contributions

We welcome contributions! Feel free to fork, submit PRs, or report issues.

Happy coding! 🚀🍕
