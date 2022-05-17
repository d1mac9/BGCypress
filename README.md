How to set up Cypress for Test Automation locally

1. Download and Install NodeJS 
2. Download and install Visual Studio Code or use IDE
3. Create the project folder and download the project files from GitLab
4. Open Visual Studio Code menu -> Open folder with the project
5. Terminal -> New Terminal -> Run command: npm install
6. Install Cypress -> In the terminal run command: npm install cypress --save-dev
7. Run node "./node_modules/cypress/bin/cypress open"  or "npx cypress open" to open Cypress Window
8. Run all specs or each spec separatly by clicking on the name of the test
9. To run tests from the terminal run command: 
npx run --spec "cypress/integration/limits/\*\*\" (to run all tests in the folder on staging)
10. To generate report (if tests failed) run commands
npm run combine-reports
npm run generate-report
npm run posttest
After that go to cypress → reports → mochareports and right button click on file report.html and choose 'Copy Path'
Paste text in browser's URL
satisfaction