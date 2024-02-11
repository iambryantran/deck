import Page from "../components/Page";
import JobCard from "../components/JobCard";

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
      <JobCard />
    </Page>
  );
}
