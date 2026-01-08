
function Formulario({label, name, value, aoMudar, type = "text"}){
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={aoMudar}
        />
    </div>
  )
}

export default Formulario