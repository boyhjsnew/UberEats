

const getRestaurantFromYelp = async (city) => {
    const yelpUrl =
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=10`;
  
    const apiOption = {
      headers: {
          Authorization: `Bearer KeYIsBxQLw0gaVGyexn5AGsc-drWUwZIgFu6TOuD9CvTacZqJTZTHaDhOtzWNv_RL5lZGApV_rlc5ZehSwqaOf9XW73vZjkGjUXIDM_SS79a5Ls_GJtDaSpKn4IEZHYx`,
      },
    };
    return  fetch(yelpUrl, apiOption)
    .then((res) => res.json())
  };

  export default getRestaurantFromYelp