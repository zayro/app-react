import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

import PropTypes from "prop-types"

FormDialogProduct.propTypes = {
  open: PropTypes.bool.isRequired,
  form: PropTypes.string.isRequired,
  datos: PropTypes.any.isRequired,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleSubmitEdit: PropTypes.func,
  handleInputChange: PropTypes.func,
}

export default function FormDialogProduct({
  open,
  form,
  datos,
  handleClose,
  handleSubmit,
  handleSubmitEdit,
  handleInputChange,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="nombre"
              label="Nombre"
              type="text"
              id="nombre"
              autoComplete="current-password"
              onChange={handleInputChange}
              defaultValue={datos.nombre}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={form === "insert" ? handleSubmit : handleSubmitEdit}
            color="primary"
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
