import "./styles.css";

function Input({name, type, placeholder, label }) {
  return (
    <div className="input_wrapper">
      <label className="input_label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input_field"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
