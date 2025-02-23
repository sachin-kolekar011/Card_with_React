import './Price.css';

function Price({ price }) {
  return (
    <div className="pricediv">
      <span>  
        <del className="priceColumn originalPrice">
          {price}
        </del>
      </span>
      <p className="priceColumn discountedPrice">
      &#8377; {price - price * 0.2}
      </p>
    </div>
  );
}

export default Price;
