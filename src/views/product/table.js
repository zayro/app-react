import MaterialTable from 'material-table'
import React, { useEffect } from 'react'
// import CircularProgress from "@material-ui/core/CircularProgress"
// import LinearProgress from "@material-ui/core/LinearProgress"
import { useMutation, useQueryClient } from 'react-query'
// Api Users
import { deleteUsers, postUsers, putUsers, getUserQuery } from '../../api/Users'
import Loading from '../../components/loading'
// Dialog
import FormDialogProduct from './formDialog'

function BasicSearch () {
  const query = getUserQuery()

  const queryClient = useQueryClient()

  const [open, setOpen] = React.useState(false)

  const [form, setForm] = React.useState('')

  const [datos, setDatos] = React.useState({
    id: '',
    nombre: ''
  })

  const insetrMutation = useMutation(
    (data) => {
      return postUsers(data)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
      onError: () => {
        console.error('Error al enviar: postUsers ')
      }
    }
  )

  const handleClickInsert = (data) => {
    insetrMutation.mutate(data)
  }

  const deleteMutation = useMutation(
    (data) => {
      return deleteUsers(data)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
      onError: () => {
        console.error('Error al enviar: postUsers ')
      }
    }
  )

  const handleClickDelete = (table, where) => {
    deleteMutation.mutate({ table, where })
  }

  const EditMutation = useMutation(
    (data) => {
      return putUsers(data)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
      onError: () => {
        console.error('Error al enviar: postUsers ')
      }
    }
  )

  const handleClickUpdate = (data) => {
    EditMutation.mutate(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleClose()
    console.log('enviando datos handleSubmit...', datos)
    handleClickInsert(datos)
  }

  const handleSubmitEdit = (event) => {
    event.preventDefault()
    handleClose()
    console.log('enviando datos handleSubmitEdit ...', datos)
    handleClickUpdate(datos)
  }
  // capture data to form
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleClickOpen = (info, typeForm) => {
    // setDatos({ ...datos, nombre: "logo" })
    setDatos(info)
    setForm(typeForm)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    console.log('Render Aplication v2')
  }, [])

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <Loading openLoad />
  }

  if (query.isFetching) {
    return <Loading openLoad />
  }

  return (
    <div style={{ marginTop: 20 }}>
      <FormDialogProduct
        open={open}
        form={form}
        datos={datos}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleSubmitEdit={handleSubmitEdit}
        handleInputChange={handleInputChange}
      />

      <MaterialTable
        title='Basic Search Preview'
        columns={[
          { title: 'Name', field: 'id' },
          { title: 'Surname', field: 'nombre' }
        ]}
        data={query.data.data}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit',
            onClick: (event, rowData) => {
              console.log('You want to edit ' + rowData.nombre)
              handleClickOpen(
                {
                  ...datos,
                  id: rowData.id,
                  nombre: rowData.nombre
                },
                'update'
              )
            }
          },
          {
            icon: 'delete',
            tooltip: 'Delete',
            onClick: (event, rowData) => {
              console.log('You want to delete ' + rowData.nombre)
              handleClickDelete('prueba', { id: rowData.id })
            }
          },
          {
            // eslint-disable-next-line react/display-name
            icon: 'add',
            isFreeAction: true,
            onClick: (event, rowData) => {
              handleClickOpen({}, 'insert')
              console.log('You want to delete ' + rowData.nombre)
            }
          },
          {
            // eslint-disable-next-line react/display-name
            icon: 'update',
            isFreeAction: true,
            onClick: (event, rowData) => {
              query.refetch()
              console.log('You want to delete ' + rowData.nombre)
            }
          }
        ]}
        options={{
          exportButton: true,
          search: true,
          filtering: true,
          sorting: true
        }}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}',
            labelRowsSelect: 'Registos'
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected'
          },
          header: {
            actions: 'Eventos'
          },
          body: {
            emptyDataSourceMessage: 'No hay Registros',
            filterRow: {
              filterTooltip: 'Filtro'
            }
          }
        }}
      />
    </div>
  )
}

export default BasicSearch
