import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import MainVideo from "./components/MainVideo";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import youtube from "./api/youtube";
import { key } from "./api/key";

const App = () => {
  const [SelectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [finalSearch, setFinalSearch] = useState("javascript");


  useEffect(() => {
    async function getdata() {
      try {
        const res = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: key,
            q: finalSearch,
          },
        });
        
        setSelectedVideo(res.data.items[0]);
        setVideos(res.data.items)
        
      } catch (error) {}
    }
    getdata();
  }, [finalSearch]);


  
  return (
    <Container>
      <SearchBar setFinalSearch = {setFinalSearch}/>
      <Row>
        <Col sm={8}>
          <MainVideo video={SelectedVideo} />
        </Col>
        <Col sm={4}>
          <ListItem videos={videos} setSelectedVideo = {setSelectedVideo} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
