import HomeLink from "@/components/HomeLink";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
    return (
        <PageWrapper pageTitle={"Welcome"}>
            <p>
                My name is Henry Osterweis. I am pursuing my Bachelor of Science in 
                Integrated Design and Media at <span className="text-purple-700">New York University </span>
                Tandon School of Engineering as part of the Class of 2025.
            </p>
            <br></br>
            <p>
                I currently live in Brooklyn, New York. 
            </p>
            <br></br>
            <p>
                You can reach me at <button>henryosterweis@gmail.com</button>
            </p>
        </PageWrapper>
    );
}
 
export default Page;