import { useState } from "react";
import { ArrowLeft, User, AlertTriangle, Sparkles, MessageCircle, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import type { Problem } from "@/data/problems";
import AIReviewPanel from "./AIReviewPanel";
import PersonaChat from "./PersonaChat";

interface Props {
  problem: Problem;
  onBack: () => void;
}

const ProblemWorkspace = ({ problem, onBack }: Props) => {
  const [solution, setSolution] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleExportPDF = () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`
      <html><head><title>Case Study - ${problem.hmw}</title>
      <style>
        body { font-family: Inter, system-ui, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; color: #1a1a1a; }
        h1 { font-size: 24px; margin-bottom: 8px; }
        h2 { font-size: 18px; margin-top: 32px; color: #06B6D4; }
        .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
        .section { margin-bottom: 24px; }
        p, li { line-height: 1.7; font-size: 15px; }
        ul { padding-left: 20px; }
        .badge { display: inline-block; padding: 2px 10px; border-radius: 6px; font-size: 12px; background: #f0f0f0; margin-right: 8px; }
      </style></head><body>
      <h1>${problem.hmw}</h1>
      <div class="meta"><span class="badge">${problem.category}</span><span class="badge">${problem.difficulty}</span></div>
      <h2>Context</h2><p>${problem.context}</p>
      <h2>Persona: ${problem.persona.name}</h2>
      <p><strong>${problem.persona.role}</strong>, Age ${problem.persona.age}</p>
      <p>${problem.persona.bio}</p>
      <h2>Constraints</h2><ul>${problem.constraints.map(c => `<li>${c}</li>`).join("")}</ul>
      <h2>Proposed Solution</h2><p>${solution || "<em>No solution provided.</em>"}</p>
      <script>window.print();</script>
      </body></html>
    `);
  };

  return (
    <section className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Vault
        </button>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Problem Details */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-border text-muted-foreground">{problem.category}</Badge>
                <Badge variant="outline" className="text-xs border-border text-muted-foreground">{problem.difficulty}</Badge>
              </div>
              <h2 className="text-xl font-bold mb-4 text-primary">{problem.hmw}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.context}</p>
            </div>

            {/* Persona */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{problem.persona.name}</h3>
                  <p className="text-xs text-muted-foreground">{problem.persona.role}, {problem.persona.age}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{problem.persona.bio}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-success mb-2">Goals</h4>
                  <ul className="space-y-1">
                    {problem.persona.goals.map((g, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-destructive mb-2">Frustrations</h4>
                  <ul className="space-y-1">
                    {problem.persona.frustrations.map((f, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <h3 className="font-semibold text-sm">Constraints</h3>
              </div>
              <ul className="space-y-2">
                {problem.constraints.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Solution Lab */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold mb-4">Solution Lab</h3>
              <Textarea
                placeholder="Describe your proposed solution here. Consider the persona's needs, goals, and frustrations. Address each constraint."
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                className="min-h-[280px] bg-secondary border-border resize-y text-sm"
              />
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => setShowReview(true)}
                  disabled={!solution.trim()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Sparkles className="h-4 w-4" /> Simulate Expert Feedback
                </button>
                <button
                  onClick={() => setShowChat(!showChat)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Interview Persona
                </button>
                <button
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <FileDown className="h-4 w-4" /> Export Case Study
                </button>
              </div>
            </div>

            {showReview && (
              <AIReviewPanel solution={solution} problem={problem} onClose={() => setShowReview(false)} />
            )}

            {showChat && (
              <PersonaChat persona={problem.persona} onClose={() => setShowChat(false)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemWorkspace;
