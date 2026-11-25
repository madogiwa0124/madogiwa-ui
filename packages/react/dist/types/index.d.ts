import { ComponentProps } from 'react';
import { JSX } from 'react';
import { ReactNode } from 'react';

export declare const MAccordion: ({ transition, outline, className, ...props }: MAccordionProps) => JSX.Element;

export declare const MAccordionContent: ({ className, ...props }: MAccordionContentProps) => JSX.Element;

export declare type MAccordionContentProps = ComponentProps<"div">;

export declare type MAccordionProps = ComponentProps<"details"> & {
    transition?: boolean;
    outline?: boolean;
};

export declare const MAccordionSummary: ({ className, ...props }: MAccordionSummaryProps) => JSX.Element;

export declare type MAccordionSummaryProps = ComponentProps<"summary">;

export declare const MAlert: ({ variant, withProgress, autoDismiss, className, ...props }: MAlertProps) => JSX.Element;

export declare const MAlertActions: ({ className, ...props }: MAlertActionsProps) => JSX.Element;

export declare type MAlertActionsProps = ComponentProps<"div">;

export declare type MAlertAutoDismiss = "0s" | "3s" | "5s" | "10s";

export declare const MAlertContent: ({ className, ...props }: MAlertContentProps) => JSX.Element;

export declare type MAlertContentProps = ComponentProps<"div">;

export declare const MAlertIcons: ({ className, ...props }: MAlertIconsProps) => JSX.Element;

export declare type MAlertIconsProps = ComponentProps<"div">;

export declare type MAlertProps = ComponentProps<"div"> & {
    variant?: StatusVariant;
    withProgress?: boolean;
    autoDismiss?: MAlertAutoDismiss;
};

export declare const MBadge: <T extends MBadgeElement = "span">({ as, variant, outline, small, rounded, transition, className, ...props }: MBadgeProps<T>) => JSX.Element;

export declare type MBadgeElement = "span" | "button" | "a";

export declare type MBadgeProps<T extends MBadgeElement = "span"> = ComponentProps<T> & {
    as?: T;
    variant?: StatusVariant;
    outline?: boolean;
    small?: boolean;
    rounded?: boolean;
    transition?: boolean;
};

export declare const MBtn: ({ variant, outline, block, rounded, iconOnly, transition, className, type, ...props }: MBtnProps) => JSX.Element;

export declare type MBtnProps = ComponentProps<"button"> & {
    variant?: Variant;
    outline?: boolean;
    block?: boolean;
    rounded?: boolean;
    iconOnly?: boolean;
    transition?: boolean;
};

export declare const MCard: ({ className, floating, ...props }: MCardProps) => JSX.Element;

export declare const MCardContent: ({ className, ...props }: MCardContentProps) => JSX.Element;

export declare type MCardContentProps = ComponentProps<"div">;

export declare const MCardFooter: ({ className, ...props }: MCardFooterProps) => JSX.Element;

export declare type MCardFooterProps = ComponentProps<"div">;

export declare const MCardImage: ({ className, src, alt, ...props }: MCardImageProps) => JSX.Element;

export declare type MCardImageProps = Omit<ComponentProps<"img">, "src" | "alt"> & {
    src: string;
    alt: string;
};

export declare type MCardProps = ComponentProps<"div"> & {
    floating?: boolean;
};

export declare const MCheckbox: ({ className, ...props }: MCheckboxProps) => JSX.Element;

export declare type MCheckboxProps = Omit<ComponentProps<"input">, "type">;

export declare const MColumns: ({ columnsLength, autoFit, noGap, alignRows, className, ...props }: MColumnsProps) => JSX.Element;

export declare type MColumnsLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export declare type MColumnsProps = ComponentProps<"div"> & {
    columnsLength?: MColumnsLength;
    autoFit?: boolean;
    noGap?: boolean;
    alignRows?: boolean;
};

export declare const MContainer: ({ padding, noCentering, className, ...props }: MContainerProps) => JSX.Element;

export declare type MContainerProps = ComponentProps<"div"> & {
    padding?: boolean;
    noCentering?: boolean;
};

export declare const MDialog: ({ open, backdropBlur, transition, className, ...props }: MDialogProps) => JSX.Element;

export declare type MDialogProps = Omit<ComponentProps<"dialog">, "open" | "ref"> & {
    open?: boolean;
    backdropBlur?: boolean;
    transition?: boolean;
};

export declare const MH1: ({ className, ...props }: MH1Props) => JSX.Element;

export declare type MH1Props = ComponentProps<"h1">;

export declare const MH2: ({ className, ...props }: MH2Props) => JSX.Element;

export declare type MH2Props = ComponentProps<"h2">;

export declare const MH3: ({ className, ...props }: MH3Props) => JSX.Element;

export declare type MH3Props = ComponentProps<"h3">;

export declare const MH4: ({ className, ...props }: MH4Props) => JSX.Element;

export declare type MH4Props = ComponentProps<"h4">;

export declare const MH5: ({ className, ...props }: MH5Props) => JSX.Element;

export declare type MH5Props = ComponentProps<"h5">;

export declare const MH6: ({ className, ...props }: MH6Props) => JSX.Element;

export declare type MH6Props = ComponentProps<"h6">;

export declare const MInput: ({ block, error, transition, className, ...props }: MInputProps) => JSX.Element;

export declare type MInputProps = ComponentProps<"input"> & {
    block?: boolean;
    error?: boolean;
    transition?: boolean;
};

export declare const MLabel: ({ required, disabled, className, ...props }: MLabelProps) => JSX.Element;

export declare type MLabelProps = ComponentProps<"label"> & {
    required?: boolean;
    disabled?: boolean;
};

export declare const MLi: ({ className, ...props }: MLiProps) => JSX.Element;

export declare const MLink: ({ className, ...props }: MLinkProps) => JSX.Element;

export declare type MLinkProps = ComponentProps<"a">;

export declare type MLiProps = ComponentProps<"li">;

export declare const MNavbar: ({ title, mobileMenuVariant, closeOutsideClick, transition, openMenuLabel, closeMenuLabel, className, children, ...props }: MNavbarProps) => JSX.Element;

export declare const MNavbarHamburger: ({ className, ...props }: MNavbarHamburgerProps) => JSX.Element;

export declare const MNavbarHamburgerMenu: ({ expanded, openLabel, closeLabel, className, ...props }: MNavbarHamburgerMenuProps) => JSX.Element;

export declare type MNavbarHamburgerMenuProps = Omit<ComponentProps<"button">, "type" | "children"> & {
    expanded: boolean;
    openLabel?: string | undefined;
    closeLabel?: string | undefined;
};

export declare type MNavbarHamburgerProps = ComponentProps<"div">;

export declare const MNavbarItem: ({ end, className, ...props }: MNavbarItemProps) => JSX.Element;

export declare type MNavbarItemProps = ComponentProps<"li"> & {
    end?: boolean;
};

export declare const MNavbarItems: ({ className, ...props }: MNavbarItemsProps) => JSX.Element;

export declare type MNavbarItemsProps = ComponentProps<"ul">;

export declare type MNavbarMobileMenuVariant = "float" | "side" | "side-left";

export declare type MNavbarProps = Omit<ComponentProps<"nav">, "title"> & {
    title?: ReactNode;
    mobileMenuVariant?: MNavbarMobileMenuVariant;
    closeOutsideClick?: boolean;
    transition?: boolean;
    openMenuLabel?: string;
    closeMenuLabel?: string;
};

export declare const MNavbarTitle: ({ href, className, ...props }: MNavbarTitleProps) => JSX.Element;

export declare type MNavbarTitleProps = Omit<ComponentProps<"a">, "ref">;

export declare const MOl: ({ none, inline, className, ...props }: MOlProps) => JSX.Element;

export declare type MOlProps = ComponentProps<"ol"> & {
    none?: boolean;
    inline?: boolean;
};

export declare const MP: ({ className, ...props }: MPProps) => JSX.Element;

export declare type MPProps = ComponentProps<"p">;

export declare const MRadio: ({ className, ...props }: MRadioProps) => JSX.Element;

export declare type MRadioProps = Omit<ComponentProps<"input">, "type">;

export declare const MSelect: ({ error, className, ...props }: MSelectProps) => JSX.Element;

export declare type MSelectProps = ComponentProps<"select"> & {
    error?: boolean;
};

export declare const MSnackbar: ({ open, transition, position, className, ...props }: MSnackbarProps) => JSX.Element;

export declare const MSnackbarActions: ({ className, ...props }: MSnackbarActionsProps) => JSX.Element;

export declare type MSnackbarActionsProps = ComponentProps<"div">;

export declare const MSnackbarBody: ({ className, ...props }: MSnackbarBodyProps) => JSX.Element;

export declare type MSnackbarBodyProps = ComponentProps<"div">;

export declare type MSnackbarPosition = "right-bottom" | "left-top" | "right-top";

export declare type MSnackbarProps = Omit<ComponentProps<"div">, "popover" | "ref"> & {
    open?: boolean;
    transition?: boolean;
    position?: MSnackbarPosition;
};

export declare const MTable: ({ stripe, bordered, hoverable, fullWidth, transition, className, ...props }: MTableProps) => JSX.Element;

export declare type MTableProps = ComponentProps<"table"> & {
    stripe?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
    transition?: boolean;
};

export declare const MTabs: ({ transition, scrollhint, className, ...props }: MTabsProps) => JSX.Element;

export declare const MTabsItem: ({ active, type, className, ...props }: MTabsItemProps) => JSX.Element;

export declare type MTabsItemProps = Omit<ComponentProps<"button">, "role"> & {
    active?: boolean;
};

export declare const MTabsList: ({ className, onKeyDown, ...props }: MTabsListProps) => JSX.Element;

export declare type MTabsListProps = ComponentProps<"div">;

export declare type MTabsProps = ComponentProps<"div"> & {
    transition?: boolean;
    scrollhint?: boolean;
};

export declare const MTextarea: ({ block, error, autoFit, className, ...props }: MTextareaProps) => JSX.Element;

export declare type MTextareaProps = ComponentProps<"textarea"> & {
    block?: boolean;
    error?: boolean;
    autoFit?: boolean;
};

export declare const MToggle: ({ className, ...props }: MToggleProps) => JSX.Element;

export declare type MToggleProps = Omit<ComponentProps<"input">, "type">;

export declare const MUl: ({ none, inline, className, ...props }: MUlProps) => JSX.Element;

export declare type MUlProps = ComponentProps<"ul"> & {
    none?: boolean;
    inline?: boolean;
};

export declare type StatusVariant = Variant | "danger" | "warning";

export declare type Variant = "primary" | "secondary" | "tertiary";

export { }
