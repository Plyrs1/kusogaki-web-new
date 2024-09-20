interface SidebarItem {
    name: string;
    icon?: string;
    href?: string;
    subitem?: Array<SidebarItem>;
    unread?: number;
}

export { SidebarItem }
