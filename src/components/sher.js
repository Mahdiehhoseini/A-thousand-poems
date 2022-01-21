import React from 'react';
import {Link} from 'react-router-dom'
import '../Sher.css'

function Sher(){

// const ReloadSher='';
// const ReactDOMServer = require('react-dom/server');
// const HtmlToReactParser = require('html-to-react').Parser;
// 		  const htmlToReactParser = new HtmlToReactParser();
// const sher= ({title,htmlText,top6RelatedPoems})=>(
    // const apiUrl  = 'https://ganjgah.ir/api/ganjoor/poem/random';
    // let ganjoorUrl = 'https://ganjoor.net/';
    // let ganjoorApiUrl = 'https://api.ganjoor.net';
    // async function randomPoem(url){
    //     const response = await fetch(url);
    //     var data = await response.json();
    
    //     let htmlText = data.htmlText;
    //     let title = data.title;
    //     let top6RelatedPoems = data.top6RelatedPoems;

    //     fetch("https://ganjgah.ir/api/ganjoor/poem/random?poetId=" + data.id)
    //     let verses = data.verses

    //     top6RelatedPoems.forEach(readTopRelated);

    //     document.getElementById("poem").innerHTML = htmlText;
    //     document.getElementById("head").innerHTML = title;

    // }randomPoem(apiUrl);

    // function readTopRelated(item){
    //     let trFullTitle = item.fullTitle;
    //     let trFullUrl = item.fullUrl;
    //     let trHtmlExcerpt = item.htmlExcerpt;
    //     let trId = item.id;
    //     let trPoem = item.poem;
    //     let trPoemId = item.poemId;
    //     let trPoetId = item.poetId;
    //     let trPoetImageUrl = item.poetImageUrl;
    //     let trPoetMorePoemsLikeThisCount = item.poetMorePoemsLikeThisCount;
    //     let trPoetName = item.poetName;
    //     let trRelationOrder = item.relationOrder;

    //     let related = document.getElementById("related");
    //     let li = document.createElement("li");
    //     li.setAttribute("id", "relatedItem");
    //     related.append(li);

    //     let img = document.createElement("img");
    //     img.src = ganjoorApiUrl + trPoetImageUrl;
    //     img.setAttribute("class", "img-card-sher");
    //     li.append(img);
    // }
    return(
        <div className='Sher'>
            <div className='card-sher'>
                <div className='text-card-sher'>
                    <p className='title-card-sher' id='head'>
                        
                    </p>
                    <p className='sher-card-text' id='poem'>
                    
                    </p>
                </div>
                <img src='' id='imgpoet' />
                       <div id='related'> </div>
                

                <Link to='/sher' className='reload'></Link>
                <div className='text-sher'>
                    <p id='description'>

                    </p>
                </div>
            </div>
        </div>
    
)
                            }  
    

export default Sher
