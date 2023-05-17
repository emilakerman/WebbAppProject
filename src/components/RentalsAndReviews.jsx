const RentalsAndReviews = (props) => {
    const randomKey = () => {
        return Math.random().toString(36).substring(2, 9);
    }
    return (
      <div>
        <h3 className="listTitles">{props.title}</h3>
        {props.list.map((movie) => (
          <div key={randomKey()} className="post">
            <h3>{movie.title}{props.ratingDivider}{movie.rating}{props.ratingOutOfFive}</h3>
          </div>
        ))}
      </div>
    );
  };
  export default RentalsAndReviews;