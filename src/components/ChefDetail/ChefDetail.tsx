import { useState } from "react";
import { capitalizeWords } from "../../utils/helpers";
import "../Ribbon/Ribbon.scss";
import "./ChefDetail.scss";
import ChefCard from "../ChefCards";
import RatingAndLocation from "../RatingAndLocation";
import wood from "./wood.jpg";
import useChef from "../../utils/Api";

const ChefDetail = ({ activeCard }: { activeCard: number }) => {
  const chefData = useChef();
  const chef = chefData[activeCard];

  return (
    <main className="chef-detail">
      <section className="chef-detail-img">
        <img alt="Peter Winston" src={wood} />
      </section>
      <section className="chef-detail-miscal">
        <div>
          <p>yo</p>
          <p>
            {chef?.rating?.value}
            {chef?.rating &&
              chef?.rating?.number_of_ratings > 0 &&
              ` (${chef?.rating.number_of_ratings})`}
            {chef?.rating?.value &&
              chef?.rating?.number_of_ratings &&
              chef?.distance_from_centre &&
              " | "}
            {chef?.distance_from_centre !== undefined &&
              `${(
                Math.ceil(Number(chef?.distance_from_centre) * 100) / 100
              ).toFixed(1)} mi`}
          </p>
        </div>
        <div className="">
          <ul>
            {chef?.private &&
              chef?.private.map((item) => (
                <li key={item}>{capitalizeWords(item)}</li>
              ))}
          </ul>
        </div>
        <div className="buy-btn-container">
          <button className="button-primary">Buy now</button>
        </div>
      </section>
      <section className="chef-detail-ribbon">
        <p className="small-ribbon">{chef?.labels?.[0]}</p>
      </section>
      <section className="chef-detail-info">
        <p>{chef?.name}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          temporibus autem voluptas repellat quas. Tempora commodi nostrum
          laborum magni sit nesciunt animi voluptas. In eaque, repellendus
          consequuntur atque beatae at? Voluptas quod eius minima saepe quam
          aspernatur voluptatem beatae sit, maiores modi error esse libero quas
          ab molestiae. Harum voluptate omnis pariatur. Doloribus, praesentium?
          Reiciendis molestias ut vero deserunt inventore. Quos tenetur suscipit
          blanditiis animi et libero alias veritatis, quasi cumque quia dicta!
          Autem doloribus quo perferendis quas consequuntur vitae magni dolores
          reprehenderit porro, beatae recusandae tempore ad quisquam id.{" "}
        </p>
        <p>go m</p>
      </section>
    </main>
  );
};

export default ChefDetail;
