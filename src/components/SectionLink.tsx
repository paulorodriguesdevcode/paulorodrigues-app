import { Link } from "react-router-dom";


interface ISectionLink {
  icon: string,
  name: string
  href: string
}

export function SectionLink({ icon, name, href }: ISectionLink) {
  return (
    <section className="network">
      <Link to={href} target="_blank">
        <p className="name">{name}</p>
        <img src={icon} alt={`Imagem da rede social de ${name}`} className="network-img" />
      </Link>
    </section>
  );
}


