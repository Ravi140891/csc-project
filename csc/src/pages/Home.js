import Carousel from "../component/Carousel";

const Home = () => {
  const handleSwiggy = () => {
    window.open(
      "https://www.swiggy.com/restaurants/chai-samosa-cafe-karma-road-aurangabad-aurangabad-bihar-522544",
      "_blank"
    );
  };

  const handleZomato = () => {
    window.open(
      "https://www.zomato.com/aurangabad-bihar/chai-samosa-cafe-2-aurangabad-locality-bihar/order",
      "_blank"
    );
  };

  return (
    <div className="home">
      <Carousel />
      <h1>Order now from our delivery partners.</h1>
      <div className="btn-wrapper">
        <button className="btn swiggy" onClick={handleSwiggy}>
          Swiggy
        </button>
        <button className="btn zomato" onClick={handleZomato}>
          Zomato
        </button>
      </div>
    </div>
  );
};

export default Home;
