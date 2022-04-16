import React, { useEffect, useCallback } from 'react'

// import { useQueryClient } from 'react-query'
// Api Users
import { deleteUsers, postUsers, putUsers, getUserQuery } from '../../api/Users'
import Loading from '../../components/loading'
// Dialog
import FormDialogProduct from './form'

import $ from 'jquery'

import 'datatables.net'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5.min.js'
import 'datatables.net-buttons-bs5'
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css'
import 'datatables.net-fixedheader-bs5'
import 'datatables.net-colreorder-bs5'
import 'datatables.net-scroller-bs5'
import 'datatables.net-select-bs5'
import 'datatables.net-buttons/js/buttons.html5.min.js'
import 'datatables.net-buttons/js/buttons.print.min.js'
import 'datatables.net-buttons/js/buttons.colVis.min.js'
import 'datatables.net-buttons/js/buttons.flash.min.js'
import 'datatables.net-staterestore-bs5'

/*
const $ = require('jquery')
$.DataTable = require('datatables.net')
*/

function BasicSearch () {
  const query = getUserQuery()

  const [open, setOpen] = React.useState(false)

  const [form, setForm] = React.useState('')

  const [datos, setDatos] = React.useState({
    id: '',
    nombre: ''
  })

  const handleClickInsert = (data) => {
    postUsers(data)
      .then(() => {
        query.refetch()
      })
      .catch(() => {
        console.error('Error al enviar: postUsers ')
      })
  }

  const handleClickDelete = (table, where) => {
    deleteUsers({ table, where })
      .then(() => {
        query.refetch()
      })
      .catch(() => {
        console.error('Error al enviar: postUsers ')
      })
  }

  const handleClickUpdate = (data) => {
    putUsers(data)
      .then(() => {
        query.refetch()
      })
      .catch(() => {
        console.error('Error al enviar: postUsers ')
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleClose()
    console.log('enviando datos handleSubmit...', datos)
    handleClickInsert(datos)
  }

  const handleSubmitEdit = (json) => {
    // event.preventDefault()
    handleClose()
    console.log('enviando datos handleSubmitEdit ...', json)
    handleClickUpdate(json)
  }
  // capture data to form
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = useCallback((info, typeForm) => {
    // setDatos({ ...datos, nombre: "logo" })
    setDatos(info)
    setForm(typeForm)
    setOpen(true)
  }, [])

  useEffect(() => {
    console.log('Render Aplication v2', query.data?.data)

    if (query.data?.data) {
      $('#exampletable').DataTable({
        data: query.data.data,
        columns: [
          {
            visible: true,
            searchable: false,
            className: 'dt-center',
            // width: '80px',
            render: function (data, type, full) {
              return `
            <div class="text-center">
            <button class="btn btn-outline-primary btn-sm edit">
            <span class="material-icons material-icons-outlined">edit</span>
            </button>
            <button class="btn btn-outline-danger btn-sm delete">
            <span class="material-icons material-icons-outlined">delete</span>
            </button>
            </div>
            `
            }
          },
          { title: 'id', data: 'id' },
          { title: 'nombre', data: 'nombre' },
          { title: 'create_time', data: 'create_time' },
          { title: 'update_time', data: 'update_time' }
        ],
        destroy: true,
        responsive: true,
        stateSave: true,
        order: [[1, 'desc']],
        pagingType: 'full_numbers',
        paging: true,
        info: true,
        ordering: true,
        processing: false,
        searching: true,
        colReorder: true,
        fixedHeader: true,
        scrollY: 500,
        dom:
          "<'row'<'col-sm-6'B><'col-sm-6'f>>" +
          "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-4'i><'col-sm-4 text-center'l><'col-sm-4'p>>",
        // dom: 'Bfrtilp',
        buttons: [
          {
            extend: 'copy',
            titleAttr: 'Copiar',
            className: 'btn '
          },
          {
            extend: 'excel',
            className: 'btn '
          },
          {
            extend: 'print',
            className: 'btn '
          },
          {
            extend: 'csv',
            className: 'btn '
          },
          {
            extend: 'pdf',
            className: 'btn '
          },
          {
            extend: 'pdfHtml5',
            messageTop: 'PDF created by PDFMake with Buttons for DataTables.'
          },
          {
            text: '<a><i  class="fa fa-print"></i><a/> Documento',
            className: 'btn ',
            action: function (dt) {
              console.log('* ~ file: table.js ~ line 684 ~ dt', dt)
            }
          }
        ],
        rowCallback: (row, data, index) => {
          // console.log('* ~ file: table.js ~ line 210 ~ data', data)
          // console.log('* ~ file: table.js ~ line 721 ~ row', row)
          // Unbind first in order to avoid any duplicate handler
          // $('td', row).unbind('click');
          $('button.edit', row).on('click', () =>
            handleClickOpen(
              {
                id: data.id,
                nombre: data.nombre
              },
              'update'
            )
          )
          $('button.delete', row).on('click', () => handleClickDelete('prueba', { id: data.id }))

          return row
        }
      })
    }
  }, [query.data])

  // query.data.data

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <Loading openLoad />
  }

  return (
    <div className='container fluid' style={{ marginTop: 20 }}>
      <FormDialogProduct
        open={open}
        form={form}
        datos={datos}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleSubmitEdit={handleSubmitEdit}
        handleInputChange={handleInputChange}
      />

      <table id='exampletable' className='table table-striped table-bordered  ' />
    </div>
  )
}

export default BasicSearch
