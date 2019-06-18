import React from "react";
import * as S from "./Stories.style";
import hyphenate from "../../utils/hyphenate.js";

const Stories = ({ data }) => {
  return (
    <S.Main>
      <S.Header>
        <h2>Success Stories</h2>
        <p>
          Click on the comic books below to read about the everyday heroes doing
          their bit to promote clean air in their communities.
        </p>
      </S.Header>
      {/* Foreach row in the spreadsheet, generate new book, using the incrementer to make an id and give the x and y co-ordinate somehow*/}
      <S.Shelf>
        {data
          ? data.map((k, i) => (
              <a href={hyphenate(`/story/${k["Title"]}`).toLowerCase()}>
                <S.Comic key={k["Title"]} />
              </a>
            ))
          : null}
      </S.Shelf>
    </S.Main>
  );
};

export default Stories;
