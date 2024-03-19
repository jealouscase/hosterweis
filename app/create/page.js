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
            "title": "MTurk Worker Visualization Chrome Extension",
            "concepts": "Data viz, Prototyping, & User surveys",
            "statement": "I explored the experiences of workers on platforms like Amazon Mechanical Turk (MTurk) and Prolific, aiming to shed light on their challenges and aspirations. Through the development of a Google Chrome extension, I sought to facilitate communication and collaboration among these workers, fostering a sense of solidarity in a digital landscape often marked by isolation. By conducting surveys and interviews, I delved into the lived realities of these workers, navigating a journey of discovery and iteration. As I engaged with the MTurk and Prolific communities, I strived to amplify their voices and empower them through collective action and transparency, envisioning a future where digital labor is recognized and valued.",
            "dateCompleted": "120723",
            "tools": ["Chrome Extension", "Prolific", "Presentation"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/ab45ff1e78abc4c0f5dde3b63adfe4e2.png?alt=media&token=e5c230a2-d458-4c24-ace2-60336a8f1b86"]
        },
        {
            "title": "Trader Joe's Package Redesign",
            "concepts": "Product packaging design & 3D",
            "statement": "I undertook the challenge of redesigning the packaging for Trader Joe's microwave rice. With a focus on enhancing both the visual appeal and functionality of the packaging, I opted for a clean and minimalist design that aligns with Trader Joe's brand ethos. Leveraging Adobe Dimension, I meticulously crafted a 3D image of the redesigned packaging, featuring vibrant colors and engaging graphics to capture the attention of shoppers. Additionally, I incorporated user-friendly elements such as easy-to-read cooking instructions and a resealable closure for convenience and freshness. Looking beyond the immediate product, I envisioned how this redesign could extend across Trader Joe's line of microwaveable grains, ensuring a cohesive and recognizable brand identity on the shelves. Through thoughtful consideration of both aesthetics and practicality, I aimed to elevate the overall experience for consumers engaging with Trader Joe's microwave rice.",
            "dateCompleted": "113023",
            "tools": ["Adobe Dimension"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/Screenshot%202023-11-30%20at%2010.06.25%E2%80%AFAM.png?alt=media&token=b7659e5c-963c-448f-90f9-11d15741b472",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/Screenshot%202023-11-30%20at%2010.06.52%E2%80%AFAM.png?alt=media&token=fb38a6b9-4dcc-4aa4-9561-699f82404e23"]
        },
        {
            "title": "Architecture Font and Specimen",
            "concepts": "Typography & graphic design",
            "statement": "I created a unique custom typeface using a font editor. Inspired by the dynamic interplay between geometric forms and organic shapes, I aimed to craft a typeface that struck a balance between modernity and whimsy. Drawing from various influences such as letters on the street, natural elements, and architecture, I envisioned a typeface that exuded character and versatility. As I embarked on this creative journey, I explored the intricate details of letterforms, experimenting with proportions, curves, and terminals to achieve a harmonious and distinctive aesthetic. Looking ahead, I considered the possibility of utilizing this custom typeface for my final project, recognizing the potential for it to imbue my designs with a unique and personal touch.",
            "dateCompleted": "112123",
            "tools": ["Glyphs Mini 2"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/Henry_Osterweis_Font_Specimen.png?alt=media&token=72034837-2eae-4c7e-9df1-aac9a74c4a61"]
        },
        {
            "title": "Relief for Lahaina T-Shirt",
            "concepts": "Graphic design, typography, & client relations",
            "statement": "I designed a T-shirt aimed at aiding the victims of the forest fires in Lahaina, Hawaii, in August. Collaborating with Crunch, a company dedicated to providing relief, and Mendocino Farms, the caterers for the fundraising event, I aimed to create a design that not only raises awareness but also encourages support through donations and sales. Mindful of the practical considerations outlined by our creative director, Jason Engdahl, I crafted a design that resonates with the target audience, ensuring it's visually appealing and likely to be worn beyond the event. While limited to three colors, I sought to convey a message of solidarity and hope, paying tribute to the resilience of those affected by the fires. By leveraging design as a tool for advocacy and support, I hope to make a meaningful impact in assisting the community of Lahaina during this challenging time.",
            "dateCompleted": "110423",
            "tools": ["Illustrator", "Photoshop"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/lahaina_shirt_final.png?alt=media&token=ebb15583-6411-4d38-9557-e734d7a2e01a"]
        },
        {
            "title": "Deftones Digital Magazine",
            "concepts": "Publication design & typography",
            "statement": "I delved into the realm of music publication design, crafting a magazine cover and two double spread layouts centered around the band Deftones. Channeling my passion for both graphic design and music, I meticulously curated each element, from headlines to body text, aiming to capture the essence of the band's aesthetic while adhering to the principles of strong layout design. Drawing inspiration from renowned music publications like Rolling Stone and Decibel, I sought to infuse my designs with a balance of visual intrigue and informative content, employing a consistent grid structure to ensure cohesion across all spreads. By immersing myself in the nuances of magazine layout and typography, I aimed to create an immersive reading experience that pays homage to the band's legacy and resonates with music enthusiasts.",
            "dateCompleted": "103123",
            "tools": ["InDesign", "Photoshop"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/rolling-stone-mag-final-1.png?alt=media&token=5cf2325b-2c86-4063-a0c4-9e25630f2c35",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/rolling-stone-mag-final-2.png?alt=media&token=33dbae50-3faf-44d5-832f-706ef07a1705",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/rolling-stone-mag-final-4.png?alt=media&token=31e2f215-0948-44a0-ac5d-98f1ef8bb12c"]
        },
        {
            "title": "Off The Bridge Bike Shop Sign",
            "concepts": "Client relations & graphic design",
            "statement": `In developing the signage for Off the Bridge bike shop in Chinatown, Manhattan, I took inspiration from the neighborhood's eclectic visual landscape and Qian's vision for the store. By critiquing and analyzing two relevant examples and exploring Qian's references, "1984" and "Idiocracy," I gained valuable insights. Working closely with the client, I crafted a scale mock-up that goes beyond traditional signage, incorporating elements like window grates and sidewalk installations. My design aims to enhance visibility and capture the essence of the neighborhood while also providing auxiliary assets such as a logo and website. Ultimately, my goal is to create a standout presence for Off the Bridge on Canal Street, appealing to both locals and passersby.`,
            "dateCompleted": "100323",
            "tools": ["Sketching", "Adobe Illustrator"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/off_the_bridge_0.png?alt=media&token=bf377c77-f10b-4d34-afc8-6d1aa1fd782d",
                         "https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/off_the_bridge_1.png?alt=media&token=b95a6e59-2887-4e02-8be4-812e982edd86"]
        },
        {
            "title": "Affordable Healthcare Political Poster",
            "concepts": "Graphic design & political statements",
            "statement": "I chose to advocate for affordable healthcare for all in New York City. Through meticulous research and exploration of other designers' approaches to this issue, I discovered the potent symbolism associated with a raised fist, signifying power and unity, and a vaccine, symbolizing healthcare access and protection. My poster features a striking image of a fist reaching for a vaccine, encapsulating the urgency and importance of equitable healthcare. I deliberately avoided clichés and opted for a bold yet straightforward design, aiming to resonate with viewers and ignite conversations about this pressing social issue.",
            "dateCompleted": "091923",
            "tools": ["Photography", "Adobe Illustrator"],
            "imgLinks": ["https://firebasestorage.googleapis.com/v0/b/hosterweis.appspot.com/o/healthcare_poster.png?alt=media&token=c46b13b9-04fe-4d44-85e9-6bb564e7aa13"]
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
                            className="border-4 border-black w-[520px] h-max"
                            alt="portfolio image"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl font-extrabold max-sm:text-3xl max-sm:text-wrap relative max-md:left-0">&quot;{selectedProject.title}&quot;</div> {/* -left-7  */} 
                            <p className="left-4 text-3xl max-sm:text-2xl">Completed in {months[selectedProject.dateCompleted.substring(0, 2) - 1]} 20{selectedProject.dateCompleted.substring(4, 6)}</p>
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