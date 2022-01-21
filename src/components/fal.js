import React from 'react'
import {useState, useEffect} from 'react';
import '../Fal.css';
import {Link} from 'react-router-dom';


	
	const apiUrl  = 'https://ganjgah.ir/api/ganjoor/hafez/faal';
	let ganjoorUrl = 'https://ganjoor.net/';
	let ganjoorApiUrl = 'https://api.ganjoor.net';
	const ReactDOMServer = require('react-dom/server');
	const HtmlToReactParser = require('html-to-react').Parser;
	 const htmlToReactParser = new HtmlToReactParser();

	const Fal=()=>{

		const [faal ,setfaal]=useState([]);
		useEffect(()=>{
			fetch(apiUrl)
			.then((res)=>res.json())
			.then((data)=>{
				setfaal(data);
				let mp3Url=data.recitations['0']["mp3Url"];
				let mp3=document.getElementById("recitations");
				mp3.innerHTML='<source src='+mp3Url+' type="audio/mpeg"></source>';
				let htmltext=document.getElementById("content");
				htmltext.innerHTML=data.htmlText;
			});
		},[]);
		
			return(
			
			<div className='fal'>
				<div className='card-fal'>
					<div className='card-text-sher'>
						<p className='Text-tittle' id="head">{faal.title}</p>
						<div className='Text' id='content'>{faal.htmlText}</div>
						<audio  className='Audio'  id="recitations" controls>
							
						</audio>
						
					</div>
					<div className='card-text-fal'>
						<h4>ای صاحب فال:</h4>
						<p className='Text-tafsir'>
						روز های غم وسختی به زودی تمام خواهد شد وخبرهای خوشی به شما میرسد. چنان ذوق زده خواهیشد که برای خودتان هم غیر قابل باور استمطمئن باش که دیگر ناراحتی های تودوام ندارد و به زودی روزگار خوشی فرا خواهد رسید
	
						</p>
					</div>
					<Link to="/" href="localhost:3000" className='card-btn-fal'>
						بازگشت به صفحه اصلی
					</Link>
				</div>
			</div>
		   
	);
}

export default Fal

