# Mate Szabo - Technical assignment

Live demo: http://mateszabo.epizy.com/homework/

## Technical details
Node version: v16.20.0\
npm version: 8.19.4\
\
Installation:
### `npm i`

## Available Scripts
Run it in development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm run build`

Builds the app for production to the `build` folder.
ct, check out the [React documentation](https://reactjs.org/).

## Notes
### Api fetcher
* The images are shown responsively.
If there are not enough space, the columns will be reduced
* Every image is loaded separately and the app is showing a spinner icon until the given image is not fully downloaded
* The infinity loader removes every already loaded image from memory that is "far away" from the visible viewport


### Alternatives
* I've written most of the components and utils myself because I wanted to show my skills, but in a production-environment
I would rather use an already-written UI kit (AntD, Bootstrap, Material....) that is widely used and
reliable. The reason is that they are maintained by dedicated teams
  and/or the community, therefore they are always more up-to-date.

* As I previously mentioned, because of the same reason I would
  use a well-written infinity-loader component to handle the fetched data

* Using a state-handler like Redux or MobX to store data and share them
  between the components. Right now it wasn't necessary because the fetched
  data should be available only in the ApiTest page.

### Improvements
* Loading the images in the appropriate sizes are essential!
Right now I just fetching every image in 600px, but that's not a
good solution because if the user viewing the app via mobile, a
smaller image would be enough and the performance would be better.\
I think the best solution would be: The server sends the src for both the large and small image in one api call and the FE shows the appropriate one based on the viewport/layout structure.
* The sourcecode is not consistent (types, naming conventions) and not fully accessible
* No unit and/or end2end tests. (I would use Jest and Cypress)
* I've added some Todo comment because I didn't have enough time to investigate the source of the issue