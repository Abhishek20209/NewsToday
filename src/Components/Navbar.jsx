import React, { useState } from 'react'
import { changeTopic,setApiCall} from "../Redux/Slices/TrendingSlice";
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {

  const Topic=useSelector((state)=>(state.Trending.topic));

  const dispatch=useDispatch();

  let input="";

  function ChangeHandler(event){
      input=event.target.value;
  }

  function clickHandler(){
    if(input!="")
    {
      
      dispatch(changeTopic(input));
      
    }
  }


  return (
    // <div>
    //   <div>Navbar</div>

    //   <div>
    //       <label>
    //         Search
    //         <input
    //           name="input"
    //           type="text"
    //           placeholder='enter the topic'
    //           onChange={ChangeHandler}
    //         />
    //       </label>

    //       <button onClick={clickHandler}>Enter</button>
    //   </div>
      
    // </div>
    <div className=" bg-gray-50">
  {/* Navbar */}
  <div className="w-full bg-gray-800 shadow-md">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl text-white font-bold tracking-wide cursor-pointer">
        NewsToday
      </h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8 text-gray-300 text-lg">
          <li onClick={()=>(dispatch(changeTopic("World")))} className="hover:text-white cursor-pointer">World</li>
          <li onClick={()=>(dispatch(changeTopic("Politics")))} className="hover:text-white cursor-pointer">Politics</li>
          <li onClick={()=>(dispatch(changeTopic("Sports")))} className="hover:text-white cursor-pointer">Sports</li>
          <li onClick={()=>(dispatch(changeTopic("Entertainment")))} className="hover:text-white cursor-pointer">Entertainment</li>
        </ul>
      </nav>
    </div>
  </div>

  {/* Search Section */}
  <div className="flex justify-center py-10 bg-white shadow-inner">
    <div className="w-full max-w-2xl flex flex-col items-center">
      <label className="block text-gray-700 text-xl font-semibold mb-4">
        Search for News
      </label>
      <div className="flex w-full items-center space-x-2">
        <input
          name="input"
          type="text"
          placeholder="Enter a topic or keyword"
          onChange={ChangeHandler}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-600 text-gray-800"
        />
        <button
          onClick={clickHandler}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</div>

  
    
  )
}

export default Navbar;