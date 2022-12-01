import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import ColorSchemesExample from "../src/components/Navbar";
import { Rating } from "../src/components/Rating";
// import Review from './components/Review'
import Reviwall from "../src/components/Reviwall";
// import { eventNames } from "../../backend/models/User";

const CLIENT_ID = "187793585c46431fbdaa2d711ed725fc";
const CLIENT_SECRET = "5285ea35a07743ff8c6203c33b824921";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

function Home() {
    const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search Function

  async function search() {
    console.log("searching for " + searchInput);

    //Get request wiith Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log(artistID);
    //get request with artist id to grab all albums
    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums" +
      "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  // console.log(albums);
  // const [isOpen, setIsOpen] = useState(false)
  const [rating , setrating] = useState(0)

  const [review, setReview] = useState("");

  const handleReview = (event) => {
    setReview(event.target.value);
  }

  async function sendReview(album_name){
    try{
      const user_name="anidude";
      await axios.post("/review",{
        user_name,
        album_name,
        review,
        rating
   })
  }
  catch(err){
      console.log("not posted")
    }
  }
  return (
    <div className="App">
      <Container>
        <ColorSchemesExample />
      </Container>
      <Container>
        <InputGroup className="mb-4" size="lg">
          <FormControl
            placeholder="Search Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <h1>Search for your <i>Fav Artists.</i></h1><br /><h2>View their albums.</h2><br /><h2>Read others <i>Reviews and Ratings</i>.</h2><br /><h3>You can Read and Rate them too!</h3>
      <Container>
        <Row className="mx-3 row row-cols-3">
          {albums.map((album, i) => {
            return (
              <div key={i}>
                <Card>
                  <Card.Img src={album.images[0].url} />
                  <Card.Link href={album.external_urls.spotify} target="_blank">Listen</Card.Link>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Rating />
                    <form>
                      <label htmlFor="exampleFormControlTextarea1">
                        Write your review
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        onChange={handleReview}
                      ></textarea>
                    </form>
                    <br></br>

                    <Reviwall />
                    {/* <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                      <button onClick={() => setIsOpen(true)}>Read Reviews</button>

                      <Reviwall open={isOpen} onClose={() => setIsOpen(false)}>
                        Close
                      </Reviwall>
                    </div> */}
                    <button className="button" onClick={()=>sendReview(album.name)}>Save</button>
                  </Card.Body>
                </Card>

              </div>
            );
          })}

          {/* <Review/>  */}
          {/* <Reviwall/> */}
        </Row>
      </Container>
    </div>

  );
}

export default Home;