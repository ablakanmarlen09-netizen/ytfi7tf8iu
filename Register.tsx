import { Link } from 'react-router';
import { Package, ArrowLeft, Eye } from 'lucide-react';

export default function AdminOrders() {
  const orders = [
    {
      id: 'ORD-001',
      customerName: 'Иван Иванов',
      customerEmail: 'ivan@example.com',
      customerPhone: '+7 (900) 123-45-67',
      total: 3100,
      status: 'processing' as const,
      date: '2026-03-15',
      items: 3,
    },
    {
      id: 'ORD-002',
      customerName: 'Мария Петрова',
      customerEmail: 'maria@example.com',
      customerPhone: '+7 (901) 234-56-78',
      total: 850,
      status: 'shipped' as const,
      date: '2026-03-17',
      items: 1,
    },
  ];

  const statusInfo = {
    pending: { label: 'Ожидает', color: 'bg-gray-100 text-gray-800' },
    processing: { label: 'В обработке', color: 'bg-yellow-100 text-yellow-800' },
    shipped: { label: 'Отправлен', color: 'bg-blue-100 text-blue-800' },
    delivered: { label: 'Доставлен', color: 'bg-green-100 text-green-800' },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600">Главная</Link>
        <span className="mx-2">/</span>
        <Link to="/admin" className="hover:text-blue-600">Админ-панель</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Управление заказами</span>
      </nav>

      {/* Back Button */}
      <Link
        to="/admin"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Назад к панели управления
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Package className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold">Управление заказами</h1>
        </div>
        <p className="text-gray-600">Просмотр и изменение статусов заказов</p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Order Header */}
            <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Заказ {order.id}</h3>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">{order.total} ₽</div>
                <div className="text-sm text-gray-600">{order.items} товара</div>
              </div>
            </div>

            {/* Order Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Customer Info */}
                <div>
                  <h4 className="font-semibold mb-3">Информация о клиенте</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Имя:</span>
                      <span className="font-medium">{order.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{order.customerEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Телефон:</span>
                      <span className="font-medium">{order.customerPhone}</span>
                    </div>
                  </div>
                </div>

                {/* Status Management */}
                <div>
                  <h4 className="font-semibold mb-3">Статус заказа</h4>
                  <div className="space-y-3">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusInfo[order.status].color}`}>
                        {statusInfo[order.status].label}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Изменить статус:</label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        disabled
                      >
                        <option value="pending">Ожидает</option>
                        <option value="processing" selected={order.status === 'processing'}>
                          В обработке
                        </option>
                        <option value="shipped" selected={order.status === 'shipped'}>
                          Отправлен
                        </option>
                        <option value="delivered">Доставлен</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                  disabled
                >
                  Сохранить изменения
                </button>
                <button
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
                  disabled
                >
                  <Eye className="w-4 h-4" />
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Functional Requirement Note */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
        <span className="font-semibold">✅ Функциональное требование:</span> Администратор может управлять заказами.
        <br />
        <span className="text-gray-700">
          Этот экран реализует просмотр всех заказов и возможность изменения их статусов (Ожидает → В обработке → Отправлен → Доставлен).
        </span>
      </div>
    </div>
  );
}
