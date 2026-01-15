# React Calculator

A simple, functional calculator application built with React and Vite.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear (C) button to reset the calculator
- Delete (DEL) button to remove the last entered digit
- Clear Entry (CE) button for future implementation
- Operator display format showing "number operator" (e.g., "3 +")
- Division by zero error handling
- Clean, responsive user interface
- Optimized state management for accurate calculations

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

### React Features Used

- **Hooks:**
  - `useState` - Manages calculator state (previous, current, operator)
- **Functional Components** - All components are function-based
- **Props** - Component communication through props (label, onClick, className)
- **Event Handling** - onClick events for button interactions
- **Conditional Rendering** - Display format based on state values
- **Component Composition** - Reusable Button and Display components

## How It Works

The calculator uses React hooks (`useState`) to manage state separately for:
- `previous`: The first operand
- `current`: The second operand being entered
- `operator`: The selected arithmetic operator

### Calculation Flow

1. **User enters a number** → stored in `current` state
2. **User clicks an operator** → `current` is moved to `previous`, `current` is cleared, operator is stored
3. **User enters another number** → stored in `current` state
4. **User clicks equals (=)** → performs calculation using previous, current, and operator
5. **Result is displayed** → shown in `current` and previous/operator states are cleared

### Operator Display Format

When an operator is pressed, the display shows the format "number operator" (e.g., "3 +" or "25 *") for clear visual feedback.

### Components

- **Calculator.jsx**: Handles state management (previous, current, operator), button layout, and calculation logic with division by zero handling
- **Display.jsx**: Shows the current operand, previous operand, and operator
- **Button.jsx**: Reusable button component that passes label to onClick handler

## Future Improvements

- Implement the Clear Entry (CE) button functionality
- Add keyboard input support
- Improve error handling for invalid expressions
- Add calculation history
- Enhance UI/UX design

