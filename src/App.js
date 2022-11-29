
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  function sendData() {
    fetch("http://localhost:4000/orders", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      } 
    })
  }

  function inputChange(e) {
    const newFormData = {...formData}
    newFormData[e.target.name] = e.target.value
    setFormData(newFormData);
  }

  return (
    <div className="App">
      <form className='form'>
        <input type="text" name="userId" placeholder="userId" onChange={inputChange} value={formData.userId}/>
        <input type="text" name="recordId" placeholder="recordId" min="4" required onChange={inputChange} value={formData.recordId}/>
        <input type="text" name="quantity" placeholder="quantity" onChange={inputChange} value={formData.quantity}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
