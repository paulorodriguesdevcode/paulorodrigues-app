import { Link } from "react-router-dom";


interface ISectionLink {
  icon: string,
  textContent: string,
  href: string,
  target?: React.HTMLAttributeAnchorTarget,
}

export function SectionLink({ icon, textContent, href, target="_blank" }: ISectionLink) {
  return (
    <section className="network">
      <Link to={href} target={target}  >
        <p className="name">{textContent}</p>
        <img src={icon} alt={`Imagem da rede social de ${textContent}`} className="network-img" />
      </Link>
    </section>
  );
}


