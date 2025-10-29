import { ChevronDown, ChevronRight, Globe, Settings2Icon} from "lucide-react";
import "./Dashboard.css"
import { menus } from "./Dashboard";

const Dashboard = () => {

    
  return (
    <div className="flex flex-col h-screen w-screen max-w-6xl bg-backdrop border border-gray-700 rounded-2xl bg-background/20 backdrop-blur-lg ">
        <div className="dashboard-container flex flex-col h-full w-full">     
            
            <div className="dashboard-titlebar flex items-center gap-2 px-4">
                <div className="top-dot"></div>
                <div className="top-dot"></div>
                <div className="top-dot"></div>
            </div>

        <div className="flex flex-1 overflow-hidden">
            <div className="dashboard-sidebar ">
                <div className="space-y-1 p-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <img src="https://www.google.com/s2/favicons?domain=ficusbridge.com&sz=64" alt="Favicon" className="w-6 h-6"/>
                        <h2 className="text-sm font-semibold text-secondary">FicusBridge</h2>
                        <ChevronDown size={12} className="text-secondary " strokeWidth={4}/>
                    </div>
                    
                    <div className="flex items-center gap-1">
                        <div className="sidebar-dot"></div>
                        <div className="sidebar-dot"></div>
                        <div className="sidebar-dot"></div>
                    </div>
                </div>
                <ul className="space-y-1 px-3 mt-2">
                {menus.map((item, i) => (
                    item.isLabel ? (
                    <li key={i} className="text-xs font-semibold text-muted-foreground mt-4">{item.title}</li>
                    ) : (
                    <li key={i}>
                        <button className="w-full flex items-center gap-3 p-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 transition">
                        <item.icon size={16} className="opacity-80" />
                        {item.title}
                        </button>
                    </li>
                    )
                ))}
                </ul>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <div className="flex items-center mb-3 gap-1">
                        <span className="text-muted-foreground text-sm">Focus Bridge</span>
                        <ChevronRight size={16} className="text-secondary " strokeWidth={2}/>
                        <span className="text-secondary text-sm">Home</span>
                </div>

                <div className="mb-4">
                        <span className="text-secondary text-xl block text-left ">Home</span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                     <div className="flex items-center gap-2">   
                        <span className="text-muted-foreground text-sm  px-0 py-1  ">Last 24 hours</span>
                        <span className="text-secondary text-sm px-2 py-1 cursor-pointer bg-gray-800 transition rounded-md ">Last 7 days</span>
                        <span className="text-muted-foreground text-sm px-2 py-1  ">Last 28 days</span>
                        <span className="text-muted-foreground text-sm px-1 py-1  ">Custom range</span>
                        <ChevronDown size={12} className="text-muted-foreground text-center" strokeWidth={2}/>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-secondary text-sm px-2 py-1 cursor-pointer bg-gray-800 transition rounded-md "><Globe size={12} className="text-secondary text-center" strokeWidth={2}/>Region </span>
                        <span className="flex items-center gap-1 text-secondary text-sm px-2 py-1 cursor-pointer bg-gray-800 transition rounded-md "><Settings2Icon size={12} className="text-secondary text-center" strokeWidth={2}/>filter </span>  
                    </div>
                    
                </div>
                 <div className="border-t border-gray-700 w-full"/>
                
            </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;