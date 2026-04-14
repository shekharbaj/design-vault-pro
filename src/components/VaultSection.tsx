import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { problems, categories, difficulties } from "@/data/problems";
import ProblemCard from "./ProblemCard";
import ProblemWorkspace from "./ProblemWorkspace";
import type { Problem } from "@/data/problems";

const VaultSection = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  const filtered = problems.filter((p) => {
    const matchesSearch =
      p.hmw.toLowerCase().includes(search.toLowerCase()) ||
      p.context.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === "All" || p.category === category;
    const matchesDiff = difficulty === "All" || p.difficulty === difficulty;
    return matchesSearch && matchesCat && matchesDiff;
  });

  if (selectedProblem) {
    return <ProblemWorkspace problem={selectedProblem} onBack={() => setSelectedProblem(null)} />;
  }

  return (
    <section id="vault" className="py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">The Vault</h2>
          <p className="text-muted-foreground">Select a challenge to enter the workspace.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search challenges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-secondary border-border"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {["All", ...difficulties].map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  difficulty === d
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProblemCard key={p.id} problem={p} onClick={() => setSelectedProblem(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No challenges match your filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default VaultSection;
