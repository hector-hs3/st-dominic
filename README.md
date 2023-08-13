# St. Dominic Catholic Church Miami 
## A Single Page React Application 
---

This project is made with much love ❤️ to help St. Dominic Catholic Church reach its members and display relevant/important information to site visitors.

### Background
This is a lightweight react application built with the most common tools and libraries available. The hope is that it will be easy to navigate and edit by future developers 🙏. 

At the end of this readme.md you will find a list of all that was used to build this application along with reference links in case troubleshooting is needed in the future.

---
## Task List
- [x] Initialize project
- [x] Add to Github
- [x] Clean up project file structure
- [x] Add responsive component library
- [x] Add styling framework
- [ ] Add routing framework
- [ ] Add Global Navigation component (header)
- [ ] Add Body & Component structure
- [ ] Add Footer
- [ ] Deploy to Netlify
- [ ] Add localization framework for English & Spanish
- [ ] Iterate over content with Users
- [ ] Deploy to GCP 
- [ ] Update DNS & Redirect URL to GCP

---


### References:
- Built with [Create React App](https://create-react-app.dev/docs/getting-started). Command used:

  - `yarn create react-app st-dominic --template typescript`

- The Dependency manager (yarn) was then updated to [Yarn Berry](https://yarnpkg.com/getting-started/migration#step-by-step) and configured for [Plug N' Play](https://yarnpkg.com/getting-started/migration#enabling-it) with [Zero Installs](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

  - This caches all dependencies in the project itself avoiding the need to reinstall everytime project is cloned.
  - Also, the following Yarn plugins were added:
    - `yarn plugin import typescript` 
    - `yarn plugin import version`

- Files and Folders were restructured for better organization 
- Aliasing was configured in `tsconfig.json` following [THIS](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- SASS was configured using [THIS](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
- PrimeReact chosen as the component library and installed by following [THIS](https://primereact.org/installation/)
---
### Documentation from Create React App:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To run the recently created `build` locally (for testing purposes): 
- Run the following in the root directory of you system: `yarn global add serve`
- Run the following in the root of your project: `serve -s build`

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

