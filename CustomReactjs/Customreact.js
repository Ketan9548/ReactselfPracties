function customRender(Element, maincontainer) {
  const domElement = document.createElement(Element.customelement);

  domElement.innerHTML = Element.children;
  
  // properties
  domElement.style.color = Element.props.Color;
  domElement.style.textDecoration = Element.props.text;

  // append element
  maincontainer.appendChild(domElement);
}

const Element = {
  customelement: "h1",
  props: {
    Color: "black",
    text: "bold",
  },
  children: "Hii name good one",
};

const maincontainer = document.querySelector("#root");

customRender(Element, maincontainer);
