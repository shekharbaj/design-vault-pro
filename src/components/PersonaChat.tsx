import { useState } from "react";
import { X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Persona {
  name: string;
  age: number;
  role: string;
  bio: string;
  goals: string[];
  frustrations: string[];
}

interface Props {
  persona: Persona;
  onClose: () => void;
}

interface Message {
  role: "user" | "persona";
  text: string;
}

const generateResponse = (question: string, persona: Persona): string => {
  const q = question.toLowerCase();

  if (q.includes("frustrat") || q.includes("annoying") || q.includes("problem") || q.includes("struggle")) {
    return `Honestly, my biggest frustration is ${persona.frustrations[0].toLowerCase()}. And on top of that, ${persona.frustrations[1]?.toLowerCase() || "there are so many small things that add up"}.`;
  }
  if (q.includes("goal") || q.includes("want") || q.includes("wish") || q.includes("hope") || q.includes("need")) {
    return `What I really want is to ${persona.goals[0].toLowerCase()}. If I could also ${persona.goals[1]?.toLowerCase() || "just make my daily routine easier"}, that would be amazing.`;
  }
  if (q.includes("day") || q.includes("routine") || q.includes("typical")) {
    return `As a ${persona.role.toLowerCase()}, my days are pretty full. ${persona.bio.split(".").slice(1, 2).join(".")}. It's a lot to juggle.`;
  }
  if (q.includes("tech") || q.includes("app") || q.includes("tool") || q.includes("phone") || q.includes("computer")) {
    return `I use technology daily for work and personal life. But I find that most apps are designed for someone younger or more tech-savvy. ${persona.frustrations[Math.floor(Math.random() * persona.frustrations.length)]}.`;
  }
  if (q.includes("help") || q.includes("solve") || q.includes("improve") || q.includes("better")) {
    return `I think what would genuinely help is something that addresses ${persona.goals[0].toLowerCase()}. But it has to be simple—I don't have time to learn complicated new systems.`;
  }

  return `That's a great question. As someone who's ${persona.bio.split(".")[0].toLowerCase()}, I think about this a lot. My perspective is shaped by wanting to ${persona.goals[0].toLowerCase()}, but often ${persona.frustrations[0].toLowerCase()}.`;
};

const PersonaChat = ({ persona, onClose }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "persona", text: `Hi! I'm ${persona.name}. I'm a ${persona.role.toLowerCase()}, age ${persona.age}. Feel free to ask me anything about my experiences and needs.` },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    const response = generateResponse(input, persona);
    setMessages((prev) => [...prev, userMsg, { role: "persona", text: response }]);
    setInput("");
  };

  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Interview: {persona.name}</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3 max-h-[300px] overflow-y-auto mb-4 pr-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-xl text-sm ${
                m.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          className="bg-secondary border-border text-sm"
        />
        <button
          onClick={send}
          className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PersonaChat;
