# Angular Project: Data Binding Exercise with Retro Styling

## Description

This project is an Angular application demonstrating the effective use of data binding, a core feature of Angular. The goal is to create a simple user form with an input field and a button, applying a visual style inspired by the aesthetics of 8-bit games and interfaces from the 80s and 90s.

## Features Implemented

- **Data Binding**: We implemented two-way data binding using the `[(ngModel)]` directive, allowing changes in the input field to be automatically reflected in the component's `username` property.
- **Retro Styling**: To add a special touch, we included CSS styles that mimic the aesthetic of 8-bit games and interfaces, creating a retro visual appeal.
- **Components and CSS**: We utilized Angular's component concept to separate responsibilities, enhancing the maintainability and comprehensibility of the code.

## Challenges and Lessons Learned

- **Standalone Components**: We faced challenges in configuring the `UserFormComponent` as a standalone component, a recent feature in Angular. We learned how to properly import necessary dependencies and declare the component appropriately.
- **Custom CSS Styling**: Creating a retro theme was a creative exercise in design. We learned how to use custom fonts, CSS animations, and apply styles to create a specific aesthetic.
- **Resolving Compilation Errors**: Throughout the development, we encountered various compilation errors that taught us the importance of checking imports, component declarations, and Angular syntax.

## How to Run the Project

1. Clone the project repository.
2. Navigate to the project folder and run `npm install` to install dependencies.
3. Execute `ng serve` to start the development server.
4. Visit `http://localhost:4200/` in your browser to view the application.
