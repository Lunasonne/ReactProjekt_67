import "./styles.css";

function Button({name, type}) {
  return (
    <button type={type} className="button_component"> {name}</button>
  );
}

export default Button;