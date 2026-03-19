import { Link } from 'react-router';
import { LogIn, User, Lock } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Вход в систему</h1>
          <p className="text-gray-600">Войдите в свой аккаунт для продолжения</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                <span className="font-semibold">📝 НФТ:</span> Минимум 6 символов
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" disabled />
                <span className="ml-2 text-sm text-gray-600">Запомнить меня</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Забыли пароль?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              disabled
            >
              Войти
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">Демо-аккаунты:</p>
            <div className="text-xs text-blue-800 space-y-1">
              <div>👤 Пользователь: user@example.com / password</div>
              <div>🔑 Админ: admin@bookstore.com / admin123</div>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Нет аккаунта? </span>
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Зарегистрироваться
            </Link>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
          <span className="font-semibold">📝 Нефункциональное требование (Безопасность):</span>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>• Валидация email и пароля</li>
            <li>• В production: HTTPS для шифрования</li>
            <li>• В production: bcrypt для хеширования паролей</li>
            <li>• В production: JWT токены для сессий</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
