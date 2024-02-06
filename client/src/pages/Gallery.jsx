import Page from "../components/Page";

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
    </Page>
  );
}
