# Jupiter Toys Automation Suite

This repository contains Playwright-based automated tests for the Jupiter Toys demo web application. The suite covers form validation, shopping cart operations, and notification verifications.

## Project Structure

```
config/           # Environment configuration files
 data/            # Test data and static data files
 page.objects/    # Page Object Model classes for each page
 test.specs/      # Playwright test specifications
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd planit-tech-assessment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests
To run all tests in headed mode:
```sh
npx playwright test test.specs/test.spec.js --headed
```
Or in headless mode:
```sh
npx playwright test test.specs/test.spec.js
```

## Folder Details
- **config/**: Contains environment configuration files.
- **data/**: Contains test data, static data, and notification messages.
- **page.objects/**: Page Object Model classes for Home, Shop, Contact, and Cart pages.
- **test.specs/**: Main test suite file with Playwright test cases.

## Author
- Priyam Mukhopadhyay

## Contact
For questions or support, please contact [priyam.neel94@gmail.com].
