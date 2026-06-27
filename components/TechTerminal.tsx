const terminalLines = [
  { type: "cmd" as const, prompt: "coastalcode", text: "npm run build" },
  { type: "out" as const, text: "✓ Compiled successfully in 6.3s" },
  { type: "cmd" as const, prompt: "coastalcode", text: "next dev --turbo" },
  { type: "out" as const, text: "→ http://localhost:3000" },
  { type: "cmd" as const, prompt: "coastalcode", text: "vercel deploy --prod" },
  { type: "out" as const, text: "🚀 Production: coastalcode.vercel.app" },
];

export default function TechTerminal() {
  return (
    <div
      className="tech-terminal reveal"
      style={{ ["--line-count" as string]: String(terminalLines.length) }}
      aria-label="Example development terminal"
    >
      <div className="tech-terminal-bar">
        <span className="tech-terminal-dot tech-terminal-dot--red" />
        <span className="tech-terminal-dot tech-terminal-dot--yellow" />
        <span className="tech-terminal-dot tech-terminal-dot--green" />
        <span className="tech-terminal-title">coastalcode — zsh</span>
      </div>
      <div className="tech-terminal-body">
        {terminalLines.map((line, index) => (
          <p
            key={`${line.type}-${index}`}
            className={`tech-terminal-line tech-terminal-line--${line.type}`}
            style={{ ["--line-i" as string]: String(index) }}
          >
            {line.type === "cmd" ? (
              <>
                <span className="tech-terminal-prompt">{line.prompt} % </span>
                <span className="tech-terminal-cmd">{line.text}</span>
              </>
            ) : (
              <span className="tech-terminal-output">{line.text}</span>
            )}
          </p>
        ))}
        <p
          className="tech-terminal-line"
          style={{ ["--line-i" as string]: String(terminalLines.length) }}
        >
          <span className="tech-terminal-prompt">coastalcode % </span>
          <span className="tech-terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
