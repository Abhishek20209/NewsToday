import React, { useEffect } from "react";
import Post from "../Components/Post";
import { useDispatch, useSelector } from "react-redux";
import { add ,changeTopic,setApiCall} from "../Redux/Slices/TrendingSlice";
import Spinner from "../Components/Spinner";

const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.Trending.posts); // Select the correct slice
  const topic=useSelector((state)=> state.Trending.topic);
  const call=useSelector((state)=>(state.Trending.call));

  async function fetchTrending() {
    try {
      dispatch(setApiCall(true));
      dispatch(add([]));
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`
      );
      const data = await result.json();
      const tmp = data.articles;
      console.log("Fetched articles:", tmp);
      dispatch(add(tmp)); // Dispatch articles to Redux store
      dispatch(setApiCall(false));

    } catch (error) {
      setApiCall(false);
      console.error("Error fetching trending news:", error);
    }
  }

  useEffect(() => {
    fetchTrending();
  }, [topic]);

  return (
    // <div>
    //   <div className="mt-10">
    //     {
    //       apiCall?(
    //         <div>
    //             <Spinner/>
    //             <span>Loading.....</span>
    //         </div>
            

    //       ):
    //       (postData && postData.length > 0) ? (
    //       postData.map(
    //         (post) =>
    //           post.title !== "[Removed]" && (
    //             <Post key={post.title} post={post} />
    //           )
    //       )
    //     ) : (
    //       <p>DATA nOT Found</p> // Show a loading message or spinner
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  {
    call ? (
      <div className="flex flex-col items-center">
        <Spinner className="h-10 w-10 text-blue-500" />
        <span className="mt-2 text-gray-700 text-sm">Loading...</span>
      </div>
    ) : (postData && postData.length > 0) ? (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {postData.map(
          (post) =>
            post.title !== "[Removed]" && (
              <Post
                key={post.title}
                post={post}
                className="border border-gray-300 rounded-lg shadow-md p-4 bg-white"
              />
            )
        )}
      </div>
    ) : (
      <p className="text-center text-gray-500 text-lg font-semibold">
        DATA NOT Found
      </p>
    )
  }
</div>
  );
};

export default Home;
