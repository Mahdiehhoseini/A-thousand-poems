import React from 'react'
import Fals from './Fal'
import Ashaars from './Ashaar'
import '../Home.css'
import { Link  } from "react-router-dom";

function home() {
    
    
   
   
    return (
        
        <div className='Home'>
            <ul className='Header'>
                <li className='logo'></li>
                <li><Link to="/fal"  className='FalHafez'>فال حافظ</Link></li>
                <li><Link to="/ashaar"   className='Gangine'>گنجینه اشعار</Link></li>
                <li  className='AboutUs'>درباره ما</li>
                
            </ul>
            <div className='card'>
                
                <p  className='img-card'></p>
                <p className='text-card'>تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با شعر و ادبیات در هم پیچیده و ایران،مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته،اما شاهنامه وزین و پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و عشق بازی اش با حق،غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ،اندیشه ژرف و عرفان ناب عطار نیشابوریهمه و همه همچون مرهمی بر زخم های کوچک و بزرگش تسکین داده اند</p>
                   <Link to='/ashaar'>
                   <a  className='btn-ganjine-ashar'>گنجینه اشعار</a>
                   </Link>
                    <Link to="/fal">
                        <a className='btn-fal-hafez'>فال حافظ</a>
                    </Link>
                        
            </div>
        </div>
    )
    
}

export default home
