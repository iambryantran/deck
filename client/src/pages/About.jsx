import Page from "../components/Page";
import { Avatar, Stack, Container, Box } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

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
        <Box sx={{textAlign: "center", color: "#fff",}}>
          <h1>Meet the Developers</h1>
          {/* <GroupsIcon sx={{ fontSize: "50px"}}/> */}
        </Box>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          {/* <Avatar
            alt="Brandon Lambrecht"
            src="/public/pikachu.png"
            sx={{ width: 120, height: 120 }}
          />
          <Avatar
            alt="Bryan Tran"
            src="/public/charzard.jpg"
            sx={{ width: 120, height: 120 }}
          />
          <Avatar
            alt="Dalton Fussell"
            src="/public/vapo.webp"
            sx={{ width: 120, height: 120 }}
          />
          <Avatar
            alt="Sepan Mustafa"
            src="/public/evee.png"
            sx={{ width: 120, height: 120 }}
          /> */}
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
              src="/public/pikachu.png"
              sx={{ width: 120, height: 120 }}
            />
              Brandon Lambrecht
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
              src="/public/charzard.jpg"
              sx={{ width: 120, height: 120 }}
            />
              Bryan Tran
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
              alt="Dalton Fussell"
              src="/public/vapo.webp"
              sx={{ width: 120, height: 120,}}
            />
              Dalton Fussell
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
              src="/public/evee.png"
              sx={{ width: 120, height: 120 }}
            />
              Sepan Mustafa
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
