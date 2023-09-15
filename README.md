# React Dark Mode Switch Component

This project is a React component that enables dark mode functionality and utilizes local storage to save user preferences. It's designed to be easily integrated into your React applications.

## Overview

The React Dark Mode Switch Component simplifies the process of adding dark mode to your React projects. It provides a convenient way for users to toggle between light and dark themes while persisting their preferences.

## Features

- **Dark Mode Switch**: A toggle switch that allows users to switch between light and dark modes.
- **Local Storage**: Preferences for dark mode are stored in the browser's local storage, ensuring user settings persist across sessions.
- **Customizable**: Easily integrate the component into your React applications and customize its appearance to match your design.

## Getting Started

Follow these steps to set up and start using the React Dark Mode Switch Component in your project:

1. Clone this repository: `git clone https://github.com/thelore85/component-dark-mode.git`
2. Install the component package using npm or yarn: 

   ```bash
   npm install react-dark-mode-switch-component
   # or
   yarn add react-dark-mode-switch-component
  ```

## How to use the component

```jsx

// Import the component into your React application:
import DarkModeSwitch from 'react-dark-mode-switch-component';

 //Use the component in your JSX:
 <DarkModeSwitch />

// Customize the appearance and behavior by passing props to the component:
<DarkModeSwitch
  darkModeEnabled={isDarkModeEnabled}
  onChange={handleDarkModeChange}
  size={32}
  speed={0.25}
  className="custom-switch"
/>

  ```

## Contributing
Contributions from the community are welcome. If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature-name
Make your changes and commit them: git commit -m 'Add new feature'
Push your branch to your fork: git push origin feature-name
Open a Pull Request on GitHub and provide detailed information about your changes.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Author: Piqus
Website: piqus.it