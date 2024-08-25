import { SectionHeading } from "../UI/Headings";
import { CarouselSection } from "../UI/Section";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";


export default function Offer() {
    return (
        <CarouselSection id="what-i-offer">
            <div className="pt-[7rem]">
                <SectionHeading>what I offer?</SectionHeading>
                <p>
                I can help you design the web page from scratch, 
                or only code your existing design. I always aim to deliver results that exceed your expectations. 
                Your satisfaction is my priority.
                </p>
                <p>
                Also, if you become my customer, Don’t worry, I GOT YOUR BACK with full support 
                in case of any errors and will be available when you encounter issues after deploying your web application.
                </p>
                <p>So don’t hesitate to reach out! you’re one step away from your web application.</p>
            </div>

            <HorizontalScrollCarousel/>
      </CarouselSection>
    )
}

