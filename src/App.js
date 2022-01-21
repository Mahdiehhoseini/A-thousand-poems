
import React, {useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Homes from './components/home';





function App() {
  	const apiUrlfal  = 'https://ganjgah.ir/api/ganjoor/hafez/faal';
  	const apiUrlsher  = 'https://ganjgah.ir/api/ganjoor/poem/random';
	const apiUrlashar= 'https://ganjgah.ir/api/ganjoor/poets';
		var ganjoorUrl = 'https://ganjoor.net/';
		var ganjoorApiUrl = 'https://api.ganjoor.net';

		const [sherss, setsherss]= useState([]);
		const [fals, setfal] = useState([]);

		

		

		useEffect(() => {
			fetch(apiUrlsher)
			.then((re)=>re.json())
			.then((datasher)=>{
				setsherss(datasher);
				
			})
		}, [])

	
	   
  return (
    <div className="App">
		<Homes/>
		
        
    </div>
    
    
  );
}

export default App;
