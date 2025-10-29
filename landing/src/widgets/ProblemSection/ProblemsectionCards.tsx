import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ProblemsectionCardsProps {
  icon: LucideIcon;
  title: string;
}

export default function ProblemsectionCards({ icon: Icon, title }: ProblemsectionCardsProps) {
  return (
    <Card className="bg-gradientProblemCards rounded-3xl p-6 w-[260px] h-[280px] flex flex-col justify-start text-center shadow-xl border-none">
      <CardContent className="flex flex-col items-center text-center px-0">
        <Icon className="w-10 h-10 text-secondary mb-4" strokeWidth={2.5} />
        <h3 className="text-secondary text-xl font-semibold mb-2 mt-6">{title}</h3>

      </CardContent>
    </Card>
  );
}
