import HomeLink from "@/components/HomeLink";
import PageWrapper from "@/components/PageWrapper";
import ScrambledText from "@/components/ScrambledText";

const Page = () => {
    {/* 
        Projects:

        VEX Mars Rover Robot - EG 1003 Final Project
        Built and programmed a small VEX robot tasked with autonomously navigating rough terrain course 
    */}
    const projectObjects = [
        // {
        //     "name": "",
        //     "start_month": 0,
        //     "end_month": 0,
        //     "year": 0,
        //     "description": "",
        //     "categories": [""],
        // },
        {
            "name": "spec.network",
            "start_month": 9,
            "end_month": 2,
            "year": 2024,
            "description": "Developed a Next.js web app as a startup for screenwriters and playwrights, overseeing all aspects of development, business, and marketing. Leveraging advanced  concepts such as Incremental Static Regeneration, Dynamic Routing and Parallel Routes to build a robust platform with Firebase backend, NextAuth, and Vercel hosting, using best practices including CD/CI implementation, Git version control, and comprehensive code documentation.",
            "categories": ["Next.js", "Entrepreneurship", "Full-stack"],
        },
        {
            "name": "File Dashboard for J.C. Kellogg Foundation [Freelance] [Commissioned]",
            "start_month": 8,
            "end_month": 11,
            "year": 2023,
            "description": "Built a File Storage Dashboard website with LEO Designs Studio for J.C. Kellogg Foundation, using Firebase, Cloud Functions and Github. Managed the entire project from client engagement to deployment.",
            "categories": ["Full-stack", "Client Relations", "Authentication"],
        },
        {
            "name": "Grocery Shopping Finder",
            "start_month": 6,
            "end_month": 7,
            "year": 2023,
            "description": "Small GPT-wrapper web app for comparing grocery prices across stores for efficient shopping.",
            "categories": ["React", "PaLM 2", "Large Language Model"],
        },
        {
            "name": "Falling Words (Squrrble)",
            "start_month": 4,
            "end_month": 5,
            "year": 2023,
            "description": "Word game (spin-off of the game Boggle, Wordle, and Word search) built and documented for DM-UY 2193 final project.",
            "categories": ["React", "User experience", "Game development"],
        },
        {
            "name": "The Lipstick Artist Portfolio Page [Freelance] [Commissioned]",
            "start_month": 7,
            "end_month": 8,
            "year": 2022,
            "description": "Developed  application with React frontend for artist. Site allows users to view the artist's portfolio, contact them for inquiries, and place orders for custom artwork.",
            "categories": ["React", "Design", "Client relations"],
        },
        {
            "name": "Blockchain Transaction Explorer",
            "start_month": 4,
            "end_month": 5,
            "year": 2022,
            "description": "Built Javascript program to traverse and analyze blockchain transactions by communicating with an Ethereum node. The program allows users to query and analyze transactions.",
            "categories": ["Algorithms", "Blockchain", "Ethereum"],
        },
        {
            "name": "OpenSea Google Chrome Extension",
            "start_month": 3,
            "end_month": 4,
            "year": 2022,
            "description": "Developed browser tool with Javascript to display enhanced data on non-fungible token marketplace for leveraged trading.",
            "categories": ["HTML, CSS, Javascript", "Web scraping", "Non-Fungible Tokens"],
        },
        {
            "name": "GamePigeon Filler Board Game Solver",
            "start_month": 1,
            "end_month": 2,
            "year": 2022,
            "description": "Exercised Python object oriented programming and recursive algorithm skills to simulate and solve a two-player board game.",
            "categories": ["Python", "Object Oriented Programming", "Game Simulation"],
        },
    ]

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <PageWrapper pageTitle={"Projects"}>
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
                            <div className="flex text-xl gap-4 max-sm:text-sm max-sm:flex-wrap">
                                {project.categories.map((tag, index) => (
                                    <div key={index} className="border-2 border-black p-2 text-nowrap">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
}

export default Page;