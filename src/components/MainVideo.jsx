import { Container } from "react-bootstrap";

const MainVideo = ({ video }) => {
  console.log(video);

  if (video === null) return <h1>Loading</h1>;

  const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Container className="mt-4">
      <iframe
        width="760"
        height="515"
        src={videosrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h2 className="mt-3">{video.snippet.channelTitle}</h2>
      <h5>{video.snippet.description}</h5>
    </Container>
  );
};

export default MainVideo;
