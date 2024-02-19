import NarrowContainer from "../NarrowContainer";
import "./RelativeSquareBlocks.scss";

function RelativeSquareBlocks() {
  return (
    <div className="RSB">
      <div className="RSB-container-gold">
        <NarrowContainer>
          <div className="RSB-container-text">
            <div className="RSB-inner-container">
              <h2>OUR CHEFS</h2>
              <p>
                Sed ut persipiciatis unde omnis iste natus error sit voluptatem
                accusantium voluptatem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <img
              src="/src/assets/images/chef.png"
              className="RSB-img"
              alt="Chef photo"
            />
          </div>
        </NarrowContainer>
      </div>
      <div className="RSB-container-black" />
      <div className="RSB-container-blue" />
      <div className="RSB-container-small-blue" />
    </div>
  );
}

export default RelativeSquareBlocks;
