import Page from "../components/Page";
import JobCard from "../components/JobCard";
import { Box } from "@mui/material";

const headContent = (
  <>
    <title>Gallery</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Gallery() {
  return (
    <Page isProtected={true} headContent={headContent}>
      <div>Gallery Page</div>
      <Box>
        <JobCard />
      </Box>
    </Page>
  );
}
