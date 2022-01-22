import React, {useState} from "react";
import "./MainBody.scss";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import user1 from "../Images/ben.jpg";
import Popover from "@mui/material/Popover";
import { Avatar, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const MainBody = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const userClick= (e)=>{
    setAnchorEl(e.currentTarget);
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <div className="mainBody">
      {hastags.map((user)=>{
        return (<>
          <Card sx={{ maxWidth: 700 }} className="mainBody--card">
          <CardMedia
            component="img"
            height="300"
            image={process.env.PUBLIC_URL+ user.postImg}
            alt="green iguana"
          />
          <div
            className="d-flex mx-md-3 mt-md-3"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            onClick={userClick}
          >
            <Avatar src={user1} className="mr-2" />
            <Typography>
            <Button color="inherit">Tapas Adhikary</Button>
              <br />
              <small>jan 18</small>
            </Typography>
          </div>

          <div className="mainBody--userProfile">
            {/* Adding hover ever on user name */}
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
            >
              {/* adding user profile */}
              <Card sx={{ minWidth: 250 }}>
                <div className="p-3 bg-success"></div>
                <div className="px-1">
                  <div className="d-flex">
                    <Avatar
                      src={process.env.PUBLIC_URL+ user.img}
                      alt="Remy Sharp"
                      sx={{
                        width: 52,
                        height: 52,
                        mx: 1,
                        my: 2,
                        marginTop: "-20px",
                      }}
                    />
                    <h5>Tapas Adhikary</h5>
                  </div>
                  <CardActions>
                    <Button variant="contained" fullWidth>
                      Follow
                    </Button>{" "}
                  </CardActions>
                  <CardContent>
                    <Typography component="div" color="text.secondary">
                      Writer{bull}youtuber{bull}creator{bull}Mentor
                    </Typography>

                    <Typography variant="body2" sx={{ py: 1 }}>
                      <b>EMAIL</b>
                      <br />
                      <a href="#">hello@gmail.com</a>
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                      <b>WORK</b>
                      <br />
                      User Interface Architect and UI Manager at MicroFocus
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                      <b>LOCATION</b>
                      <br />
                      Bangalore
                    </Typography>
                    <Typography variant="body2" sx={{ pb: 1 }}>
                      <b>JOINED</b>
                      <br />
                      May 14, 2019
                    </Typography>
                  </CardContent>
                  {/* user profile ends */}
                </div>
              </Card>
            </Popover>
          </div>

          <CardContent className="pl-md-5">
            <Link to="/">
              <Typography className="mainBody--header">
                JavaScript object destructuring usages you must know
              </Typography>
            </Link>
            <CardActions>
              <button className="btn btn-sm mainBody--btn1">#javascript</button>
              <button className="btn btn-sm mainBody--btn2">#programing</button>
              <button className="btn btn-sm mainBody--btn3">#begginers</button>
              <button className="btn btn-sm mainBody--btn4">#codenewbie</button>
            </CardActions>
            <CardActions className="d-flex justify-content-between">
              <div>
                <button className="btn btn-sm">
                  <FavoriteBorderIcon className="icon" /> #codenewbie
                </button>
                <button className="btn btn-sm">
                  <ChatBubbleOutlineIcon className="icon" /> #codenewbie
                </button>
              </div>
              <div>
                <button className="btn btn-sm">9 min read</button>
                <button className="btn  mainBody--btn5">Save</button>
              </div>
            </CardActions>
          </CardContent>
        </Card>
        </>)
      })}
       
      </div>
    </>
  );
};

export default MainBody;

const hastags = [
  {
    postImg:"../Images/js.png",
    img: "../Image/ben.jpg",
    name: "Tapas Adhikary",
    date: "May 14",
    header: "Did we just build a Netflix clone with Appwrite?",
    hash1: "javascript",
    hash3: "opensource",
    hash4: "Webdev",
    hash5: "programing",
    comment: "14",
    readMin: "9 min",
    hobby:`Writer{bull}youtuber{bull}creator{bull}Mentor`,
    email:"tapas.adhikary@gmail.com",
    work:"User Interface Architect and UI Manager at MicroFocus",
    location:"Bangalore",
    joined:"May 14, 2019"
  },
  {
    img: "../Image/ben.jpg",
    name: "Tapas Adhikary",
    date: "May 14",
    header: "Did we just build a Netflix clone with Appwrite?",
    hash1: "javascript",
    hash3: "opensource",
    hash4: "Webdev",
    hash5: "programing",
    comment: "14",
    readMin: "9 min",
    hobby:`Writer{bull}youtuber{bull}creator{bull}Mentor`,
    email:"tapas.adhikary@gmail.com",
    work:"User Interface Architect and UI Manager at MicroFocus",
    location:"Bangalore",
    joined:"May 14, 2019"
  },
];



