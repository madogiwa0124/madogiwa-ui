import { type ComponentProps, type ReactNode, useId, useRef, useState } from "react";
import { MNavbarHamburger } from "./MNavbarHamburger";
import { MNavbarHamburgerMenu } from "./MNavbarHamburgerMenu";
import { MNavbarItems } from "./MNavbarItems";
import { clsx } from "clsx";
import { useCloseOutsideClick } from "./useCloseOutsideClick";

export type MNavbarMobileMenuVariant = "float" | "side" | "side-left";

export type MNavbarProps = Omit<ComponentProps<"nav">, "title"> & {
  title?: ReactNode;
  mobileMenuVariant?: MNavbarMobileMenuVariant;
  closeOutsideClick?: boolean;
  transition?: boolean;
  openMenuLabel?: string;
  closeMenuLabel?: string;
};

const mobileMenuClasses: Record<MNavbarMobileMenuVariant, string> = {
  "float": "--mobile-float-menu",
  "side": "--mobile-side-menu",
  "side-left": "--mobile-side-menu --slide-left",
};

// NOTE: Unlike the other blocks, MNavbar renders its items wrapper and hamburger itself instead of letting consumers compose them.
// navbar.css relies on the fixed title -> items -> hamburger structure, and the menu state and outside-click handling need refs to both.
export const MNavbar = ({
  title,
  mobileMenuVariant,
  closeOutsideClick = false,
  transition = false,
  openMenuLabel,
  closeMenuLabel,
  className,
  children,
  ...props
}: MNavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const itemsId = useId();
  const itemsRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useCloseOutsideClick({
    enabled: closeOutsideClick && mobileMenuVariant !== undefined && menuOpen,
    insideRefs: [itemsRef, hamburgerRef],
    onClose: () => {
      setMenuOpen(false);
    },
  });

  return (
    <nav
      className={clsx("m-navbar", mobileMenuVariant && mobileMenuClasses[mobileMenuVariant], transition && "--transition", className)}
      {...props}
    >
      {title}
      <MNavbarItems ref={itemsRef} id={itemsId}>
        {children}
      </MNavbarItems>
      {mobileMenuVariant && (
        <MNavbarHamburger ref={hamburgerRef}>
          <MNavbarHamburgerMenu
            expanded={menuOpen}
            aria-controls={itemsId}
            openLabel={openMenuLabel}
            closeLabel={closeMenuLabel}
            onClick={() => {
              setMenuOpen(open => !open);
            }}
          />
        </MNavbarHamburger>
      )}
    </nav>
  );
};
