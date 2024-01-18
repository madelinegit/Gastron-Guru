import ChefPhoto from './ChefPhoto';
import "./RelativeSquareBlocks.scss"

function RelativeSquareBlocks() {
  return (
    <div className ="parent-container">
      <div className="squareblock-container">
        <h1>OUR CHEFS</h1>
        <p>Sed ut persipiciatis unde omnis iste natus error sit voluptatem accusantium voluptatem a doloremque</p>
        <p>Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do velit esse cilum</p>
      </div>
      <div className="squareblock-chef">
        <ChefPhoto/>
      </div>
    </div>
  );
}
export default RelativeSquareBlocks;
