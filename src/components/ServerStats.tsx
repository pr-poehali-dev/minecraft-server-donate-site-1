import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServerStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "2,847",
      label: "Онлайн игроков",
      color: "text-green-400",
    },
    {
      icon: "Globe",
      value: "15,692",
      label: "Всего игроков",
      color: "text-blue-400",
    },
    {
      icon: "Zap",
      value: "24/7",
      label: "Время работы",
      color: "text-yellow-400",
    },
    {
      icon: "Trophy",
      value: "50+",
      label: "Мини-игр",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Статистика сервера
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-green-500/20 hover:border-green-500/40 transition-all"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 mb-4`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
