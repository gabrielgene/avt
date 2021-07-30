# AvantStay FrontEnd Implementation Test

The goal of this test is to check how you'd handle day-to-day tasks at AvantStay. 

It should be implemented using React and you can use `create-react-app` to start it.

## Running tests
```bash
yarn install
yarn start
```
In another tab run
```bash
yarn cypress:open
```
Open `homepage.spec.js`


## What's gonna be taken into consideration?

- Attention to given specs
- Following the given design as close as possible to "pixel perfect"
- Project organization
- Handling responsiveness properly (we don't expect it to work on mobile, but should work on tablet)
- Code quality:
  - cleanliness
  - readability
  - maintainability
- Non-overengineered architecture

## Alright, here's the task

We've created a simplified version of our search and home details screens. 

You can check the design here: https://www.figma.com/file/1hxetzsmi8UU1s1U4Suopf/AvantStay-Front-end-Implementation-Test

You'll notice some comments in red providing some additional information about the design, these are to explain the different states certain components can be in.

### Search screen

- Route should be `/homes` ("any region") or `/regions/:regionName` (selected region)
  - Search fields should reflect on query-string params
  - We should be able to share the URL to get the same results
- Before showing first results, show placeholders for cards
- User should be able to search homes using the existing filters/config:
  - **Where**: all or a specific region
  - **When**: start date & end date
  - **Who**: number of guests, from 1 to 30
  - **Order**: relevance, lowest price first, highest price first
- Load 10 homes at a time and load more (if there are more to load) when the user scrolls to the end of the list (infinite scroll)
- When there's a period selected on the search bar, show the total price (+ avg price per night) on the home cards
- When there's a period selected, first load the search results and use a separate request to load simulated prices (slower query) after the results are shown
- When no dates are selected, show the price range for high and low seasons (prime and low seasons)on the home cards
- When no results are found, show the proper empty results screen
- Navigation bar should stay sticked to the top when scrolling and it doesn't need to be functional (except the **find homes** link)
- There's no need to use or implement a date/range picker component for the date fields (use some third party component or just regular text fields instead)
- You can add `width`, `height`, `quality` (1-100) and `webp` (boolean) params (query string) to the home photos URL to get them properly resized/adjusted

### API

Base url: https://fake-api.avantstay.dev/graphql

Because it's a fake API, please note:
- Availability and most of the exposed data is not real but purely simulated for dev purposes
- There's very little input validation, so make sure you're sending valid params (e.g. use `YYYY-MM-DD` format for date params)
- Pricing simulation is intentionally slower because of this test requirements
- To emulate empty search results, use booking periods with less than 3 or more than 15 nights

> Check the generated GraphQL documentation for more details.

### Bonus if you use

- Typescript (strict mode)
- Emotion or Styled-components for styling
- Mobx, Redux or Context API for state management

### Questions?
Send an email to coding-test@avantstay.com
