import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 border-b border-green-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Icon name="Gamepad2" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">MineServer</h1>
            <p className="text-green-400 text-sm">Лучший сервер</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Главная
          </a>
          <a
            href="#donate"
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Донат
          </a>
          <a
            href="#rules"
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Правила
          </a>
          <a
            href="#forum"
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Форум
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
          >
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Icon name="Play" size={16} className="mr-2" />
            Играть
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
