import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    emailOrPhone?: string;
    password?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { emailOrPhone?: string; password?: string } = {};

    // Валидация email или телефона
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if (!emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Введите email или номер телефона";
    } else if (
      !emailRegex.test(emailOrPhone) &&
      !phoneRegex.test(emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Неверный формат email или телефона";
    }

    // Валидация пароля
    if (!password.trim()) {
      newErrors.password = "Введите пароль";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Вход:", { emailOrPhone, password });
      // Здесь будет логика авторизации
      onOpenChange(false);
      setEmailOrPhone("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-green-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-green-400 text-xl">
            Вход в аккаунт
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Войдите с помощью email или номера телефона
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emailOrPhone" className="text-gray-300">
              Email или номер телефона
            </Label>
            <Input
              id="emailOrPhone"
              type="text"
              placeholder="example@email.com или +7 (999) 123-45-67"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
            />
            {errors.emailOrPhone && (
              <p className="text-red-400 text-sm">{errors.emailOrPhone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Пароль
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-green-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col space-y-3 pt-4">
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>

            <div className="text-center">
              <a
                href="#forgot"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Забыли пароль?
              </a>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
