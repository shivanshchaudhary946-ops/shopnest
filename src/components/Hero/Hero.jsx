
import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Discover the Best Products</h1>
        <p>Shop the latest trends with the best prices and
          enjoy a seamless shopping experience.
        </p>
        <div className="hero-buttons">
          <button className="shop-now">Shop Now</button>
          <button className="explore">Browse Products</button>
        </div>
      </div>
        <div className="hero-right">
          <img src={heroImage} alt="Hero" />
        </div>
    </section>
  );
}
export default Hero;