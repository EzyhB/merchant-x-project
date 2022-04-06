The Merchant-X project.

How to run the project:

- The project front-end has been deployed on (
  https://624d9ea77ff84700094603b2--mellow-sorbet-887160.netlify.app/
  )
- The project back-end has been deployed on(
  https://merchant-x-backend.vercel.app/api/
  )

- The project can also be run on Localhost by running the following commands inside of the quotation marks in the terminal on vsCode or any other code editor - (1) "npm i" (2) "npm start"

- There is also a docker file that can be used to run the application inside of a docker container.

Tech stack used for front-end:
React JS: framework requested by the task provider.
Jest/React testing library: To run some basic unit tests to ensure bug-free code.
Cypress: End to end test to go through the user flow and show the application working.
Typescript: For real-time code debugging and making the code easier to maintain.
Styled-Components: For creating my own mini UI library for super fast and easy expansion of the application.
Netlify: For continued integration and continuous deployment.
Git: Version control

Tech stack used for back-end:
Next JS: (Best framework IMO)
Typescript: For real-time code debugging and making the code easier to maintain.  
Heroku: To host my database because I planned on creating a script to store all pokemon data inside of my own database. To prevent complications of communicating with 3 different APIs for 1 result. Soon realised that I'm limited to 5 calls per hour.
