import Contact from "./Contact";
import contactsArray from "../data";




export default function List() {
  return(
    <section className="contacts">
      {contactsArray.map((elem, i) => {
        return <Contact key={i} {...elem} />;
      })}
     </section>
  )
}
