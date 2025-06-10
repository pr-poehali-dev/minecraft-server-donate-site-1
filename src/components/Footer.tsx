import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-green-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">MineServer</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший Minecraft сервер с уникальными возможностями и дружелюбным
              комьюнити.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Донат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Правила
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Форум
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Баг-репорт
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Подключение</h3>
            <div className="bg-slate-900 rounded-lg p-4">
              <p className="text-green-400 text-sm mb-2">IP сервера:</p>
              <p className="text-white font-mono">play.mineserver.ru</p>
            </div>
            <div className="mt-4">
              <p className="text-green-400 text-sm mb-2">Версия:</p>
              <p className="text-white">1.20.1 - 1.20.4</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 MineServer. Все права защищены. Minecraft является торговой
            маркой Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
