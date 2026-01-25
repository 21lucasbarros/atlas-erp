import { Bell, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export type TabType =
  | "overview"
  | "employees" // relacionado a Employee e WorkHour
  | "clients" // relacionado a Client e Subscription
  | "projects" // relacionado a Project, Task e ProjectMember
  | "finance" // relacionado a Invoice, Payment e Expense
  | "tickets" // relacionado a Ticket e TicketMessage
  | "audit"; // relacionado a AuditLog (opcional para admin)

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const navItems: { id: TabType; label: string }[] = [
    { id: "overview", label: "Visão Geral" },
    { id: "clients", label: "Clientes" },
    { id: "projects", label: "Projetos" },
    { id: "finance", label: "Financeiro" },
    { id: "employees", label: "Equipe/RH" },
    { id: "tickets", label: "Suporte" },
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

            <nav className="hidden lg:flex space-x-1 overflow-x-auto">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === item.id
                      ? "bg-slate-900 text-[#f7f7f7] shadow-sm hover:bg-slate-900 hover:text-[#f7f7f7] hover:shadow-sm"
                      : "bg-transparent text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Label className="sr-only">Buscar</Label>
              <Input
                type="text"
                placeholder="Buscar em todo o sistema..."
                className="pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all w-64"
              />
            </div>
            <Button
              className="p-2 bg-transparent rounded-lg text-slate-600 hover:bg-slate-100"
              type="button"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button
              className="p-2 bg-transparent rounded-lg text-slate-600 hover:bg-slate-100"
              type="button"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
