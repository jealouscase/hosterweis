"use client"
import HomeLink from "@/components/HomeLink";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
    const projectObjects = [
        // {
        //     "title": "",
        //     "concepts": "",
        //     "statement": "",
        //     "dateCompleted": "",
        //     "tools": [""],
        //     "imgLinks": [""]
        // },
        {
            "title": "Deftones Digital Magazine",
            "concepts": "Publication design & typography",
            "statement": "For my latest project, I delved into the realm of music publication design, crafting a magazine cover and two double spread layouts centered around the band Deftones. Channeling my passion for both graphic design and music, I meticulously curated each element, from headlines to body text, aiming to capture the essence of the band's aesthetic while adhering to the principles of strong layout design. Drawing inspiration from renowned music publications like Rolling Stone and Decibel, I sought to infuse my designs with a balance of visual intrigue and informative content, employing a consistent grid structure to ensure cohesion across all spreads. By immersing myself in the nuances of magazine layout and typography, I aimed to create an immersive reading experience that pays homage to the band's legacy and resonates with music enthusiasts.",
            "dateCompleted": "103123",
            "tools": ["Illustrator", "InDesign", "Photoshop"],
            "imgLinks": [""]
        },
        {
            "title": "Off The Bridge Bike Shop Sign",
            "concepts": "Client relations & graphic design",
            "statement": `In developing the signage for Off the Bridge bike shop in Chinatown, Manhattan, I took inspiration from the neighborhood's eclectic visual landscape and Qian's vision for the store. By critiquing and analyzing two relevant examples and exploring Qian's references, "1984" and "Idiocracy," I gained valuable insights. Working closely with the client, I crafted a scale mock-up that goes beyond traditional signage, incorporating elements like window grates and sidewalk installations. My design aims to enhance visibility and capture the essence of the neighborhood while also providing auxiliary assets such as a logo and website. Ultimately, my goal is to create a standout presence for Off the Bridge on Canal Street, appealing to both locals and passersby.`,
            "dateCompleted": "100323",
            "tools": ["Sketching", "Adobe Illustrator"],
            "imgLinks": [""]
        },
        {
            "title": "Affordable Healthcare Political Poster",
            "concepts": "Graphic design & political statements",
            "statement": "For my inaugural political poster project, I chose to advocate for affordable healthcare for all in New York City. Through meticulous research and exploration of other designers' approaches to this issue, I discovered the potent symbolism associated with a raised fist, signifying power and unity, and a vaccine, symbolizing healthcare access and protection. My poster features a striking image of a fist reaching for a vaccine, encapsulating the urgency and importance of equitable healthcare. I deliberately avoided clichés and opted for a bold yet straightforward design, aiming to resonate with viewers and ignite conversations about this pressing social issue.",
            "dateCompleted": "091923",
            "tools": ["Photography", "Adobe Illustrator"],
            "imgLinks": [""]
        },
        {
            "title": "MTurk Worker Visualization Chrome Extension",
            "concepts": "Data viz, Prototyping, & User surveys",
            "statement": "In my project, I explored the experiences of workers on platforms like Amazon Mechanical Turk (MTurk) and Prolific, aiming to shed light on their challenges and aspirations. Through the development of a Google Chrome extension, I sought to facilitate communication and collaboration among these workers, fostering a sense of solidarity in a digital landscape often marked by isolation. By conducting surveys and interviews, I delved into the lived realities of these workers, navigating a journey of discovery and iteration. As I engaged with the MTurk and Prolific communities, I strived to amplify their voices and empower them through collective action and transparency, envisioning a future where digital labor is recognized and valued.",
            "dateCompleted": "050923",
            "tools": ["Chrome Extension", "Prolific", "Presentation"],
            "imgLinks": [""]
        },
        {
            "title": "Keep Moving",
            "concepts": "Montage, rhythm, & short clips",
            "statement": "I delved into the realm of montage, exploring its unique ability to disrupt traditional notions of continuity and narrative flow. Through the deliberate use of short clips and the manipulation of graphic elements, I examined the complex relationship between two subjects within a 1 – 3 minute timeframe. Drawing inspiration from methods such as Metric, Rhythmic, Tonal, Over-tonal, and Intellectual or Ideological, I crafted a visual symphony that transcended traditional storytelling conventions. Each cut served as a deliberate punctuation mark, creating rhythm, juxtaposition, and depth that provoked thought and evoked emotion. In this exploration of montage, I embraced the inherent discontinuity between shots, allowing for an exploration of themes and concepts beyond the constraints of spatial or temporal continuity.",
            "dateCompleted": "050223",
            "tools": ["Storyboard", "DSLR", "Premiere Pro"],
            "imgLinks": [""]
        },
        {
            "title": "The Chase",
            "concepts": "Continuity editing & Post production",
            "statement": "I immersed myself in the art of narrative filmmaking, employing the principles of continuity editing to craft a seamless 1 – 3 minute journey between two locations. Embracing techniques like the 180° Rule, Diegetic Sound, Eyeline Match, Match on Action, and Shot-Reverse-Shot, I sculpted a visual and auditory experience that transported viewers into the heart of the narrative. With each carefully curated scene transition and immersive sound design, I invited the audience to explore the rich tapestry of human connection and emotion, woven together through the power of cinematic storytelling.",
            "dateCompleted": "041123",
            "tools": ["Storyboard", "DSLR", "Premiere Pro"],
            "imgLinks": [""]
        },
        {
            "title": "The Dawn",
            "concepts": "Ciné-Roman & Narrative film",
            "statement": "Drawing inspiration from the captivating concept of 'Ciné-Roman' or 'Photo-Roman,' my project celebrates the seamless blend of storytelling mediums to craft immersive narratives. Influenced by Chris Marker’s 1962 classic, “La Jetée”, I delve into the transformative power of narrative film. Through hands-on engagement, I guide participants in shaping a cinematic journey lasting 2 minutes, interweaving elements like voiceover, photography, and sound design. By transmuting written fragments of “Dawn in New York” by Claude McKay into intricate, time-based compositions, I aim to unravel the very essence of storytelling, inviting viewers to embark on a captivating visual and auditory odyssey.",
            "dateCompleted": "030223",
            "tools": ["Premiere Pro", "DSLR", "Lavalier"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/cine-roman-0.jpg?alt=media&token=9da536f9-367d-4d6f-9285-1155706966c4",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/cine-roman-1.jpeg?alt=media&token=eacd7f49-e3f3-4309-ab0b-ba24cd36d20f",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/cine-roman-2.jpeg?alt=media&token=8a9097d8-cc0b-4f88-a7cd-ff9ae24f0375",]
        },
        {
            "title": "Chronophotography",
            "concepts": "Photo manipulation & Composite images",
            "statement": "Embracing the art of chronophotography, this project blends Victorian-era techniques with modern digital tools. I explored movement in single frames, mastering composition, photography, and Adobe Photoshop manipulation. Through composite images of human figures in motion, I delve into the fluidity of time and space, creating captivating narratives on a single page.",
            "dateCompleted": "020723",
            "tools": ["DSLR", "Photoshop"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/Composite_Image_Print_Henry_Osterweis.jpg?alt=media&token=15840859-cf1d-476f-b82b-e223389207f2"]
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
            {
                visible 
                ? <button href={"/"} className="text-3xl hover:underline">Back<span className="inline-flex hover:underline" onClick={() => setVisible(false)}><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></button>
                : <HomeLink /> 
            }
            <br></br><br></br>
            <h1 className="text-5xl">{"Creative Portfolio"}</h1>
            <br></br>
            {visible 
            ?
                <div className="">
                    <div className="flex gap-14 max-md:flex-col max-sm:gap-4">
                        <img
                            src={selectedProject.imgLinks.length > 0 ? selectedProject.imgLinks[0] : ""}
                            className="border-4 border-black max-md:h-auto w-[520px] h-auto"
                            alt="portfolio image"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl font-extrabold max-sm:text-3xl max-sm:text-wrap -left-7 relative max-md:left-0 text-nowrap">&quot;{selectedProject.title}&quot;</div>
                            <p className="left-4 text-3xl max-sm:text-2xl">Completed in {months[selectedProject.dateCompleted.substring(1, 2) - 1]} 20{selectedProject.dateCompleted.substring(4, 6)}</p>
                            <div className="text-xl overflow-scroll h-40 max-md:h-full mb-4">{selectedProject.statement}</div>
                            <div className="flex text-xl gap-4 max-sm:text-sm max-sm:flex-wrap">
                                {selectedProject.tools.map((tool, index) => (
                                    <div key={index} className="border-2 border-black p-2 text-nowrap">{tool}</div>
                                ))}
                            </div>
                        </div>
                    </div>
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