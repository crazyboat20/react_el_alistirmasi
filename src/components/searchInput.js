import React from "react";

const SearchInput = (props) => {

    function idTap(yazi){
      props.setKizlar(props.tumKizlar.filter(
        kiz=>kiz.description.toLowerCase().includes(yazi.toLowerCase())
      ))
    }
    
  return <div>
    <input className="arama_cubugu" onChange={e=>idTap(e.target.value)} placeholder="açıklamalarıyla ara"/>
  </div>;
};

export default React.memo(SearchInput);
