import './ShopsWrapper.css';
import ShopList from "../ShopList/ShopList";

function ShopsWrapper() {
    return (
        <div className="shops-wrapper">
            <h1 className="shops-section-title">Find Us</h1>            
            <ShopList/>
        </div>
    )
}

export default ShopsWrapper;