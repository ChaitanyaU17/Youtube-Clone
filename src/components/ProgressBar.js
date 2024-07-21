// import React,{useState, useEffect} from "react";
// import { useSelector } from "react-redux";

// const ProgressBar = () => {
//   const videoListState =  useSelector((state) => state.videosList)
//   const [progress, setProgress] = useState(5);

//   useEffect(()=> {
//     let timer;
//     clearTimeout(timer);
//     if(progress === 100 || !videoListState.isLoading) return;

//     timer = setTimeout(() => {
//       setProgress((prev) => prev + 1)
//     }, 50);

//     return () => {
//       clearTimeout(timer);
//     }
//   }, [progress, videoListState.isLoading ]);

//   if(!videoListState.isLoading) return <></>
//   return (
//     <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
//       <div className="h-1 bg-red-700" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };

// export default ProgressBar;
