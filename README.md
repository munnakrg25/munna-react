# Munna React Reviews App

A clean and simple reviews carousel built with React and Vite. This project displays profile cards with an image, name, job title, and review text, with controls to browse forward, backward, or jump to a random review.

## About The Project

This app is a beginner-friendly React project focused on state management, event handling, and rendering dynamic content from local data. Review details are stored in a single file and displayed through a simple card-based interface.

It is useful for practicing:

- React state with `useState`
- Rendering data from arrays
- Button event handling
- Basic component styling with CSS

## Features

- Previous and next review navigation
- Random review selection with `Surprise Me`
- Profile image, name, role, and review text display
- Clean centered layout with custom styling
- Easy data updates through a single source file

## Built With

- React
- Vite
- JavaScript
- CSS3

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the App

```bash
npm run dev
```

After the server starts, open the local URL shown in the terminal.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` checks the project with ESLint

## Project Structure

```text
munna-react/
|-- public/
|-- src/
|   |-- assets/
|   |-- App.jsx
|   |-- App.css
|   |-- data.js
|   |-- index.css
|   |-- main.jsx
|-- index.html
|-- package.json
|-- README.md
```

## How It Works

The review data is stored in `src/data.js` as an array of objects. The main component in `src/App.jsx` keeps track of the current review index using React state and updates the displayed card when the user clicks the navigation buttons.

## Customization

To add or edit reviews, update `src/data.js` using the same object structure:

```js
{
  id: 1,
  name: "Person Name",
  job: "Role",
  image: ImageFile,
  text: "Review text"
}
```

To change the UI design, edit the styles in `src/index.css`.

## Future Improvements

- Add more review entries
- Avoid showing the same review on random click
- Add transitions or animations
- Load reviews from an API or JSON file

## Author

Munna Kumar
