import './App.css';


function App() {

  return (
    <div className = 'App'>
        <h1> Hello World! </h1>

        <div className = 'form'>
          <label> Nombre : </label>
            <input 
              type = 'text' 
              name = 'nombreProducto' 
              placeholder = 'Red Bull 0.3L' 
              is required>
            </input>

          <button> Buscar </button>
        </div>

    </div>
  );
  
}

export default App;