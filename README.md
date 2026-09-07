<<<<<<< HEAD
Manual Testing descriptions
Test case:Click all the links on for
NavMenu(Home, About, MyPlants, MySupplies)
=======
<img width="4284" height="5712" alt="Wire frame for rooted " src="https://github.com/user-attachments/assets/88709042-f2e6-4179-89dc-618b083eae13" />















# React + Vite
>>>>>>> 07f119460c5ef181b85856600606185bea783f82

Manual Testing 
TEST CASE 
React Router updates the URL
EXPESCTED RESULTS 
React Router updates the URL smoothly without reloading the page.
STATUS 
pass

TEST CASE
Plant name input generates the correct plant match
EXPESCTED RESULTS
The plant name matches the user's input, and the correct plant information is rendered on My Plants for the plant profile and user information.
STATUS 
pass

TEST CASE 
Add Plants page submits filtered data from API
EXPESCTED RESULTS
The Add Plants page accepts the user's entry for plant API data is correctly filterd into My Plants when form is submitted.
STATUS
pass


Debugging 
ISSUE
API CORS issue prevented the application from accessing plant data from API
RESOLUTION
Investigated the browser console and network errors in DEV TOOLS CORS error was identified.
API browser url needed to be adjusted I changed the parameters and how the computer accessed the data. The API was then retested and the application to confirm the correct data was being retrieved correctly. 
STATUS 
Resolved 














# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



