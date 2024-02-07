import Page from "../components/Page";
import AddContact from "../components/AddContact";

const headContent = (
    <>
        <title>Add New Contact</title>
        <meta name="description" content="This is the add contact page."></meta>
    </>
);

export default function AddContactPage() {
    return (
        <Page isProtected={true} headContent={headContent}>
            <AddContact />
        </Page>
    )
}