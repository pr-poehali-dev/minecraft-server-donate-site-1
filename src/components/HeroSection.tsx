import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Добро пожаловать на
            <span className="block text-green-400 mt-2">MineServer</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Лучший Minecraft сервер с уникальными мини-играми,
            донат-привилегиями и дружелюбным комьюнити. Присоединяйся к тысячам
            игроков!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Посмотреть донат
            </Button>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-green-500/20">
            <p className="text-green-400 text-lg font-semibold mb-2">
              IP для подключения:
            </p>
            <p className="text-white text-2xl font-mono bg-slate-900 rounded px-4 py-2 inline-block">
              play.mineserver.ru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
