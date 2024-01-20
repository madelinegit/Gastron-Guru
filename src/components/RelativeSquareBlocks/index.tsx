import "./RelativeSquareBlocks.scss";

function RelativeSquareBlocks() {
  return (
    <div className="parent">
      <div className="chef">
        <img src="/src/assets/images/chef.png" className="" alt="Chef photo" />
      </div>
      <div className="gold-container">
        <div className="text-container">
          <h2>OUR CHEFS</h2>
          <br />
          <p>
            Sed ut persipiciatis unde omnis iste natus error sit voluptatem
            accusantium voluptatem a doloremque
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure do velit esse cilum
          </p>
        </div>
      </div>
      <div className="blue-container"></div>
    </div>
  );
}

export default RelativeSquareBlocks;
