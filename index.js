window.onload = () => {
  header();
  main();
  forms();
  footer();
};

function header() {
  const navbar = [
    {
      nome: "home",
      link: "#home",
    },
    {
      nome: "Sobre nós",
      link: "#sobre",
    },
    {
      nome: "Experiencia",
      link: "#cards",
    },
    {
      nome: "Contato",
      link: "#contato",
    },
  ];
  const header = document.querySelector("header");
  const title = document.createElement("h2");
  const titleText = document.createTextNode("Bem Vindo");
  title.appendChild(titleText);
  header.appendChild(title);

  const ul = document.createElement("ul");
  //adicionar classe
  //ul.classList.add('')
  header.appendChild(ul);

  navbar.forEach((navbar) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    //adicionar classe
    //li.classList.add('')
    //a.classList.add('')
    a.href = navbar.link;
    const nome = document.createTextNode(navbar.nome);
    a.appendChild(nome);
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function main() {
  const cards = [
    {
      nome: "Victor Cecilio",
      hardskills:
        "Proficiência em inglês, Excel avançado, Operação de máquinas e sistemas, Domínio de Javascript, Domínio de CSS",
      softskills:
        "Comunicação, Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
    },
    {
      nome: "Pedro H. Sartorelli Ferreira",
      hardskills:
        "Proficiência em inglês, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
      softskills:
        "Comunicação, Flexibilidade, Motivação, Persuasão, Trabalho em equipe",
    },
    {
      nome: "Leandro Afonso S.S Júnior",
      hardskills:
        "Proficiência em inglês, Operação de sistemas, Domínio de Javascript, Domínio de CSS, Domínio de HTML",
      softskills:
        "Flexibilidade, Motivação, Paciência, Persuasão, Trabalho em equipe",
    },
  ];
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.classList.add("banner");
  section.setAttribute("id", "home");

  const banner = document.createElement("div");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  banner.classList.add("banner");
  section.appendChild(banner);
  main.appendChild(section);

  cards.forEach((cards) => {
    const div = document.createElement("div");
    div.classList.add('cards')
    const h3 = document.createElement("h3");
    const br = document.createElement("br");
    const br2 = document.createElement("br");
    const sSks = document.createElement("p");
    const hSks = document.createElement("p");
    const h3T = document.createTextNode(cards.nome);
    const sSkT = document.createTextNode("Softskills: " + cards.softskills);
    const hSkT = document.createTextNode("Hardskills: " + cards.hardskills);
    h3.appendChild(h3T);
    hSks.appendChild(hSkT);
    sSks.appendChild(sSkT);
    div.appendChild(h3);
    div.appendChild(br2);
    div.appendChild(hSks);
    div.appendChild(sSks);
    div.appendChild(br);
    cardContainer.appendChild(div);
  });
  main.appendChild(cardContainer);
}

function forms() {
  const forms = [
    {
      classe: "formGroup",
      for: "email",
      label: "mensagem",
      type: "email",
      id: "email",
      name: "Email",
      input: "input",
    },
    {
      classe: "formGroup",
      for: "mensagem",
      label: "mensagem",
      type: "mensagem",
      id: "mensagem",
      name: "Mensagem",
      input: "textarea",
    },
  ];
  const main = document.querySelector("main");
  const form = document.createElement("form");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const button = document.createElement("button");
  const h2T = document.createTextNode("Entre em Contato");
  const btT = document.createTextNode("Enviar");

  section.setAttribute("id", "contato");
  form.setAttribute("action", "/cadastro");
  form.setAttribute("method", "post");
  button.setAttribute("type", "submit");

  form.classList.add('bigform')

  h2.appendChild(h2T);
  form.appendChild(h2);

  forms.forEach((forms) => {
    const formgroup = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement(forms.input);

    const labelT = document.createTextNode(forms.name);
    input.classList.add('mensagens')

    formgroup.classList.add('form');
    label.setAttribute("for", forms.for);
    input.setAttribute("type", forms.type);
    input.setAttribute("id", forms.id);
    input.setAttribute("name", forms.name);

    label.appendChild(labelT);
    formgroup.appendChild(label);
    formgroup.appendChild(input);
    form.appendChild(formgroup);
  });

  button.appendChild(btT);
  form.appendChild(button);
  section.appendChild(form);
  main.appendChild(section);
}

function footer() {
  const footer = document.querySelector("footer");
  footer.classList.add('nomes')
  const sobre = [
    {
      Nome: "Victor Cecilio",
      links: [
        "https://github.com/victor12020",
        "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
        "https://www.instagram.com/vcecilioao?igsh=c3FtZmwzMnM0ajds",
      ],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
    {
      Nome: "Pedro Henrique",
      links: ["https://github.com/Pedro2007596", "", ""],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
    {
      Nome: "Leandro Afonso",
      links: [
        "https://github.com/TLean07",
        "https://www.instagram.com/ileandrojr07?igsh=aWFrbm9yems5d3oz",
        "https://wa.me/qr/UX6ZEKFKWHPMF1",
      ],
      sites: ["Github", "Instagram", "Whatsapp"],
      img: ["./img/github.png", "./img/instagram.jfif", "./img/whatsapp-640x640.png"],
    },
  ];
  sobre.forEach((sobre) => {
    const div = document.createElement("div");
    const divI = document.createElement("div");
    const nome = document.createElement("h2");
    const nomeT = document.createTextNode(sobre.Nome);
    nome.appendChild(nomeT);
    div.appendChild(nome);

    for (i = 0; i <= 2; i++) {
      const link = document.createElement("a");
      const img = document.createElement("img");
      img.classList.add('icon')
      link.href = sobre.links[i];
      img.src = sobre.img[i];
      img.alt = sobre.sites[i];
      link.appendChild(img);
      divI.appendChild(link);
    }
    div.appendChild(divI);
    footer.appendChild(div);
  });
}
