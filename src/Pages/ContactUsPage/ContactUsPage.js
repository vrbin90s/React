import './ContactUs.css';
import GoogleMap from "../../Components/ShopsMap/GoogleMap";
import ShopsWrapper from "../../Components/ShopsWrapper/ShopsWrapper";


function ContactUs() {
  return (
    <div className="container">
        <div className="content">
            <ShopsWrapper/>
            <GoogleMap/>
        </div>
    </div>
  
  );
}

export default ContactUs;
