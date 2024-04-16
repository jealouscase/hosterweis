import HomeLink from "./HomeLink";

const PageWrapper = ({ children, pageTitle }) => {
    return (
        <div className="p-24 text-3xl max-sm:p-10">
            <HomeLink />
            <br></br><br></br>
            <h1 className="text-5xl max-sm:text-4xl mb-6">{pageTitle}<span className="text-2xl ml-4">by Henry Osterweis</span></h1>
            <div className="max-sm:text-xl">{children}</div>
        </div>
    );
}

export default PageWrapper;