import { Link } from "react-router-dom";

import ContactTitle from "./ContactTitle";
import ContactImage from "./ContactImage";

export default function Contact(props) {
  return (
    <Link to={`/${props.id}`}>
    
    <div className="contact">
      <ContactImage img={props.img} />
      <ContactTitle name={props.name} position={props.position} />
    </div>

    </Link>
  );
}
