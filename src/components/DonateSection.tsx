import DonateCard from "./DonateCard";

const DonateSection = () => {
  const donatePackages = [
    {
      title: "VIP",
      price: 299,
      originalPrice: 399,
      color: "bg-blue-500",
      features: [
        "Цветной ник в чате",
        "Приоритет входа на сервер",
        "3 дополнительных слота в рюкзаке",
        "Команда /fly в лобби",
        "Доступ к VIP-комнатам",
      ],
    },
    {
      title: "PREMIUM",
      price: 599,
      originalPrice: 799,
      popular: true,
      color: "bg-green-500",
      features: [
        "Все возможности VIP",
        "Личный дом (/sethome)",
        "Кит с ресурсами каждый день",
        "Возможность телепортации к игрокам",
        "Доступ к эксклюзивным мини-играм",
        "Скидка 20% в игровом магазине",
      ],
    },
    {
      title: "DELUXE",
      price: 999,
      originalPrice: 1299,
      color: "bg-purple-500",
      features: [
        "Все возможности PREMIUM",
        "Персональный префикс в чате",
        "Неограниченные дома (/home)",
        "Доступ к креативному режиму",
        "Эксклюзивные скины и плащи",
        "Приоритетная поддержка",
        "Доступ к бета-тестированию",
      ],
    },
  ];

  return (
    <section id="donate" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Донат-привилегии
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Поддержи сервер и получи эксклюзивные возможности! Все средства идут
            на развитие и улучшение игрового процесса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donatePackages.map((pkg, index) => (
            <DonateCard key={index} {...pkg} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            💳 Принимаем к оплате: Банковские карты, СБП, Qiwi, WebMoney
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
