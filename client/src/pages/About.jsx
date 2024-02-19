import Page from "../components/Page";
import { Avatar, Stack, Container, Box } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const headContent = (
  <>
    <title>About</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Gallery() {
  return (
    <Page isProtected={true} headContent={headContent}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", color: "#fff" }}>
          <GroupsIcon sx={{ fontSize: "50px"}}/>
          <h1>Meet the Developers</h1>
        </Box>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
        </Stack>
        <Box
          component="section"
          sx={{
            bgcolor: "#408C93",
            color: "#fff",
            boxShadow: 5,
            borderRadius: 2,
            p: 4,
            m: 3,
            minWidth: 300,
          }}
        >
          <h2>
            <Avatar
              alt="Brandon Lambrecht"
              src="/pikachu.png"
              sx={{ width: 120, height: 120,  }}
            />
            Brandon Lambrecht 
            <Box sx={{display: "flex", justifyContent: "space-around", maxWidth: "125px"}}>
          <a href="https://github.com/brandonlambrecht"><GitHubIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href=""><EmailIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href="https://www.linkedin.com/in/brandon-lambrecht-0b3709a3/"><LinkedInIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>

            </Box>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolor saepe. Nulla culpa aliquid cumque impedit odio
            eaque dolore sint non quam deserunt eligendi dolor vel ea officia,
            delectus nam accusantium, laborum maiores ab quibusdam temporibus.
            Culpa est sapiente quasi quam corporis aspernatur suscipit
            voluptatem, ad, eos fugiat, necessitatibus dolorem.
          </p>
        </Box>
        <Box
          component="section"
          sx={{
            bgcolor: "#408C93",
            color: "#fff",
            boxShadow: 5,
            borderRadius: 2,
            p: 4,
            m: 3,
            minWidth: 300,
          }}
        >
          <h2>
            <Avatar
              alt="Bryan Tran"
              src="/charzard.jpg"
              sx={{ width: 120, height: 120 }}
            />
            Bryan Tran 
            <Box sx={{display: "flex", justifyContent: "space-around", maxWidth: "125px"}}>
          <a href="https://github.com/iambryantran"> <GitHubIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href=""><EmailIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href="https://www.linkedin.com/in/bryanntran/"><LinkedInIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>

            </Box>
          </h2>
          <p>
            Yo! I'm Bryan, a Full Stack Developer with a BS in Finance. I enjoy backend development and working with databases, so most of my projects have been focused on data collection and analysis. When I'm not coding, you can find me in the gym, analyzing stocks, spending time with my wife and cats, exploring new places, and playing tennis. I believe in working hard to achieve your goals and build the life you want. Feel free to reach out to me if you have any questions or just want to chat!
          </p>
        </Box>
        <Box
          component="section"
          sx={{
            bgcolor: "#408C93",
            color: "#fff",
            boxShadow: 5,
            borderRadius: 2,
            p: 4,
            m: 3,
            minWidth: 300,
          }}
        >
          <h2>
            <Avatar
              alt="Dalton Fussell"
              src="/vapo.webp"
              sx={{ width: 120, height: 120 }}
            />
            Dalton Fussell 
            <Box sx={{display: "flex", justifyContent: "space-around", maxWidth: "125px"}}>
          <a href="https://github.com/dfussell1"> <GitHubIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href=""><EmailIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
          <a href="https://www.linkedin.com/in/dalton-fussell-838387209/"><LinkedInIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>

            </Box>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolor saepe. Nulla culpa aliquid cumque impedit odio
            eaque dolore sint non quam deserunt eligendi dolor vel ea officia,
            delectus nam accusantium, laborum maiores ab quibusdam temporibus.
            Culpa est sapiente quasi quam corporis aspernatur suscipit
            voluptatem, ad, eos fugiat, necessitatibus dolorem.
          </p>
        </Box>
        <Box
          component="section"
          sx={{
            bgcolor: "#408C93",
            color: "#fff",
            boxShadow: 5,
            borderRadius: 2,
            p: 4,
            m: 3,
            minWidth: 300,
          }}
        >
          <h2>
            <Avatar
              alt="Sepan Mustafa"
              src="/ev.jpg"
              sx={{ width: 120, height: 120 }}
            />
            Sepan Mustafa 
            <Box sx={{display: "flex", justifyContent: "space-around", maxWidth: "125px"}}>
            <a href="https://github.com/Sepan09"> <GitHubIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
            <a href=""><EmailIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>
            <a href="https://www.linkedin.com/in/sepan-mustafa-73b0412a4/"><LinkedInIcon sx={{color: "black", fontSize: "30px", display: "flex", alignItems: "flex-end"}}/></a>

            </Box>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolor saepe. Nulla culpa aliquid cumque impedit odio
            eaque dolore sint non quam deserunt eligendi dolor vel ea officia,
            delectus nam accusantium, laborum maiores ab quibusdam temporibus.
            Culpa est sapiente quasi quam corporis aspernatur suscipit
            voluptatem, ad, eos fugiat, necessitatibus dolorem.
          </p>
        </Box>
      </Container>
    </Page>
  );
}
