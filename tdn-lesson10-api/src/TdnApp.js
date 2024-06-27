import logo from './logo.svg';
import './App.css';
import TdnListUser from './components/TdnListUsers';
import axios from '/.api'
function App() {
  // đọc dữ liệu từ api
  const tdnGetAllUser = async ()=>{
    const tdnResponse =await axios.get("tdnUsers");
  }

  
  return (
    <div className="container border my-3">
      <h1>Làm việc MockApi</h1>
      <hr/>
      <TdnListUser/>
    </div>
  );
}

export default App;
