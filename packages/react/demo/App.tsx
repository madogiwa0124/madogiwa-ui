import { MBtn, MContainer, MH1, MNavbar, MNavbarItem, MNavbarTitle, MTabs, MTabsItem, MTabsList } from "../src";
import { AccordionSection } from "./sections/AccordionSection";
import { AlertSection } from "./sections/AlertSection";
import { BadgeSection } from "./sections/BadgeSection";
import { ButtonsSection } from "./sections/ButtonsSection";
import { CardsSection } from "./sections/CardsSection";
import { ColumnsSection } from "./sections/ColumnsSection";
import { InputsSection } from "./sections/InputsSection";
import { LinksSection } from "./sections/LinksSection";
import { ListSection } from "./sections/ListSection";
import { ModalsSection } from "./sections/ModalsSection";
import { SnackbarSection } from "./sections/SnackbarSection";
import { TableSection } from "./sections/TableSection";
import { useState } from "react";

const tabs = [
  { id: "buttons", label: "Buttons", Section: ButtonsSection },
  { id: "links", label: "Links", Section: LinksSection },
  { id: "cards", label: "Cards", Section: CardsSection },
  { id: "modals", label: "Modals", Section: ModalsSection },
  { id: "inputs", label: "Inputs", Section: InputsSection },
  { id: "accordion", label: "Accordion", Section: AccordionSection },
  { id: "badge", label: "Badge", Section: BadgeSection },
  { id: "snackbar", label: "Snackbar", Section: SnackbarSection },
  { id: "columns", label: "Columns", Section: ColumnsSection },
  { id: "alert", label: "Alert", Section: AlertSection },
  { id: "table", label: "Table", Section: TableSection },
  { id: "list", label: "List", Section: ListSection },
] as const;

// NOTE: Inactive panels are hidden with .m-hidden instead of being unmounted, so each section keeps its state (form values, open dialogs) across tab switches, as in the Vue demo.
export const App = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("buttons");

  return (
    <>
      <MNavbar
        title={(
          <MNavbarTitle href="/">
            <b>MNavbar</b>
          </MNavbarTitle>
        )}
        mobileMenuVariant="side"
        transition
        closeOutsideClick
      >
        <MNavbarItem>
          <a href="/home">Home</a>
        </MNavbarItem>
        <MNavbarItem>
          <a href="/about">About</a>
        </MNavbarItem>
        <MNavbarItem>
          <a href="/services">Services</a>
        </MNavbarItem>
        <MNavbarItem end>
          <MBtn variant="primary">Sign Up</MBtn>
          <MBtn variant="secondary" outline>Log In</MBtn>
        </MNavbarItem>
      </MNavbar>
      <MContainer padding>
        <MH1 style={{ marginTop: "var(--spacing-6)" }}>Madogiwa UI - React</MH1>
        <MTabs scrollhint transition style={{ marginBottom: "var(--spacing-4)" }}>
          <MTabsList aria-label="Components">
            {tabs.map(({ id, label }) => (
              <MTabsItem
                key={id}
                id={`components-${id}-tab`}
                active={activeTab === id}
                aria-controls={`components-${id}`}
                onClick={() => { setActiveTab(id); }}
              >
                {label}
              </MTabsItem>
            ))}
          </MTabsList>
        </MTabs>
        {tabs.map(({ id, Section }) => (
          <section
            key={id}
            id={`components-${id}`}
            role="tabpanel"
            aria-labelledby={`components-${id}-tab`}
            className={activeTab === id ? undefined : "m-hidden"}
          >
            <Section />
          </section>
        ))}
      </MContainer>
    </>
  );
};
