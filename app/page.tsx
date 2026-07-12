"use client";

import { useEffect, useMemo, useState } from "react";

const agents = [
  { name: "Carina", role: "Command center", status: "Listening", color: "violet", icon: "C" },
  { name: "Hermes", role: "Research & routing", status: "Working", color: "cyan", icon: "H" },
  { name: "Clever AI", role: "Implementation", status: "Ready", color: "green", icon: "Cl" },
  { name: "ChatGPT", role: "Architecture & review", status: "Reviewing", color: "amber", icon: "G" },
];

const projects = [
  { name: "Dino AI Operating System", detail: "Agent orchestration", progress: 78, agents: "C · H · Cl" },
  { name: "OpenClaw Integration", detail: "Tools and automations", progress: 62, agents: "H · Cl" },
  { name: "Token Growth Engine", detail: "Earnings and rewards", progress: 41, agents: "C · G" },
];

const ledger = [
  { label: "Agent rewards", time: "Today, 9:42 AM", amount: "+420", token: "DINO" },
  { label: "Project milestone", time: "Yesterday, 6:18 PM", amount: "+1,250", token: "OPEN" },
  { label: "Staking yield", time: "Jul 8, 12:00 PM", amount: "+86", token: "USDC" },
];

export default function Home() {
  const [active, setActive] = useState("Command Center");
  const [listening, setListening] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("Carina");
  const [range, setRange] = useState("7D");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("All systems operational");
  const [engineRunning, setEngineRunning] = useState(false);
  const [whisperAlerts, setWhisperAlerts] = useState(true);
  const [engineEvents, setEngineEvents] = useState([
    { label: "Phone bridge", detail: "Context channel ready", time: "Now", tone: "cyan" },
    { label: "Workflow monitor", detail: "Safari · Carina Command Center", time: "9:48", tone: "violet" },
    { label: "System load", detail: "Nominal · 1.42 / 1.31 / 1.18", time: "9:47", tone: "green" },
  ]);
  const bars = useMemo(() => range === "24H" ? [18,24,22,31,29,44,51,48,66,61,78,83] : range === "30D" ? [22,32,28,38,45,42,58,54,63,72,69,84] : [28,34,31,48,42,56,62,55,68,74,71,86], [range]);

  const whisper = (frequency = 520) => {
    if (!whisperAlerts || typeof window === "undefined") return;
    const context = new window.AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.055, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.22);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.24);
    oscillator.addEventListener("ended", () => void context.close());
  };

  const setEngine = (running: boolean) => {
    setEngineRunning(running);
    setListening(running);
    setNotice(running ? "Carina orchestration engine activated" : "Carina orchestration engine paused");
    setEngineEvents(events => [{ label: running ? "Wake phrase detected" : "Stop phrase detected", detail: running ? "“Hey mami” · systems dispatched" : "“Mami stop” · execution safely paused", time: "Now", tone: running ? "green" : "amber" }, ...events].slice(0, 3));
    whisper(running ? 660 : 360);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    const command = message.trim();
    const normalized = command.toLowerCase();
    if (normalized.includes("hey mami") && !normalized.includes("stop")) setEngine(true);
    else if (normalized.includes("mami stop") || normalized.includes("maya stop") || normalized === "stop") setEngine(false);
    else setNotice(`${selectedAgent} received: “${command}”`);
    setMessage("");
  };

  useEffect(() => {
    if (!engineRunning) return;
    const timer = window.setInterval(() => {
      const load = (1.1 + Math.random() * 0.7).toFixed(2);
      setEngineEvents(events => [{ label: "System orchestration", detail: `Developer mode · load ${load}`, time: "Now", tone: "green" }, ...events].slice(0, 3));
    }, 8000);
    return () => window.clearInterval(timer);
  }, [engineRunning]);

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">C</span><div><strong>CARINA</strong><small>AI OPERATING SYSTEM</small></div></div>
        <nav aria-label="Primary navigation">
          {["Command Center", "Agents", "Projects", "Token Ledger", "Automations"].map((item, i) => (
            <button key={item} className={active === item ? "nav-item active" : "nav-item"} onClick={() => setActive(item)}><span>{["⌁","◉","▦","◈","⌘"][i]}</span>{item}{item === "Agents" && <b>4</b>}</button>
          ))}
        </nav>
        <div className="side-bottom">
          <div className="connection"><div className="connection-row"><span className="claw">OC</span><div><strong>OpenClaw</strong><small><i /> Connected</small></div><button aria-label="OpenClaw settings">•••</button></div><div className="latency"><span>SYNC STATUS</span><strong>Live · 24 ms</strong></div></div>
          <button className="profile"><span>LF</span><div><strong>Leandro</strong><small>Owner workspace</small></div><b>⌄</b></button>
        </div>
      </aside>

      <section className="workspace">
        <header><div><p className="eyebrow">{active.toUpperCase()} <span>•</span> LIVE</p><h1>Good morning, Leandro.</h1><p>{notice}</p></div><div className="header-actions"><button aria-label="Notifications" className="icon-button">♢<i /></button><button className="new-task" onClick={() => { setActive("Command Center"); setNotice("New task ready for your instructions"); }}>＋ New task</button></div></header>

        <div className="dashboard-grid">
          <section className="voice-panel panel">
            <div className="voice-copy"><span className="section-label">CARINA VOICE</span><h2>{listening ? "I’m listening…" : "What shall we work on?"}</h2><p>{listening ? "Speak naturally. I’ll route your request to the right agent." : "Speak to Carina, or type a command below."}</p></div>
            <button className={listening ? "orb listening" : "orb"} onClick={() => setEngine(!engineRunning)} aria-label={listening ? "Stop listening" : "Start talking to Carina"}><span className="orb-core">{listening ? "■" : "●"}</span><i className="ring one"/><i className="ring two"/></button>
            <div className="wave" aria-hidden="true">{Array.from({length: 25}).map((_,i)=><i key={i} style={{height: `${12 + ((i * 17) % 38)}px`}} />)}</div>
            <div className="command-box"><select value={selectedAgent} onChange={e=>setSelectedAgent(e.target.value)} aria-label="Choose agent">{agents.map(a=><option key={a.name}>{a.name}</option>)}</select><input value={message} onChange={e=>setMessage(e.target.value)} onKeyDown={e=>e.key === "Enter" && sendMessage()} placeholder={`Message ${selectedAgent}…`} aria-label={`Message ${selectedAgent}`} /><button onClick={sendMessage} aria-label="Send command">↑</button></div>
            <p className="secure-note">◉ Say “Hey mami” to activate · “Mami stop” to pause</p>
          </section>

          <section className="token-panel panel">
            <div className="panel-head"><div><span className="section-label">TOTAL TOKEN VALUE</span><h2>$24,680.42</h2></div><span className="gain">↗ 12.4%</span></div>
            <p className="subvalue">+$2,716.18 gained this month</p>
            <div className="chart"><div className="chart-bars">{bars.map((h,i)=><i key={i} style={{height:`${h}%`}} className={i===bars.length-1 ? "last":""}/>)}</div><div className="chart-line" /></div>
            <div className="range">{["24H","7D","30D"].map(r=><button key={r} className={range===r?"selected":""} onClick={()=>setRange(r)}>{r}</button>)}</div>
            <div className="holdings"><div><span className="coin purple">D</span><p><strong>DINO</strong><small>18,420 tokens</small></p><b>$12,840</b></div><div><span className="coin blue">O</span><p><strong>OPEN</strong><small>7,890 tokens</small></p><b>$8,420</b></div><div><span className="coin aqua">$</span><p><strong>USDC</strong><small>3,420 tokens</small></p><b>$3,420</b></div></div>
          </section>

          <section className="agents-panel panel"><div className="panel-title"><div><span className="section-label">AGENT NETWORK</span><h3>4 agents online</h3></div><button onClick={()=>setActive("Agents")}>Manage →</button></div><div className="agent-list">{agents.map(agent=><button key={agent.name} onClick={()=>{setSelectedAgent(agent.name);setNotice(`${agent.name} is selected and ready`);}} className={selectedAgent===agent.name?"agent selected":"agent"}><span className={`avatar ${agent.color}`}>{agent.icon}</span><p><strong>{agent.name}</strong><small>{agent.role}</small></p><em><i className={agent.status==="Ready"?"ready":""}/>{agent.status}</em></button>)}</div></section>

          <section className="projects-panel panel"><div className="panel-title"><div><span className="section-label">ACTIVE PROJECTS</span><h3>3 in motion</h3></div><button onClick={()=>setActive("Projects")}>View all →</button></div><div className="project-list">{projects.map(p=><button key={p.name} onClick={()=>setNotice(`${p.name}: ${p.progress}% complete`)}><div className="project-row"><div><strong>{p.name}</strong><small>{p.detail}</small></div><span>{p.agents}</span></div><div className="progress"><i style={{width:`${p.progress}%`}}/></div><small>{p.progress}% complete</small></button>)}</div></section>

          <section className="ledger-panel panel"><div className="panel-title"><div><span className="section-label">RECENT GAINS</span><h3>Token ledger</h3></div><button onClick={()=>setActive("Token Ledger")}>Full ledger →</button></div>{ledger.map((item,i)=><div className="ledger-row" key={item.label}><span className={`ledger-icon l${i}`}>↗</span><p><strong>{item.label}</strong><small>{item.time}</small></p><b>{item.amount}<small>{item.token}</small></b></div>)}</section>
          <section className="engine-panel panel"><div className="engine-head"><div><span className="section-label">SYSTEMS ENGINE</span><h3>Orchestration runtime</h3></div><button className={engineRunning ? "engine-toggle on" : "engine-toggle"} onClick={() => setEngine(!engineRunning)}><i />{engineRunning ? "Active" : "Paused"}</button></div><div className="engine-stats"><div><span>ACTIVE CONTEXT</span><strong>{engineRunning ? "Safari · Command Center" : "Waiting for wake phrase"}</strong></div><div><span>PHONE BRIDGE</span><strong>Connected · Leandro</strong></div><div><span>SCAN INTERVAL</span><strong>2.0 seconds</strong></div></div><div className="event-stream">{engineEvents.map((event, index) => <div className="engine-event" key={`${event.label}-${index}`}><span className={`event-dot ${event.tone}`} /><p><strong>{event.label}</strong><small>{event.detail}</small></p><time>{event.time}</time></div>)}</div><div className="engine-controls"><button onClick={() => setEngine(true)} disabled={engineRunning}>Hey mami</button><button onClick={() => setEngine(false)} disabled={!engineRunning}>Mami stop</button><label><input type="checkbox" checked={whisperAlerts} onChange={event => setWhisperAlerts(event.target.checked)} /><span>Whisper alerts</span></label></div></section>
        </div>
      </section>
    </main>
  );
}
