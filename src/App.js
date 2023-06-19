import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxheight;
  if(window.innerHeight <= 800){
    maxheight = window.innerHeight
  }



  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data());
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxheight: maxheight + "px" }}>
      <div className="app-videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes={1512}
          messages={561}
          shares={45}
          name='Paulo'
          description='Brecker o goleiro'
          music='Música épica'
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        /> */}
      </div>
    </div>
  );
}

export default App;
