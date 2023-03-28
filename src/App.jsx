import Nav from "./components/Nav";
import Content from "./components/Content";
import Rightbar from "./components/Rightbar";
import SliderBar from "./components/SliderBar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}  md={3}> 
            <SliderBar/>
          </Grid>
          <Grid item xs={12} md={6}> 
            <Content />
          </Grid>
          <Grid item xs={12} md={3}> 
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;