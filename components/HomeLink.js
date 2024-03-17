import Link from "next/link";

const HomeLink = () => {
    return (
        <Link href={"/"} className="text-3xl hover:underline">Home<span className="inline-flex"><svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="40" shapeRendering="geometricPrecision" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="40" style={{color:"currentColor", width:"30px", height:"30px"}}><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></Link>
    );
}
 
export default HomeLink;