import { Link, Outlet } from 'react-router';
import { ShoppingCart, User, BookOpen } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <BookOpen className="w-8 h-8" />
              КнигоМир
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Главная
              </Link>
              <Link to="/catalog" className="text-gray-700 hover:text-blue-600">
                Каталог
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Link>
              <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <User className="w-6 h-6" />
                <span className="hidden sm:inline">Войти</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">КнигоМир</h3>
              <p className="text-gray-400 text-sm">
                Интернет-магазин книг. Нефункциональный прототип для демонстрации требований.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Навигация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/catalog" className="hover:text-white">Каталог</Link></li>
                <li><Link to="/cart" className="hover:text-white">Корзина</Link></li>
                <li><Link to="/login" className="hover:text-white">Вход</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Контакты</h3>
              <p className="text-gray-400 text-sm">
                Email: info@knigomir.ru<br />
                Телефон: +7 (800) 555-35-35
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2026 КнигоМир. Учебный нефункциональный прототип.
          </div>
        </div>
      </footer>
    </div>
  );
}
