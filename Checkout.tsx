import React, { createContext, useContext, ReactNode } from 'react';

// НЕФУНКЦИОНАЛЬНЫЙ ПРОТОТИП
// Это статичные данные для визуализации интерфейса
// Никакие функции не работают - это только макеты экранов

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  description: string;
  isbn: string;
  category: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

interface User {
  email: string;
  name: string;
  isAdmin: boolean;
}

interface AppContextType {
  books: Book[];
  cart: CartItem[];
  user: User | null;
  orders: Order[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Статичные демо-данные для визуализации
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 1200,
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
    description: 'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона.',
    isbn: '978-5-17-123456-7',
    category: 'Классика',
  },
  {
    id: '2',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    price: 950,
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    description: 'Психологический роман о студенте Раскольникове, решившемся на преступление.',
    isbn: '978-5-17-234567-8',
    category: 'Классика',
  },
  {
    id: '3',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 850,
    cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=600&fit=crop',
    description: 'Роман о дьяволе, посетившем атеистическую Москву, и истории Мастера и его возлюбленной.',
    isbn: '978-5-17-345678-9',
    category: 'Классика',
  },
  {
    id: '4',
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    price: 750,
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    description: 'Роман в стихах, энциклопедия русской жизни начала XIX века.',
    isbn: '978-5-17-456789-0',
    category: 'Поэзия',
  },
  {
    id: '5',
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    price: 1100,
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop',
    description: 'Роман о трагической любви замужней дамы и офицера на фоне семейных отношений.',
    isbn: '978-5-17-567890-1',
    category: 'Классика',
  },
  {
    id: '6',
    title: 'Идиот',
    author: 'Фёдор Достоевский',
    price: 900,
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    description: 'Роман о князе Мышкине, человеке исключительной доброты в циничном обществе.',
    isbn: '978-5-17-678901-2',
    category: 'Классика',
  },
];

const mockCart: CartItem[] = [
  { book: mockBooks[0], quantity: 1 },
  { book: mockBooks[1], quantity: 2 },
];

const mockUser: User | null = null; // По умолчанию не авторизован

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { book: mockBooks[0], quantity: 1 },
      { book: mockBooks[1], quantity: 2 },
    ],
    total: 3100,
    customerName: 'Иван Иванов',
    customerEmail: 'ivan@example.com',
    customerPhone: '+7 (900) 123-45-67',
    address: 'г. Москва, ул. Пушкина, д. 10, кв. 5',
    status: 'processing',
    date: '2026-03-15',
  },
  {
    id: 'ORD-002',
    items: [{ book: mockBooks[2], quantity: 1 }],
    total: 850,
    customerName: 'Мария Петрова',
    customerEmail: 'maria@example.com',
    customerPhone: '+7 (901) 234-56-78',
    address: 'г. Санкт-Петербург, Невский пр., д. 25',
    status: 'shipped',
    date: '2026-03-17',
  },
];

export function AppProvider({ children }: { children: ReactNode }) {
  // СТАТИЧНЫЕ ДАННЫЕ - функции не работают
  const value: AppContextType = {
    books: mockBooks,
    cart: mockCart,
    user: mockUser,
    orders: mockOrders,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
