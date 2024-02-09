import { useState } from "react";
import Page from "../components/Page";
import JobAdd from "../components/JobAdd";
import AddContact from "../components/AddContact";

const headContent = (
  <>
    <title>Change Me! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  return (
    <Page isProtected={true} headContent={headContent}>
      <div>Dashboard</div>
      <button onClick={() => setShowForm(!showForm)}>
        {!showForm ? "Add New Job" : " Hide Job Form"}
      </button>
      {showForm && <JobAdd />}
      <button onClick={() => setShowContactForm(!showContactForm)}>
        {!showContactForm ? "Add New Contact" : " Hide Contact Form"}
      </button>
      {showContactForm && <AddContact />}
    </Page>
  );
}
