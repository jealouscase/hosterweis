import HomeLink from "@/components/HomeLink";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
    const projectObjects = [
        // {
        //     "title": "",
        //     "concepts": "",
        //     "statement": "",
        //     "month": 0,
        //     "year": 0,
        //     "technologies": 0,
        // },
        {
            "title": "Continuity Editing",
            "concepts": "Post production & Narrative film",
            "statement": "",
            "month": 0,
            "year": 0,
            "technologies": 0,
        },
        {
            "title": "Ciné-Roman",
            "concepts": "Narrative film & Photography",
            "statement": "",
            "month": 0,
            "year": 0,
            "technologies": 0,
        },
        {
            "title": "Chronophotograph",
            "concepts": "Photo manipulation & Composite images",
            "statement": "",
            "month": 0,
            "year": 0,
            "technologies": 0,
        },
    ]

    return (
        <PageWrapper pageTitle={"Creative Portfolio"}>
            <div className="flex gap-4 max-lg:flex-col relative -left-4">
                {projectObjects.map((project, index) => (
                    <div key={index} className="w-1/3 max-lg:w-full p-4 hover:outline outline-4 outline-black hover:cursor-pointer">
                        <p className="text-8xl">{projectObjects.length - index - 1 < 10 ? 0 : ""}{projectObjects.length - index - 1}</p>
                        <p className="text-2xl font-black">{project.title}</p>
                        <p className="text-2xl">{project.concepts}</p>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <p>Need design work done? Reach out at henryosterweis@gmail.com</p>
        </PageWrapper>
    );
}
 
export default Page;