import "./app.css";
import { useState } from "react";
import { Header, TabType } from "./components/header";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-slate-50 to-slate-100">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-7xl mx-auto px-6 py-8"></main>
    </div>
  );
}
