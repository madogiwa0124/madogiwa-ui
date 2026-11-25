import { MBtn, MCard, MCardContent, MCardFooter, MCardImage, MH2, MH3, MP } from "../../src";
import sampleImage from "../320x240.png";

export const CardsSection = () => (
  <>
    <MH2>MCard</MH2>
    <div style={{ display: "flex", gap: "var(--spacing-4)", flexWrap: "wrap" }}>
      <MCard style={{ maxWidth: "320px" }}>
        <MCardImage src={sampleImage} alt="Sample image" />
        <MCardContent>
          <MH3 style={{ marginTop: 0 }}>Card Title</MH3>
          <MP>This is a basic card component with an image, content, and footer.</MP>
        </MCardContent>
        <MCardFooter>
          <MBtn variant="primary">Action</MBtn>
          <MBtn outline>Cancel</MBtn>
        </MCardFooter>
      </MCard>
      <MCard floating style={{ maxWidth: "320px" }}>
        <MCardContent>
          <MH3 style={{ marginTop: 0 }}>Floating Card</MH3>
          <MP>This card has a floating shadow effect with hover interaction.</MP>
        </MCardContent>
        <MCardFooter>
          <MBtn variant="secondary">Learn More</MBtn>
        </MCardFooter>
      </MCard>
    </div>
  </>
);
