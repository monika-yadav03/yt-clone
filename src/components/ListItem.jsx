import List from "./List";

const ListItem = ({videos,setSelectedVideo}) => {
 if (videos.length ===0) return <h1>Loading</h1>;
  // console.log(videos)
  

  return (
    <div>
      {videos.map((item,idx) => (
        <List key={item} video = {item} setSelectedVideo ={setSelectedVideo} />
      ))}
    </div>
  );
};
export default ListItem;
