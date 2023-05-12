## Cypress bug

Problem, when hiding and un-hiding forms, they don't seem to reappear properly when going back

### initial steps
- run `npm i`
- run `npm run dev`
- run `npx cypress open`

### Steps
- run the only test that is present

### Expected
- when cypress click back button, 1st orm should re-appear

### actual
- no form is visible

### notes

it works when you manually reproduce the test http://localhost:3000