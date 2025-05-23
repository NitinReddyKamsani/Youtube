import React, { useEffect, useState } from 'react'
import { Api_key, Auto_suggest, Hamburger_icon, search_api, User_icon, Youtube_icon } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheSearch } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';

const Head = () => {
 
  const dispatch = useDispatch();

  const searchCache = useSelector((store)=>store.search);

  const [searchItems,setSearchItems] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggesions,setShowSuggestions] = useState(false);

  const handleHamburger = () =>{
    dispatch(toggleMenu())
  }

  useEffect(()=>{
   const timer = setTimeout(()=> {
    
    if(searchCache[searchItems]){
      setSuggestions(searchCache[searchItems]);
    }
    else {
      handleSearchSuggest()
    }

  },200) 
   return ()=> {
      clearInterval(timer);
   }
  },[searchItems]);

  const navigate = useNavigate();


  async function handleResult(suggestion) {
  setSearchItems(suggestion);
  setShowSuggestions(false);

  // Navigate to /search with query as URL param
  navigate(`/search?q=${encodeURIComponent(suggestion)}`);
  }


  async function handleSearchSuggest(){
    const data = await fetch(Auto_suggest + searchItems);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheSearch({
      [searchItems] : json[1]
    }))
  }

  return (

    
    <div className="grid grid-flow-col p-5 m-1 shadow-lg relative">
  {/* Left Section */}
  <div className='flex col-span-1 gap-3'>
    <img className='h-8 cursor-pointer' alt="hamburger-icon" src={Hamburger_icon} onClick={handleHamburger} />
    <a href='/'>
      <img className="h-8 cursor-pointer" alt="Youtube-icon" src={Youtube_icon}/>
    </a>
  </div>

  {/* Center Section */}
  <div className='relative'>
  {/* Search bar */}
  <div className='flex items-center'>
  <input
  className='w-[30rem] border border-gray-400 rounded-l-full h-10 bg-slate-100 px-4'
  type='text'
  placeholder='search'
  value={searchItems}
  onChange={(e) => setSearchItems(e.target.value)}
  onFocus={() => setShowSuggestions(true)}
  onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // <-- fix
/>
    <button className='h-10 border border-gray-400 bg-slate-300 px-4 rounded-r-full flex items-center justify-center'>
      <img className="h-5 w-5" src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png" alt="search" />
    </button>
  </div>

  {/* Slightly shifted dropdown */}
  { showSuggesions &&
  <ul className="absolute top-full left-0 translate-x-4 bg-white border border-gray-300 w-[29rem] mt-1 rounded shadow-md z-10">
    {
      suggestions.map(s=> <li key={s} onClick={()=>handleResult(s)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{s}</li>)
    } 
  </ul> }
</div>


  {/* Right Section */}
  <div className='col-span-1'>
    <img className='h-8' alt="user-logo" src={User_icon}/>
  </div>
</div>


  )
}

export default Head