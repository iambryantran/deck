import Page from "../components/Page";
import JobAdd from "../components/JobAdd";

const headContent = (
    <>
        <title>Add New Job</title>
        <meta name="description" content="This is the job add page." />
    </>
);

export default function JobAddPage() {
    return (
        <Page isProtected={true} headContent={headContent}>
            <JobAdd />
        </Page>
    );
}