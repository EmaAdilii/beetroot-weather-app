
import './App.css';
import Search from './components/search_component/search'

function App() {
  const handleOnSearchChange =(searchData) =>{
    console.log(searchData);
  }
  return (
    <div className="container">
     <div className="container_box">
        <Search onSearchChange={handleOnSearchChange}/>
     </div>
    </div>
  );
}

export default App;
