import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>ShopNest</h2>

          <p>
            Your one-stop destination for the latest products at
            the best prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopNest. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;