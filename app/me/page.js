import HomeLink from "@/components/HomeLink";

const Page = () => {
    return (
        <div className="p-24 text-3xl">
            <HomeLink />
            <br></br><br></br>
            <h1 className="text-5xl">Welcome</h1>
            <br></br>
            <p>
                My name is Henry Osterweis. I am pursuing my Bachelor of Science in 
                Integrated Design and Media at <span className="text-purple-700">New York University </span>
                Tandon School of Engineering.
            </p>
            <br></br>
            <p>
                I currently live in Brooklyn, New York. 
            </p>
            <br></br>
            <p>
                You can reach me at <button>henryosterweis@gmail.com</button>
            </p>
        </div>
    );
}
 
export default Page;