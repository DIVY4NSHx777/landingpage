import { Home, Search, Inbox, Factory, MessageSquare, Layers, AtSign, TrendingUp } from "lucide-react";

export interface Menu {
    title: string;
    icon?: any;
    isLabel?: boolean;
}
export const menus: Menu[] = [
    { title: "Home", icon: Home },
    { title: "Search", icon: Search },
    { title: "Inbox", icon: Inbox },
    { isLabel: true, title: "Metrics" },
    { title: "Industry", icon: Factory },
    { title: "Topic", icon: MessageSquare },
    { title: "Model", icon: Layers },
    { title: "Citation", icon: AtSign },
    { title: "Improve", icon: TrendingUp },
  ];

