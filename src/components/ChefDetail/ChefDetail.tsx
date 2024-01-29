import { useState } from "react";
import { capitalizeWords } from "../../utils/helpers";
import "../Ribbon/Ribbon.scss";
import "./ChefDetail.scss";
import "../ChefCards/ChefCards.scss";
import ChefCard from "../ChefCards";
import RatingAndLocation from "../RatingAndLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useChef from "../../utils/Api";
import Ribbon from "../Ribbon";

const ChefDetail = ({ activeCard }: { activeCard: number }) => {
  const chefData = useChef();
  const chef = chefData[activeCard];
  const rating = chef?.rating;

  return (
    <main className="chef-detail">
      <section className="chef-detail-img">
        <img
          alt="Peter Winston"
          src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
      <section className="chef-detail-miscal">
        <p>
          <span className="fa-icon">
            <FontAwesomeIcon icon={faStar} />
          </span>
          {rating?.value}
          {rating &&
            rating?.number_of_ratings > 0 &&
            ` (${rating.number_of_ratings})`}
          {rating?.value &&
            rating?.number_of_ratings &&
            chef?.distance_from_centre &&
            " | "}
          {chef?.distance_from_centre !== undefined &&
            `${(
              Math.ceil(Number(chef?.distance_from_centre) * 100) / 100
            ).toFixed(1)} mi`}
        </p>
        <div className="tagz">
          <ul>
            {chef?.private &&
              chef?.private.map((item) => (
                <li key={item}>{capitalizeWords(item)}</li>
              ))}
          </ul>
        </div>
        <div className="chef-detail-buy-btn-container">
          <button className="chef-detail-buy-btn">Buy now</button>
        </div>
      </section>
      <section className="chef-detail-ribbon">
        <p className="small-ribbon">{chef?.labels?.[0]}</p>
      </section>
      <section className="chef-detail-info">
        <h3>{chef?.name}</h3>
        <p className="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          temporibus autem voluptas repellat quas. Tempora commodi nostrum
          laborum magni sit nesciunt animi voluptas. In eaque, repellendus
          consequuntur atque beatae at? Voluptas quod eius minima saepe quam
          aspernatur voluptatem beatae sit, maiores modi error esse libero quas
          ab molestiae. Harum voluptate omnis pariatur. Doloribus, praesentium?
          Reiciendis molestias ut vero deserunt inventore. Quos tenetur suscipit
          blanditiis animi et libero alias veritatis, quasi cumque quia dicta!
          Autem doloribus quo perferendis quas consequuntur vitae magni dolores
          reprehenderit porro, beatae recusandae tempore ad quisquam id.
        </p>
        <p>go m</p>
      </section>
    </main>
  );
};

export default ChefDetail;
