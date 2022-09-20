const TextArea = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <textarea 
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input'
          id="userString"
          maxlength="150" 
          rows="5"
          cols="50">

      </textarea>
    </div>
  )
}

export default TextArea