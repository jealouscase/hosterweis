"use client"
import HomeLink from "@/components/HomeLink";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const projectObjects = [
        // {
        //     "title": "",
        //     "concepts": "",
        //     "statement": "",
        //     "dateCompleted": "",
        //     "technologies": 0,
        //      "imgLinks": []
        // },
        {
            "title": "Keep Moving",
            "concepts": "Montage, rhythm, & short clips",
            "statement": "",
            "dateCompleted": "050223",
            "technologies": 0,
            "imgLinks": []
        },
        {
            "title": "The Chase",
            "concepts": "Continuity editing & Post production",
            "statement": "",
            "dateCompleted": "041123",
            "technologies": 0,
            "imgLinks": []
        },
        {
            "title": "Ciné-Roman",
            "concepts": "Narrative film & Photography",
            "statement": "",
            "dateCompleted": "030223",
            "technologies": 0,
            "imgLinks": []
        },
        {
            "title": "Chronophotography",
            "concepts": "Photo manipulation & Composite images",
            "statement": "Statement",
            "dateCompleted": "020723",
            "technologies": 0,
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/spec-scripts.appspot.com/o/Composite_Image_Print_Henry_Osterweis.jpg?alt=media&token=88aaefa9-a890-499c-b1eb-1127b17ee1bb"]
        },
    ]

    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    const [visible, setVisible] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})
    
    const handleButtonClick = (project) => {
        setSelectedProject(project)
        setVisible((prevVisible) => !prevVisible)
    }

    return (
        <div className="p-24 text-3xl max-sm:text-xl max-sm:p-10">
            {visible ? <button href={"/"} className="text-3xl hover:underline">Back<span className="inline-flex hover:underline" onClick={() => setVisible((prevVisible) => !prevVisible)}><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></button>
                     : <HomeLink /> }
            <br></br><br></br>
            <h1 className="text-5xl">{"Creative Portfolio"}</h1>
            <br></br>
            {visible 
            ?
                <div className="">
                    <div className="flex gap-10 max-md:flex-col max-sm:gap-4">
                        <Image
                            src={selectedProject.imgLinks.length > 0 ? selectedProject.imgLinks[0] : ""}
                            width={500}
                            height={500}
                            priority={false}
                            className="border-4 border-black"
                            alt="portfolio image"
                        />
                        <div>
                            <div className="text-5xl font-extrabold mb-2 max-sm:text-3xl">&quot;{selectedProject.title}&quot;</div>
                            <p>Completed in {months[selectedProject.dateCompleted.substring(1, 2) - 1]} 20{selectedProject.dateCompleted.substring(4, 6)}</p>
                            <div>{selectedProject.statement}</div>
                        </div>
                    </div>
                    <br></br>
                    <button className="hover:underline" onClick={() => setVisible((prevVisible) => !prevVisible)}>Back</button>
                </div>
            :
                <div 
                    className="flex flex-wrap max-lg:flex-col relative -left-4"
                >
                    {projectObjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="w-1/3 max-lg:w-full p-4 hover:outline outline-4 outline-black hover:cursor-pointer"
                            onClick={() => handleButtonClick(project)}
                        >
                            <p className="text-8xl">{projectObjects.length - index - 1 < 10 ? 0 : ""}{projectObjects.length - index - 1}</p>
                            <p className="text-2xl font-black">{project.title}</p>
                            <p className="text-2xl">{project.concepts}</p>
                        </div>
                    ))}
                </div>
            }
            <br></br><br></br>
            <p>Need design work done? Reach out at henryosterweis@gmail.com</p>
        </div>
    );
}
 
export default Page;