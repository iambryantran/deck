import Page from "../components/Page";

const headContent = (
  <>
    <title>Career Cache</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <h1>
        Welcome to Career Cache, your one stop shop for all things career
        focused. Please create an account or log-in if you are already
        registered!
      </h1>
    </Page>
  );
}
