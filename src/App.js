function App() {
  return (
    <div className="App">
      <header className="App-header">
        Bring your own poses!
      </header>

      <input 
        directory="" 
        webkitdirectory="" 
        type="file"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
