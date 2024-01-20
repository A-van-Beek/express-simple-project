stappen:

- maak nieuwe directory: express-simple-project
- cd express-simple-project
- npm init
- akkoord op alle vragen (= default)
- npm install express
- nieuwe file: simple index.js
- voeg regel toe aan package.json (type: module)
- testrun: node index.js => moet krijgen: server is listening
  - echter: geen foutmelding, maar ook geen melding listening.
  - foutmelding op http://localhost:3000
- alvast verder gegaan met dev start-commando in package.json (sript)
- toevoegen nodemon (ziet wanneer we iets wijzigen en herstart automatisch de app): npm install
- npm i -D nodemon
- aanpassen dev-script naar "dev": "nodemon index.js"

Nakijken welke localhost ik nu wil gebruiken:

- in windows powershell checken of een nummer vrij is: Test-NetConnection -ComputerName localhost -Port 3333
- TcpTestSucceeded: false => port niet in gebruik
