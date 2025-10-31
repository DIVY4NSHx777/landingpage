import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ProblemsectionCardsProps {
  icon: LucideIcon;
  title: string;
  textColor?: string;
  iconBackground?: string;
}

export default function ProblemsectionCards({ 
  icon: Icon, 
  title, 
  iconBackground = 'bg-gradientProblemCards'
}: ProblemsectionCardsProps) {
  return (
    <div className="relative group w-[260px] h-[380px] ">
      <div className="absolute inset-0 rounded-2xl -z-10 opacity-60 blur-xl bg-gradientHeading transition-all duration-500 group-hover:opacity-90"/>
      <Card className="bg-cards rounded-3xl p-6 w-full h-full flex flex-col justify-start text-center border border-black backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]">
        <CardContent className="flex flex-col items-center text-center px-0 py-8">
          <Icon 
            className={`w-12 h-12 text-secondary mb-12 rounded-full p-2 ${iconBackground}`} 
            strokeWidth={2.5} 
          />
          <h3 className="text-xl font-semibold mb-2 mt-6 bg-gradientHeading bg-clip-text text-transparent">
            {title}
          </h3>
        </CardContent>
      </Card>
    </div>
  );
}
