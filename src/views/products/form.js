import React from 'react'
// Bootstrap
import { Button, Modal } from 'react-bootstrap'

// component
import { useForm } from 'react-hook-form'

// provider
import PropTypes from 'prop-types'

FormDialogProduct.propTypes = {
  open: PropTypes.bool.isRequired,
  form: PropTypes.string.isRequired,
  datos: PropTypes.any.isRequired,
  handleClose: PropTypes.func,
  handleSubmitEdit: PropTypes.func
}

function FormDialogProduct ({ open, form, datos, handleClose, handleSubmitEdit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({ defaultValues: datos })

  setValue('id', datos.id)
  setValue('nombre', datos.nombre)

  const onSubmit = (data) => {
    console.log('* ~ file: form.js ~ line 30 ~ data', datos)
    console.log('* ~ file: form.js ~ line 30 ~ data', data)

    handleSubmitEdit({ ...datos, ...data })
  }

  return (
    <div>
      <Modal show={open} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario {form}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              {...register('nombre', { required: true })}
              type='text'
              name='nombre'
              id='nombre'
              className='form-control'
              placeholder={errors.nombre?.type === 'required' ? 'Este campo es requerido *' : 'Digite Campo'}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit' color='primary'>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}

export default FormDialogProduct
