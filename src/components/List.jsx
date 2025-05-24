import ListItem from "./ListItem";
import { Container, Row, Col, Image } from "react-bootstrap";

const List = ({ video, setSelectedVideo }) => {
  console.log(video);

  return (
    <Container className="mb-3" onClick={() => setSelectedVideo(video)}>
      <Row>
        <Col sm={9}>
          <Image
            src={video?.snippet?.thumbnails?.high?.url}
            rounded
            width={100}
          />
        </Col>
        <Col sm={3}>
          <h1>{video?.snippet?.channelTitle}</h1>
          <p>{video?.snippet?.description}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default List;
