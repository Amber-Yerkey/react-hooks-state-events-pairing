import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";
import VideoTitle from "./VideoTitle.js";
import VoteDisplay from "./VoteDisplay.js";
import ShowComments from "./ShowComments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay videoURL={video.embedUrl}/>
      <VideoTitle title={video.title} views={video.views} createdAt={video.createdAt}/>
      <VoteDisplay upvotes={video.upvotes} downvotes={video.downvotes}/>
      <ShowComments comments={video.comments}/>
    </div>
  );
}

export default App;
