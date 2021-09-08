import { Container } from "@material-ui/core"
import React, { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"

function Welcome() {
  //Redux
  //const menu$ = useSelector(state => state.menus)
  const menu$ = useSelector(store => store.menu)

  console.log("Load Menu", menu$)

  //const [menu, setMenu] = useState({ data: menu$ })
  //setMenu(menu$)

  //const [title, setTitle] = useState("X")
  //setTitle("new")

  const dispatch = useDispatch()

  const eliminarMenu = idDelete => {
    dispatch({
      type: "DELETE_MENU",
      payload: { id: idDelete },
    })
  }

  useEffect(() => {}, [])

  return (
    <Container maxWidth="md">
      <div>
        <h1>Bienvenido</h1>
        <p>hola mundo</p>

        <p>{JSON.stringify(menu$)}</p>
        <ul>
          {menu$.map(item => (
            <li key={item.id}>
              <a href={"#" + item.nombre} onClick={() => eliminarMenu(item.id)}>
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
    </Container>
  )
}

export default connect()(Welcome)
