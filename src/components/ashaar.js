import React, { useState , useEffect} from 'react'
import { Swiper, SwiperSlide,Navigation, Pagination } from 'swiper/react';
import {Link} from 'react-router-dom';
import '../Ashaar.css'
import Shers from './Sher';



function Ashaar() {
	const apiUrl  = 'https://ganjgah.ir/api/ganjoor/poets';
	let ganjoorUrl = 'https://ganjoor.net/';
	let ganjoorApiUrl = 'https://api.ganjoor.net';
	const [ashar ,setashar]=useState([]);
		useEffect(()=>{
			fetch(apiUrl)
			.then((res)=>res.json())
			.then((data)=>{
				setashar(data);
				
			});
		},[]);
	
	// async function getAllPoets(url){
	// 	const response = await fetch(url);
	// 	var data = await response.json();
	// 	data.forEach(poetsList);
	// }getAllPoets(apiUrl);
	// function poetsList(item){
		
		
	// 	let imageUrl = item.imageUrl;
	// 	var id = item.id;
	// 	let name = item.name;
		
	
	// 	let poets = document.getElementById("poets");
	// 	let a = document.createElement("a");
	// 	a.setAttribute("id", "poetsItem");
	// 	a.setAttribute("class", "bg");
	// 	a.setAttribute("href", '/sher');
		
	// 	poets.append(a);

		
		
	
	// 	let img = document.createElement("img");
	// 	img.setAttribute("class", "img-ashaar");
	// 	img.src = ganjoorApiUrl + imageUrl;
	// 	a.append(img);

	
	// 	let p = document.createElement("p");
	// 	p.setAttribute("class", "name-ashaar");
	// 	p.innerText = name;
	// 	a.append(p);
	
		
		// }
		
		
		function Random(event, value) {
			const [sher,setsher]= useState([])
		// useEffect(()=>{
		// 	fetch("https://ganjgah.ir/api/ganjoor/cat/"+ value +"?poems=true")
		// 	.then((res)=>res.json())
		// 	.then((data)=>{
		// 		setsher(data);
		// 		console.console.log(sher);
		// 	});
		// },[]);
		// return(
		// 	<Shers key={sher.id} {...sher}/>
		// )
			fetch("https://ganjgah.ir/api/ganjoor/cat/"+ value +"?poems=true")
				.then(res => res.json())
				 .then(data => {
					 const id = data.poet.id
					 var poem = document.documentElement('#poem')
					 var des = document.documentElement('#description')
					 des.textContent = data.poet.description
				console.log(sher)
					fetch("https://ganjgah.ir/api/ganjoor/poem/random?poetId=" + id)
						 .then(res=> res.json())
						 .then(item => {
							 let title = document.documentElement('#head')
							 title.textContent = item.title;
						
							 let verses = item.htmlText;
							 poem.innerHTML = verses
					})
				})
		}
	
		
    return (
        <div className='Ashaar'>
			 {/* <Swiper 
			navigation={true}
			spaceBetween={70} 
			slidesPerView={5} 
			centeredSlides={true}
			onSliderChange={()=>console.log('slide change')}
			onSwiper={(swiper)=>console.console.log(swiper)}
			className="swiper">  */}
			
			{ashar.map((a)=>(
							// <SwiperSlide>
								 
								<div className='bg'>
									<Link to="/sher" onClick={(e) => Random(e, a.id)}>
									<img src={ganjoorApiUrl + a.imageUrl} className='img-ashaar'></img>
									<p className='name-ashaar'>{a.name}</p>
									</Link> 
								</div>
								
								 
							// </SwiperSlide>
						))}
						
					
			{/* </Swiper> */}
						
                           
         </div> 
        
        
            
       
        
    )
}

export default Ashaar

