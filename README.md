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

**Note:**
After installing Node.js, if the `node` command is not recognized in your terminal, you may need to set the Node.js path manually:

- On Windows: Add the Node.js installation directory (e.g., `C:\Program Files\nodejs`) to your system's `PATH` environment variable.
- On macOS/Linux: Ensure the Node.js binary directory is included in your `PATH` (e.g., add `export PATH=$PATH:/usr/local/bin` to your shell profile).

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/priyamneel94/planit-assessment.git
   cd planit-assessment
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Install Playwright browsers (required if not already installed):
   ```sh
   npx playwright install
   ```

### Running Tests
To run all tests in headed mode (by default, tests will run on both Firefox and Chrome):
```sh
npx playwright test test.specs/test.spec.js --headed
```

To run tests only on Chrome:
```sh
npx playwright test test.specs/test.spec.js --headed --project=chromium
```

To run tests only on Firefox:
```sh
npx playwright test test.specs/test.spec.js --headed --project=firefox
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

## Continuous Integration with Jenkins

To run automated tests using Jenkins:

1. In Jenkins, create a new Pipeline job.
2. In the job configuration, go to the "Pipeline" section.
3. Under "Definition," select "Pipeline script from SCM."
4. For "SCM," choose "Git."
5. In the "Repository URL" field, enter: https://github.com/priyamneel94/planit-assessment.git
6. Set the "Script Path" to Jenkinsfile.
7. Save and run the job.

You can view build logs and results in Jenkins after each run.

## Author
- Priyam Mukhopadhyay

## Contact
For questions or support, please contact priyam.neel94@gmail.com
