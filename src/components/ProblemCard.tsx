import { type Problem } from "@/data/problems";
import { Badge } from "@/components/ui/badge";

interface ProblemCardProps {
  problem: Problem;
  onClick: () => void;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-success/15 text-success border-success/20",
  Intermediate: "bg-warning/15 text-warning border-warning/20",
  Advanced: "bg-destructive/15 text-destructive border-destructive/20",
};

const ProblemCard = ({ problem, onClick }: ProblemCardProps) => {
  return (
    <button
      onClick={onClick}
      className="text-left w-full p-6 rounded-xl border border-border bg-card card-hover group"
    >
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="outline" className="text-xs font-medium border-border text-muted-foreground">
          {problem.category}
        </Badge>
        <Badge className={`text-xs font-medium border ${difficultyColors[problem.difficulty]}`}>
          {problem.difficulty}
        </Badge>
      </div>
      <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
        {problem.hmw}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {problem.context}
      </p>
    </button>
  );
};

export default ProblemCard;
