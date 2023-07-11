# St. Dominic Catholic Church Miami 
## A Single Page React Application 
---

This project is made with much love ❤️ to help St. Dominic Catholic Church reach its members and display relevant/important information to site visitors.

### Background
This is a lightweight react application built with the most common tools and libraries available. The hope is that it will be easy to navigate and edit by future new comers 🙏. At the end of this readme.md you will find a list of all that was used to build this application along with reference links in case troubleshooting is needed in the future.

---
## Task List
- [x] Initialize project
- [x] Add to Github
- [ ] Deploy to Netlify
- [ ] Add responsive component library
- [ ] Add styling framework
- [ ] Add routing framework
- [ ] Add localization framework for English & Spanish
- [ ] Iterate over content with Users
- [ ] Deploy to GCP 
- [ ] Update DNS & Redirect URL to GCP

---


### References:
- Built with [Create React App](https://create-react-app.dev/docs/getting-started). Command used:

  - `yarn create react-app st-dominic --template typescript`

- The Dependency manager (yarn) was then updated to [Yarn Berry](https://yarnpkg.com/getting-started/migration#step-by-step) and configured for [Plug N' Play](https://yarnpkg.com/getting-started/migration#enabling-it) with [Zero Installs](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

  - This caches all dependencies as part of the project itself ensuring dependencies dont change from developer to developer.
  - Also, the following Yarn plugins were added:
    - `yarn plugin import typescript` 
    - `yarn plugin import version`


---
### Documentation from Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

