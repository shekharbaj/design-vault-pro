import { useState, useEffect } from "react";
import { X, Target, Wrench, TrendingUp, Accessibility } from "lucide-react";
import type { Problem } from "@/data/problems";

interface Props {
  solution: string;
  problem: Problem;
  onClose: () => void;
}

const metrics = [
  { key: "desirability", label: "Desirability", icon: Target, description: "Does the user actually want this?" },
  { key: "feasibility", label: "Feasibility", icon: Wrench, description: "Can this be built with current technology?" },
  { key: "viability", label: "Viability", icon: TrendingUp, description: "Is this sustainable as a business?" },
  { key: "accessibility", label: "Accessibility", icon: Accessibility, description: "Can everyone use this equally?" },
];

const generateReview = (solution: string, problem: Problem) => {
  const length = solution.length;
  const mentionsPersona = solution.toLowerCase().includes(problem.persona.name.toLowerCase().split(" ")[0]);
  const mentionsConstraint = problem.constraints.some(c =>
    solution.toLowerCase().includes(c.toLowerCase().split(" ").slice(0, 3).join(" "))
  );

  const base = Math.min(40 + Math.floor(length / 15), 70);
  return {
    desirability: {
      score: Math.min(base + (mentionsPersona ? 15 : 0) + Math.floor(Math.random() * 10), 95),
      feedback: mentionsPersona
        ? `Strong user focus. You've considered ${problem.persona.name}'s core needs. Consider validating with additional user segments.`
        : `Your solution addresses the problem space but could more explicitly tie back to ${problem.persona.name}'s specific goals and frustrations.`,
    },
    feasibility: {
      score: Math.min(base + Math.floor(Math.random() * 15), 90),
      feedback: length > 200
        ? "Good level of technical detail. Consider breaking implementation into MVP phases to reduce risk."
        : "Add more implementation detail. What technologies or platforms would you use? What's the simplest possible version?",
    },
    viability: {
      score: Math.min(base - 5 + Math.floor(Math.random() * 15), 85),
      feedback: "Consider the revenue model and unit economics. Who pays for this? How does it scale without proportional cost increases?",
    },
    accessibility: {
      score: Math.min(base - 10 + (mentionsConstraint ? 20 : 0) + Math.floor(Math.random() * 10), 90),
      feedback: mentionsConstraint
        ? "You've addressed key constraints. Ensure WCAG 2.1 AA compliance and test with assistive technology users."
        : `Review the constraints more carefully. Key considerations: ${problem.constraints[0].toLowerCase()}.`,
    },
  };
};

const AIReviewPanel = ({ solution, problem, onClose }: Props) => {
  const [review, setReview] = useState<ReturnType<typeof generateReview> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReview(generateReview(solution, problem));
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [solution, problem]);

  return (
    <div className="p-6 rounded-xl border border-primary/20 bg-card glow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-primary">✦</span> Expert Feedback
        </h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 rounded-lg bg-secondary animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {metrics.map((m) => {
            const data = review![m.key as keyof typeof review];
            const color = data.score >= 70 ? "text-success" : data.score >= 50 ? "text-warning" : "text-destructive";
            return (
              <div key={m.key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <m.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{m.label}</span>
                  </div>
                  <span className={`text-sm font-bold ${color}`}>{data.score}/100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${data.score}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{data.feedback}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AIReviewPanel;
