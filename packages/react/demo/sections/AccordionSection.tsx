import { MAccordion, MAccordionContent, MAccordionSummary, MH2, MP } from "../../src";

const faqs = [
  { question: "What is Madogiwa UI?", answer: "Madogiwa UI is a modern CSS framework leveraging cutting-edge CSS features like @property, CSS Nesting, and logical properties.", outline: false },
  { question: "How do I get started?", answer: "Install the package via npm or yarn, import the CSS, and start using the components in your React application.", outline: true },
  { question: "Is it accessible?", answer: "Yes! Madogiwa UI uses semantic HTML elements like details and summary for optimal accessibility.", outline: false },
];

export const AccordionSection = () => (
  <>
    <MH2>MAccordion</MH2>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-3)" }}>
      {faqs.map(({ question, answer, outline }) => (
        <MAccordion key={question} outline={outline} transition>
          <MAccordionSummary>{question}</MAccordionSummary>
          <MAccordionContent>
            <MP>{answer}</MP>
          </MAccordionContent>
        </MAccordion>
      ))}
    </div>
  </>
);
