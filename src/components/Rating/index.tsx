import './Rating.scss';

const Rating = () => {
  return (
    <>
      <section>
        <h2>Customer reviews</h2>
        <h3>{/* STARS */} 4.3 out of 5</h3>
        <p>432 global ratings</p>

        {/* RATINGS */}

        <p>How customer reviews and ratings work</p>
      </section>

      <section>
        <h2>Review this chef</h2>
        <p>Share your thoughts with other customers</p>
        <button>Write a customer review</button>
      </section>

      <main>
        <h2>Customers say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div>
          <h2>Reviews with images</h2>
          <p>See all photos</p>
          {/* INSERT IMAGE CAROUSEL */}
        </div>

        {/* INSERT DROPDOWN HERE */}
        <h2>Top reviews from the United States</h2>
        <img /> <p>E. Jones</p>
        {/* INSERT STAR RATING */} <p>Highly recommend</p>
        <p>Reviewed in the United States on October 26, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
        </p>
        
        <img /> <p>E. Jones</p>
        {/* INSERT STAR RATING */} <p>Highly recommend</p>
        <p>Reviewed in the United States on October 26, 2023</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.
        </p>
      </main>
    </>
  )
}

export default Rating;