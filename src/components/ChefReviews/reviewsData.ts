interface ReviewsDataProps {
  username: string
  avatar: string
  starRating: number
  reviewTitle: string
  country: string
  date: string
  userReview: string
};

// HARDCODED MOCK DATA FOR NOW; MUST BE DYNAMICALLY RENDERED FROM DATABASE
const ReviewsData: ReviewsDataProps[] = [
  {
    username: 'E. Jones',
    avatar: 'https://placekitten.com/200/300',
    starRating: 5,
    reviewTitle: 'Highly Recommend',
    country: 'the United States',
    date: 'October 26, 2023',
    userReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.',

  },
  {
    username: 'Laura M.',
    avatar: 'https://placekitten.com/200/287',
    starRating: 5,
    reviewTitle: 'Wonderful food and service!',
    country: 'the United States',
    date: 'December 18, 2023',
    userReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Volutpat maecenas volutpat blandit aliquam. Justo nec ultrices dui sapien eget mi proin sed. Dictum non consectetur a erat nam at lectus urna. Facilisis magna etiam tempor orci eu lobortis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac.',

  },
];

export default ReviewsData;