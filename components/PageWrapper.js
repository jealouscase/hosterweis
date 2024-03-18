import HomeLink from "./HomeLink";

const PageWrapper = ({ children, pageTitle }) => {
    return (
        <div className="p-24 text-3xl max-sm:text-xl max-sm:p-10">
            <HomeLink />
            <br></br><br></br>
            <h1 className="text-5xl">{pageTitle}</h1>
            <br></br>
            {children}
        </div>
    );
}
 
export default PageWrapper;