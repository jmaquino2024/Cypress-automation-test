# Cypress Automation Test

## Project Overview
This project is a Cypress automation suite designed for testing the Wingz application. It includes test cases for login, profile updates, and navigation validations.

## Setup Instructions
### Prerequisites
- Install [Node.js](https://nodejs.org/) (Ensure you have Node.js 16 or later)
- Install [Git](https://git-scm.com/)
- Install [Cypress](https://www.cypress.io/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/jmaquino2024/Cypress-automation-test.git
   ```
2. Navigate into the project directory:
   ```sh
   cd Cypress-automation-test
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests
### Run Cypress Test Runner
```sh
npx cypress open
```
This will open the Cypress Test Runner, allowing you to execute test cases interactively.

### Run Tests in Headless Mode
```sh
npx cypress run
```
This will execute all test cases in a headless browser.

## Test Cases
- **Login Test**: Validates successful login with email and password.
- **Profile Update Test**: Ensures users can update first name, last name, location, and bio.
- **Navigation Test**: Validates navigation to different sections of the application.

## Best Practices
- Assertions are included to validate each step.
- Code follows Cypress best practices.
- Passwords are hidden from Cypress logs.
- Randomized values are used for profile updates to verify changes.

## Repository Structure
```
Cypress-Automation/
│-- cypress/
│   ├── integration/   # Test cases
│   ├── support/       # Custom commands
│-- cypress.json       # Cypress configuration
│-- package.json       # Dependencies and scripts
│-- README.md          # Project documentation
```
