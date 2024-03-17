import HomeLink from "@/components/HomeLink";

const Page = () => {
    const projectObjects = [
        {
            "name": "American Eagle Brand Ambassador (Sales Associate)",
            "start_month": 6,
            "end_month": 8,
            "year": 2023,
            "description": "Provided personalized customer assistance using the AEO Selling Model, ensuring seamless service across all store zones, and actively promoted the AEO loyalty program to enhance customer loyalty.",
            "categories": ["Customer Service", "Sales", "Brand Promotion"],
        },
    ]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="p-24 text-3xl">
            <HomeLink />
            <br></br><br></br>
            <h1 className="text-5xl">Work Experience</h1>
            <br></br>
            <div className="flex flex-col gap-8">
                {projectObjects.map((project, index) => (
                    <div key={index} className="flex gap-10">
                        <p className="font-bold">{projectObjects.length - index - 1 < 10 ? 0 : ""}{projectObjects.length - index - 1}</p>
                        <div className="flex flex-col gap-4">
                            <p className=" w-80">{project.name}</p>
                            <p className="text-nowrap">{months[project.start_month - 1]} - {months[project.end_month - 1]} {project.year}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>{project.description}</p>
                            <div className="flex text-xl gap-4">
                                {project.categories.map((tag, index) => (
                                    <div key={index} className="border-2 border-black p-2 text-nowrap">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br></br><br></br>
            <p>Hiring? Reach out at henryosterweis@gmail.com</p>
        </div>
    );
}
 
export default Page;