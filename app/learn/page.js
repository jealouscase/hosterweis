import PageWrapper from "@/components/PageWrapper";

const Page = () => {

    const classList = [
        {
            "subject": "Computer Science",
            "courses": ["Introduction to Computer Science", 
                        "Data Structures and Algorithms", 
                        "Object-Oriented Programming", 
                        "Introduction to Web Development", 
                        "Creative Coding"]
        },
        {
            "subject": "Mathematics",
            "courses": ["Precalculus", 
                        "Discrete Mathematics", 
                        "Calculus I"]
        },
        {
            "subject": "Integrated Design",
            "courses": ["Still and Moving Images", 
                        "Visual Foundation Studio",
                        "Audio Foundation Studio",
                        "Ideation & Prototyping",
                        "3D Modeling",
                        "Professional Practices for Creatives",]
        },
        {
            "subject": "General Engineering",
            "courses": ["Introduction to Engineering and Design",
                        "Engineering and Technology Forum",]
        },
        {
            "subject": "Physics",
            "courses": ["Motion and Sound [Physics I]",
                        "Electricity and Light [Physics II]"]
        },
        {
            "subject": "Writing",
            "courses": ["Writing The Essay",
                        "The Advanced College Essay",
                        "Advanced Seminar in Culture, Arts and Media"]
        },
        {
            "subject": "Humanities",
            "courses": ["Ethics and Technology",
                        "Introduction to Urban Planning",]
        },
        {
            "subject": "Media",
            "courses": ["Introduction to Media Studies",
                        "Platforms and Society",]
        }
    ]

    return (
        <PageWrapper pageTitle={"Completed Classes"}>
            <div className="flex flex-col gap-8">
                {classList.map((item, index) => (
                    <div key={index}>
                        <h2 className="text-4xl font-bold mb-2 max-sm:text-2xl">{item.subject}</h2>
                        {item.courses.map((course, index) => (
                            <p key={index} className="max-sm:text-sm">-- {course}</p>
                        ))}
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
}
 
export default Page;