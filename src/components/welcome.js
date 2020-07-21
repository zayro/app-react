import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

function Welcome() {
  //Redux
  const menu$ = useSelector((state) => state.menus);
  console.log("Load Menu", menu$);

  const [menu, setMenu] = useState({ data: menu$ });

  const [title, setTitle] = useState("X");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Bienvenido
      <ul className="sidenav">
        {menu.data.map((item) => (
          <li key={item.id}>
            <a
              className={`${title === item.nombre ? "active" : ""}`}
              href={"#" + item.nombre}
            >
              {item.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect()(Welcome);
