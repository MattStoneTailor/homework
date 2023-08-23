import { HomeContentWrapper } from "./HomeContent.style";

const HomeContent = () => (
  <HomeContentWrapper>
    <h1>Hello,</h1>
    <sub>Thank you for reviewing my Technical assignment!</sub>

    <h2>This application was made by using...</h2>
      <ul>
          <li>React Hooks</li>
          <li>Typescript</li>
          <li>Styled-components</li>
      </ul>
    <h2>Key factors for the API fetcher</h2>
    <ul>
      <li>
        <strong>data/Tabs.json</strong> contains the definitions for the api calls and the app
        automatically renders the response of them
      </li>
      <li>The images are shown responsively. If there are not enough space, the columns will be reduced</li>
      <li>Every image is loaded separately and the app is showing a spinner icon until the given image is not fully downloaded</li>
      <li>The infinity loader removes every already loaded image from memory that is "far away" from the visible viewport</li>
    </ul>
    <h2>Alternatives</h2>
      <ul>
        <li>
          I've written most of the components and utils myself
          because I wanted to show my skills, but
          in a production-environment I would rather use an already-written
          UI kit (AntD, Bootstrap, Material....) that is widely used and
          reliable. The reason is that they are maintained by dedicated teams
          and/or the community, therefore they are always more up-to-date.
        </li>
        <li>
          As I previously mentioned, because of the same reason I would
          use a well-written infinity-loader component to handle the fetched data
        </li>
        <li>
          Using a state-handler like Redux or MobX to store data and share them
          between the components. Right now it wasn't necessary because the fetched
          data should be available only in the ApiTest page.
        </li>
      </ul>
    <h2>Place for improvements...</h2>
    <ul>
      <li>
        Loading the images in the appropriate sizes are essential!
        Right now I just fetching every image in 600px, but that's not a
        good solution, because if the user viewing the app via mobile, a
        smaller image would be enough and the performance would be better. <strong>The best solution would be</strong>: The server sends the src for both the large
        and small image in one api call and the FE shows the appropriate one based on
        the viewport/layout structure.
      </li>
      <li>
        The sourcecode is not consistent (types, naming conventions)
        and not fully accessible
      </li>
      <li>
        No unit and/or end2end tests. (I would use Jest and Cypress)
      </li>
      <li>
        I've added some Todo comment because I didn't have enough time
        to investigate the source of the issue
      </li>
      <li>
        Error handling
      </li>
    </ul>
  </HomeContentWrapper>
);

export default HomeContent;
