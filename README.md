# React Calculator

A simple, functional calculator application built with React and Vite.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear (C) button to reset the calculator
- Delete (DEL) button to remove the last entered digit
- Clear Entry (CE) button for future implementation
- Real-time display of expressions and results
- Clean, responsive user interface

## Project Structure

```
react-calculator/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx    # Main calculator logic and layout
│   │   ├── Display.jsx       # Display component for showing values
│   │   └── Button.jsx        # Reusable button component
│   ├── App.jsx               # Root application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── index.html                # HTML template

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-calculator
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build

To create an optimized production build:

```bash
npm run build
```

### Preview

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check code quality with ESLint:

```bash
npm run lint
```

## Technologies Used

- **React** (^19.2.0) - UI library
- **React DOM** (^19.2.0) - React DOM rendering
- **Vite** (^7.2.4) - Build tool and dev server
- **ESLint** (^9.39.1) - Code quality tool

## How It Works

The calculator uses React hooks (`useState`) to manage the expression state. Users can:

1. **Enter numbers and operators** by clicking buttons
2. **View the expression** in the display
3. **Delete the last character** using the DEL button
4. **Clear the entire expression** using the C button
5. **Calculate the result** by clicking the equals (=) button

### Components

- **Calculator.jsx**: Handles state management and button layout
- **Display.jsx**: Shows the current expression or result
- **Button.jsx**: Reusable button component

## Future Improvements

- Implement the Clear Entry (CE) button functionality
- Add keyboard input support
- Improve error handling for invalid expressions
- Add calculation history
- Enhance UI/UX design

