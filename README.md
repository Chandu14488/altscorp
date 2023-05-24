#Cypress-automation

Pre-condition- Node.js should be installed.

Step 1: Clone the repo in local system using:

git clone https://gitlab.com/metacx/mcx-automation.git

Step 2: Open the terminal and move to project root folder 'mcx-automation' and make sure package.json file is there & then use below command to install all the dependencies

npm install

Step 4: Then from the root folder itself run all the tests using 'npx cypress run' command

Note: For running single test case use 'npx cypress run --spec 'cypress/integration/Smoke_Testcases/loginTest.js' command