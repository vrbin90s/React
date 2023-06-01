import ShopItem from "./ShopItem";

function ShopsWrapper() {
    return (
        <div className="shops-wrapper">
            <h1 className="shops-section-title">Find Us</h1>            
            <div className="shops-list">
                <ShopItem
                    title="Parduotuve 1"
                    phone="+37045431321"
                    email="info@parduotuve.lt"
                    address="Vilniaus g. 20, Vilnius"
                />
                <ShopItem
                    title="Parduotuve 2"
                    phone="+37045412247"
                    email="info@parduotuve.lt"
                    address="Kęstučio g. 20, Viduklė"/>
                <ShopItem
                    title="Parduotuve 3"
                    phone="+3704445568"
                    email="info@parduotuve.lt"
                    address="Vilniaus g. 20, Klaipėda"/>
                <ShopItem
                    title="Parduotuve 4"
                    phone="+3704545689"
                    email="info@parduotuve.lt"
                    address="Karaliaus g. 20, Kaunas"/>
                </div>
        </div>
    )
}

export default ShopsWrapper;