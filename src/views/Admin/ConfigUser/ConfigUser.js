import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'

// ANCHOR - Components allow edit the content of the User
const ConfigUser = () => {
  const { register, handleSubmit, control } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test' // unique name for your Field Array
  })

  const handleChange = () => {
    append({ test: 'test' })
  }

  React.useEffect(() => {
    if (fields.length === 0) {
      append({ firstName: 'bill', lastName: 'luo' })
    }

    if (fields.length === 5) {
      remove(0)
    }
  }, [fields])

  return (
    <>
      <div className='container'>
        <form action='/action_page.php'>
          <div>
            <div className='form-group'>
              <label htmlFor='email'>Email address:</label>
              <input type='email' className='form-control' id='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd'>Password:</label>
              <input type='password' className='form-control' id='pwd' />
            </div>
            <div className='checkbox'>
              <label>
                <input type='checkbox' /> Remember me
              </label>
            </div>
            <button type='submit' className='btn btn-default' onClick={handleChange}>
              Submit
            </button>
          </div>
        </form>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id}>
                <input {...register(`test.${index}.firstName`)} />
                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                />

                <button type='button' onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button type='button' onClick={() => append({ firstName: 'bill', lastName: 'luo' })}>
            append
          </button>
          <input type='submit' />
        </form>
      </div>
    </>
  )
}

export { ConfigUser }
