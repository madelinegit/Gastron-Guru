import FeaturedCards from "./FeaturedExampleCards";
import "./Instructions.scss";

function Instructions() {
  return (
    <div className="instructions-container">
      <div className="instructions">
        <h1>Home page</h1>
        <div>
          <h3>
            This is Home page. There is nothing here at the moment but it is
            going to be awesome.
          </h3>
          <p>
            Please install Prettier for styling and spend 1 minute going through
            the simple folder structure.
          </p>
          <h3>Styling</h3>
          <p>
            There is some global styling under the /src/styles/ path. If you do
            not use SCSS as much look at the SCSS folder connected to the
            Instructions component and view the nesting.
          </p>
          <p>
            Currently we are using certain global SCSS variables. More
            specifically you can find them in the /src/styles/colors. Please use
            these variables when working with colors. For example for color
            #1E2434 in the design use
            <b>
              <i> color: $dark-blue </i>
            </b>
            and you will get the color below.
            <div className="gold-color"></div>
          </p>
          <div>
            <h3>Typescript</h3>
            <p>
              If this is the first time using TypeScript there are some sample
              implementations of TypeScript in the ExampleCard.tsx component.
            </p>
          </div>
          <p>
            <i>
              Please keep these instructions for now and insert the relevant
              components below, we are going to delete these instructions soon
            </i>
          </p>

          <p>
            <i>
              PS: These instructions could have been written in a comment, but
              they are here to ensure that they are read
            </i>
          </p>
        </div>
        <FeaturedCards />
      </div>
    </div>
  );
}

export default Instructions;
