import React from "react";

export default function HomeNavHeader() {
  return (
    <>
      <button>zaloguj</button>
      <button>załóż konto</button>
      <ul>
        <li>
          <a href="start"></a>
        </li>
        <li>
          <a href="o co chodzi"></a>
        </li>
        <li>
          <a href="o nas"></a>
        </li>
        <li>
          <a href="fundacja i organizacje"></a>
        </li>
        <li>
          <a href="kontakt"></a>
        </li>
      </ul>
      <h1>
        Zannij pomagać!
        <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <button>oddaj rzeczy</button>
      <button>zorganizuj zbiórkę</button>
    </>
  );
}
