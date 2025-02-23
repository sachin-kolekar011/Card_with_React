import './ProductImg.css' ;

function ProductImg({img})
{
    return (
        <div className="imagediv">
            <img className="ImageSize" src={img} ></img>
        </div>
    )
}

export default ProductImg 