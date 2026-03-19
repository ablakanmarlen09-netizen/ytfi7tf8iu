import { Link } from 'react-router';
import { LayoutDashboard, BookPlus, Package, TrendingUp, Users, ShoppingBag } from 'lucide-react';

export default function Admin() {
  const stats = [
    { label: 'Всего книг', value: '6', icon: BookPlus, color: 'blue' },
    { label: 'Активных заказов', value: '2', icon: ShoppingBag, color: 'green' },
    { label: 'Пользователей', value: '15', icon: Users, color: 'purple' },
    { label: 'Выручка (месяц)', value: '125,450 ₽', icon: TrendingUp, color: 'orange' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <LayoutDashboard className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Панель администратора</h1>
        </div>
        <p className="text-gray-600">Управление интернет-магазином КнигоМир</p>

        {/* Admin Notice */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
          <span className="font-semibold">🔑 Доступ только для администраторов</span>
          <br />
          <span className="text-gray-700">Для демонстрации функционального требования: "Администратор может управлять системой"</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
          };

          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link
          to="/admin/add-book"
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
              <BookPlus className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Добавить книгу</h3>
              <p className="text-sm text-gray-600">Создать новую книгу в каталоге</p>
            </div>
            <div className="text-blue-600">→</div>
          </div>
        </Link>

        <Link
          to="/admin/orders"
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Управление заказами</h3>
              <p className="text-sm text-gray-600">Просмотр и изменение статусов заказов</p>
            </div>
            <div className="text-green-600">→</div>
          </div>
        </Link>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Последние заказы</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">Заказ #ORD-001</div>
              <div className="text-sm text-gray-600">Иван Иванов • 2026-03-15</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">3,100 ₽</div>
              <div className="text-sm">
                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                  В обработке
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="font-semibold">Заказ #ORD-002</div>
              <div className="text-sm text-gray-600">Мария Петрова • 2026-03-17</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">850 ₽</div>
              <div className="text-sm">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  Отправлен
                </span>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/admin/orders"
          className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
        >
          Посмотреть все заказы →
        </Link>
      </div>
    </div>
  );
}
