import { Link } from 'react-router';
import { BookPlus, ArrowLeft, Image as ImageIcon } from 'lucide-react';

export default function AdminAddBook() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600">Главная</Link>
        <span className="mx-2">/</span>
        <Link to="/admin" className="hover:text-blue-600">Админ-панель</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Добавить книгу</span>
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
          <BookPlus className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Добавить новую книгу</h1>
        </div>
        <p className="text-gray-600">Заполните информацию о книге для добавления в каталог</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Название книги *
            </label>
            <input
              type="text"
              placeholder="Война и мир"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Автор *
            </label>
            <input
              type="text"
              placeholder="Лев Толстой"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цена (₽) *
              </label>
              <input
                type="number"
                placeholder="1200"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория *
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              >
                <option>Выберите категорию</option>
                <option>Классика</option>
                <option>Поэзия</option>
                <option>Фантастика</option>
                <option>Детектив</option>
              </select>
            </div>
          </div>

          {/* ISBN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ISBN
            </label>
            <input
              type="text"
              placeholder="978-5-17-123456-7"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Описание *
            </label>
            <textarea
              rows={5}
              placeholder="Краткое описание книги..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Обложка книги
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-2">Перетащите изображение или</p>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                disabled
              >
                Выберите файл
              </button>
              <p className="text-xs text-gray-500 mt-2">PNG, JPG до 5MB</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              disabled
            >
              Добавить книгу
            </button>
            <Link
              to="/admin"
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
            >
              Отмена
            </Link>
          </div>
        </form>

        {/* Functional Requirement Note */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <span className="font-semibold">✅ Функциональное требование:</span> Администратор может добавлять новые книги в каталог.
          <br />
          <span className="text-gray-700">Этот экран реализует форму для создания новой книги с полями: название, автор, цена, категория, ISBN, описание и обложка.</span>
        </div>
      </div>
    </div>
  );
}
