import { Bell, Search, User } from "lucide-react";

export type TabType = "overview" | "products" | "orders";

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const navItems: { id: TabType; label: string }[] = [
    { id: "overview", label: "Visão Geral" },
    { id: "products", label: "Produtos" },
    { id: "orders", label: "Pedidos" },
  ];
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center">
                <img
                  src="/image/logo.png"
                  alt="VPO Tech logo"
                  className="h-8 sm:h-10"
                  draggable="false"
                />
              </div>
              <h1 className="text-2xl font-light text-slate-900 tracking-tight">
                Atlas
              </h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all w-64"
              />
            </div>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-200">
              <Bell className="w-5 h-5 text-slate-600" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-200">
              <User className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
