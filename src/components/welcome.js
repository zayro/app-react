import React, { useState, useEffect } from "react"
import { connect, useSelector, useDispatch } from "react-redux"

function Welcome() {
    //Redux
    //const menu$ = useSelector(state => state.menus)
    const menu$ = useSelector(store => store.menus)
    const author$ = useSelector(store => store.Author)
    console.log("Load Menu", menu$)

    //const [menu, setMenu] = useState({ data: menu$ })
    //setMenu(menu$)

    const [title, setTitle] = useState("X")
    setTitle("new")

    const dispatch = useDispatch()

    useEffect(() => {}, [])

    return (
        <div>
            <h1>Bienvenido</h1>
            <p>hola mundo</p>
            <p>{author$.name}</p>
            <p>{title}</p>
            <p>{JSON.stringify(menu$)}</p>
            <ul>
                {menu$.map(item => (
                    <li key={item.id}>
                        <a
                            className={`${
                                title === item.nombre ? "active" : ""
                            }`}
                            href={"#" + item.nombre}
                        >
                            {item.nombre}
                        </a>
                    </li>
                ))}
            </ul>

            <hr></hr>
            <button
                onClick={() =>
                    dispatch({
                        type: "ADD_MENU",
                        payload: { id: 3, nombre: "ok" },
                    })
                }
            >
                Increment counter
            </button>
        </div>
    )
}

export default connect()(Welcome)
