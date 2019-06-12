import { createGlobalStyle } from "styled-components";
import city from "./content/city-day-edited.svg";
import comicStore from "./content/comic-book-store-edited.svg";

const background = ({ data }) => {
  let backStr = "";

  if (data === "city") {
    backStr = `url(${city})`;
  }

  if (data === "comic") {
    backStr = `url(${comicStore})`;
  }
  return backStr;
};

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

    html {
        background: #6e6662;
        background-image: ${background};

        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
    }

    body {
        margin: 0;
        height: 2000px;
    }

    h1, h2, h3, h4, h5, h6, text {
      font-family: 'Londrina Solid', cursive;
    }

`;

export default GlobalStyle;