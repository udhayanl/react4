import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "./ShopPage.css";

function ShopPage() {
  return (
    <div className="shop-page">
      <Banner text="Simple Tech Shop" />
      <main className="products-grid">
        <ProductCard name="Laptop" price="$999" />
        <ProductCard name="Headphones" price="$149" />
        <ProductCard name="Keyboard" price="$79" />
        <ProductCard name="Mouse" price="$39" />
      </main>
    </div>
  );
}

export default ShopPage;
