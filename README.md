# Weather API using React.js.
This project is a responsive weather application built using React.js and TypeScript. It leverages the OpenWeatherMap API to fetch current weather data for specified locations. With this weather API, you can quickly and easily access up-to-date weather information for your chosen areas.

 # Features
Real-time weather data retrieval from OpenWeatherMap API.\
A responsive and user-friendly interface for displaying weather information.\
Built using React.js and TypeScript for robust and maintainable code.
# Dynamic background changing according to the temperature of the city.

![image](https://github.com/KhushbuNavdiwala/WEATHER_APP_API/assets/77695748/22a006ca-91de-4d74-b26f-97d31865bd44)

![image](https://github.com/KhushbuNavdiwala/WEATHER_APP_API/assets/77695748/37e0d8a1-b034-4b39-8648-a796518c40af)








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
