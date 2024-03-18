# Fitness Application using React.js.
Typescript responsive Fitness application using ReactJS. For animation, I used Framer Motion which is a powerful motion Reactlibrary and I also created a side-scroller in this application in the OurClasses component. For the login page, I used Formikform. 
 # Features
It has 4 core components: Home, Benefits, OurClasses, and Contact US.\
Framer Motion which is a powerful motion Reactlibrary and I also created a side-scroller in this application in the OurClasses component.
# Components

#  Home Component
![Screenshot 2024-03-18 154233](https://github.com/KhushbuNavdiwala/GYM-typescript/assets/77695748/a4f53b83-cab8-4a40-a1bc-09947c9b59ae) 
#  Benifits Component
![Screenshot 2024-03-18 154400](https://github.com/KhushbuNavdiwala/GYM-typescript/assets/77695748/fb62dc93-4125-4199-b820-4b1800f499fc) 
# OurClasses Component
![Screenshot 2024-03-18 154445](https://github.com/KhushbuNavdiwala/GYM-typescript/assets/77695748/d65857e0-c556-4f4e-8812-d7777593931e)
# Contact US Component
![Screenshot 2024-03-18 154520](https://github.com/KhushbuNavdiwala/GYM-typescript/assets/77695748/56f2a6ec-85a4-4fef-a271-9b6a5a35c5c7)
















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
