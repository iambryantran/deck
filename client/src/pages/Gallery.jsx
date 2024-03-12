import Page from "../components/Page";
import JobCard from "../components/JobCard";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { FIND_JOBS, FIND_CONTACTS, FIND_APPLIED_JOBS, FIND_NOT_APPLIED_JOBS } from "../graphql/queries";
import ContactCard from "../components/ContactCard";

const headContent = (
  <>
    <title>Gallery</title>
    <meta name="description" content="Gallery" />
  </>
);

export default function Gallery() {
  const { loading, data } = useQuery(FIND_JOBS);
  const { contactData } = useQuery(FIND_CONTACTS);

  console.log(data);

  return (
    <Page isProtected={true} headContent={headContent}>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
          minWidth: 300,
          p:2,
            m:2}}>
        {data ? (
          data.findAllJobs.map((job) => <JobCard key={job._id} jobData={job} />)
        ) : (
          <div>loading</div>
        )}
        {contactData ? (
          contactData.findAllContacts.map((contact) => <ContactCard key={contact.id} contactData={contact} />)
        ) : (
          <div>loading</div>
        )}
      </Box>
    </Page>
  );
}
