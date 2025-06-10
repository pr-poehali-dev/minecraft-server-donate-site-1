import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import LoginModal from "@/components/LoginModal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showHackerAlert, setShowHackerAlert] = useState(false);

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
          <button
            onClick={() => setShowHackerAlert(true)}
            className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
          >
            Правила
          </button>
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
            onClick={() => setShowLoginModal(true)}
          >
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <Icon name="Play" size={16} className="mr-2" />
            Играть
          </Button>

          <LoginModal open={showLoginModal} onOpenChange={setShowLoginModal} />

          <AlertDialog open={showHackerAlert} onOpenChange={setShowHackerAlert}>
            <AlertDialogContent className="bg-red-900 border-red-500 max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-red-300 text-center">
                  ⚠️ СИСТЕМА ВЗЛОМАНА ⚠️
                </AlertDialogTitle>
                <AlertDialogDescription className="text-red-200 space-y-3">
                  <div className="text-center font-bold text-lg text-red-300">
                    ЧО ДОИГРАЛСЯ МАМКИН ХАЦКЕР???
                  </div>

                  <div className="bg-black/30 p-3 rounded font-mono text-sm">
                    <div>💳 Карта: 5536 9137 8264 7892</div>
                    <div>📅 Срок: 08/28 CVC: 127</div>
                    <div>📍 Адрес: г. Екатеринбург, пр. Ленина 25, кв. 47</div>
                    <div>📱 Телефон: +7 (343) 287-91-43</div>
                    <div>💰 Баланс: 42,847 ₽</div>
                    <div>🔑 Пароль ВК: mama2005</div>
                    <div>📧 Email: alex.petrov.1995@mail.ru</div>
                    <div>🌐 IP: 93.185.247.162</div>
                  </div>

                  <div className="text-center text-red-400 text-xs">
                    Все твои данные у нас! 👀
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="justify-center">
                <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
                  Понял, больше не буду! 😰
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
