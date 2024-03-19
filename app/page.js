import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="inline-flex min-h-screen flex-col p-24 text-3xl gap-4 max-sm:text-xl max-sm:p-10">
                <div style={{ width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden" }} className="absolute right-24 max-md:relative max-md:m-auto max-md:w-1/2 max-md:right-0 border-4 border-black max-sm:border-3">
                    <Image
                        src="/linkedin_profile_pic.jpeg"
                        width={200}
                        height={200}
                        alt="profile pic"
                        priority
                    />
                </div>
                <Link href={"/me"} className="hover:underline">Henry Osterweis<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/develop"} className="hover:underline">Web Development<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/create"} className="hover:underline">Design<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/consult"} className="hover:underline">Case Studies<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/build"} className="hover:underline">Freelancing<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/work"} className="hover:underline">Work Experience<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <Link href={"/learn"} className="hover:underline">Coursework<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
                <br></br>
                <p>© 2024</p>
        </main>
    )
}
