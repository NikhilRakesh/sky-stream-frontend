import './input.css'


const InputField = ({value,handleFunction}) => {
 

  return (
    <div className="form__group field ">
  <input type="input" className="form__field" placeholder="Name" required="" onChange={handleFunction}/>
  <label htmlFor="name" className="form__label">
     {value}
  </label>
</div>

  );
};

export default InputField;
