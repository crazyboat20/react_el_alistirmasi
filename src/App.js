import { useState } from "react";
import SearchInput from "./components/searchInput";

const App = () => {
  const[kizlar,setKizlar]=useState([])
  const[tumKizlar,setTumKizlar]=useState([])

  function kizlariGetir(){
    fetch("./Girls/girls.json").then(res=>res.json()).then(res=>{setKizlar(res.GirlImages); setTumKizlar(res.GirlImages)})
  }

  return <div>
  <button className="kizlari_getir_butonu" onClick={()=>kizlariGetir()}>Tüm kizları getir</button>
  
  <SearchInput setKizlar={setKizlar} kizlar={kizlar} tumKizlar={tumKizlar}/>

  <div className="kiz_kutulari_parent">
    {kizlar.map((kiz,index)=>(
      <div key={index}>
       <div className="aciqlama">{kiz.description}</div>
       <img src={kiz.image_url} alt={kiz.description} width="250" height="250"/>
     </div>
    ))}
  </div>

  </div>;
};

export default App;
