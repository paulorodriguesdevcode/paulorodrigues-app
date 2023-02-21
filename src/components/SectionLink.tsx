import { Link } from "react-router-dom";


interface ISectionLink {
  icon: any,
  name: any
  href: any
} 

export function SectionLink({icon, name, href}:ISectionLink) {
  return (
    <section className="network">
      <Link to={href} target="_blank">
        <p className="name">{name}</p>
        <img src={icon} alt="" className="network-img"/>
      </Link>
    </section>
  );
}


