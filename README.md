# React Electron Boilerplate

This is a boilerplate project that demonstrates how to integrate React with Electron to build a cross-platform desktop application. It provides a preloader component for a better user experience during app loading.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ethan-Barr/react-electron.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-electron
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To run the project in development mode:

```bash
npm run dev
```

This command starts the React development server with hot reloading and opens the Electron app with the React app loaded. Any changes you make to the code will automatically be reflected in the app. You will also be able to access the changes on `localhost:3000`.

### Production

To build the project for production:

```bash
npm run build
```

This command builds the React app for production into the `build` directory.

To start the Electron app in production mode:

```bash
npm run electron
```

### Project Structure

```
react-electron/
├── build/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── main.js
└── package.json
```

- **`build/`**: Contains the production build of the React app.
- **`node_modules/`**: Contains the project dependencies.
- **`public/`**: Contains the HTML template file.
- **`src/`**: Contains the React components and stylesheets.
- **`main.js`**: Electron main process file.
- **`package.json`**: Project configuration and dependencies.

### Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Electron](https://www.electronjs.org/) - Framework for building cross-platform desktop applications with web technologies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Create React App](https://create-react-app.dev/) - Official React project boilerplate.
- [Electron Forge](https://www.electronforge.io/) - Toolkit for building modern Electron applications.
