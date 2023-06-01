import './ShopsList.css';
import ShopItem from "../ShopItem/ShopItem";

function ShopList() {

    const shops = [
        {
            title: "Parduotuve 1",
            phone: "+37045431321",
            email: "info@parduotuve.lt",
            address: "Vilniaus g. 20, Vilnius"
        },
        {
            title: "Parduotuve 2",
            phone: "+37045412247",
            email: "info@parduotuve.lt",
            address: "Kęstučio g. 20, Viduklė"
        },
        {
            title: "Parduotuve 3",
            phone: "+3704445568",
            email: "info@parduotuve.lt",
            address: "Vilniaus g. 20, Klaipėda"
        },
        {
            title: "Parduotuve 4",
            phone: "+3704545689",
            email: "info@parduotuve.lt",
            address: "Karaliaus g. 20, Kaunas"
        }
        ];

        return (
            <div className="shops-list">
                {shops.map((shop, index) => {
                    return (
                    <ShopItem
                    key={index}
                    title={shop.title}
                    phone={shop.phone}
                    email={shop.email}
                    address={shop.address}/>
                    )
                })}
            </div>
        )
    
}

export default ShopList;