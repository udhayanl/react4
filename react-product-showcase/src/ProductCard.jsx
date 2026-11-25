function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
