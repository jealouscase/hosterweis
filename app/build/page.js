import HomeLink from "@/components/HomeLink";
import PageWrapper from "@/components/PageWrapper";

const Page = () => {
    const projectObjects = [
        {
            "name": "File Dashboard for J.C. Kellogg Foundation",
            "start_month": 8,
            "end_month": 11,
            "year": 2023,
            "description": "Build a File Storage Dashboard website with LEO Designs Studio for J.C. Kellogg Foundation, using Firebase, Cloud Functions and Github. Managed the entire project from client engagement to deployment.",
            "categories": ["Full-stack", "Client Relations", "Authentication"],
        },
        {
            "name": "The Lipstick Artist Portfolio Page",
            "start_month": 7,
            "end_month": 8,
            "year": 2022,
            "description": "Developed  application with React frontend for artist. Site allows users to view the artist's portfolio, contact them for inquiries, and place orders for custom artwork.",
            "categories": ["React", "Design", "Client relations"],
        },
    ]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <PageWrapper pageTitle={"Freelance Work"}>
            <div className="flex flex-col gap-8">
                {projectObjects.map((project, index) => (
                    <div key={index} className="flex gap-10 max-sm:flex-col max-sm:gap-2">
                        <p className="font-bold">{projectObjects.length - index - 1 < 10 ? 0 : ""}{projectObjects.length - index - 1}</p>
                        <div className="flex flex-col gap-4">
                            <p className=" w-80">{project.name}</p>
                            <p className="text-nowrap">{months[project.start_month - 1]} - {months[project.end_month - 1]} {project.year}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>{project.description}</p>
                            <div className="flex text-xl gap-4  max-sm:text-sm max-sm:flex-wrap">
                                {project.categories.map((tag, index) => (
                                    <div key={index} className="border-2 border-black p-2 text-nowrap">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <p>Need software work done? Reach out at henryosterweis@gmail.com</p>
        </PageWrapper>
    );
}
 
export default Page;