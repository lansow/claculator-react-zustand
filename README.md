[English](#english-version) | [فارسی](#نسخه-فارسی)

---

<div dir="rtl">

# ماشین حساب React با Zustand

یک ماشین حساب ساده و مدرن ساخته شده با React و Zustand برای مدیریت حالت (state management).

![پیش‌نمایش ماشین حساب](https://img.shields.io/badge/React-19.2-blue)
![Zustand](https://img.shields.io/badge/Zustand-5.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ ویژگی‌ها

- عملیات‌های اصلی ریاضی: جمع، تفریق، ضرب، تقسیم
- طراحی واکنش‌گرا (Responsive) برای تمام دستگاه‌ها
- پشتیبانی از اعداد اعشاری
- قابلیت پاک کردن ورودی‌ها (Clear)
- حذف آخرین رقم (Delete)
- تاریخچه عملیات‌ها
- مدیریت حالت با Zustand
- پشتیبانی از تم تاریک و روشن (به زودی)
- طراحی مدرن و زیبا

## 🚀 شروع سریع

### پیش‌نیازها

- Node.js (ورژن 14 یا بالاتر)
- npm یا yarn

### نصب

1. ریپازیتوری را کلون کنید:
</div>

```bash
git clone https://github.com/your-username/react-zustand-calculator.git
cd react-zustand-calculator
```

<div dir="rtl">

2. وابستگی‌ها را نصب کنید:

</div>

```bash
npm install
# یا
yarn install
```

<div dir="rtl">

3. برنامه را اجرا کنید:

</div>

```bash
npm run dev
# یا
yarn run dev
```

<div dir="rtl">

4. مرورگر خود را باز کنید و به آدرس زیر بروید:

</div>

```
http://localhost:3050
```

<div dir="rtl">

## 🛠 فناوری‌های استفاده شده

- **React 19** - کتابخانه
- **Zustand 5** - مدیریت حالت
- **Vite** - بیلدر و دو‌لوپمنت سرور

## 📁 ساختار پروژه

</div>

```
src/
├── store/
│   ├── calculate/
|   |   ├──calculate.store.js
|   |   ├──calculate.state.js
|   |   └──calculate.action.js
|   └── theme/
|   |   ├──theme.store.js
|   |   ├──theme.state.js
|   |   └──theme.action.js
├── styles/
│   └── index.css
├── utils/
|   ├── keysArray.js
|   └── storeSelector.js
├── App.jsx
└── main.jsx

```

<div dir="rtl">

## 🧮 نحوه استفاده

1. اعداد را با کلیک روی دکمه‌های مربوطه وارد کنید
2. عملگر ریاضی مورد نظر را انتخاب کنید
3. عدد دوم را وارد کنید
4. دکمه مساوی (=) را فشار دهید
5. نتیجه محاسبه در صفحه نمایش داده می‌شود

### دکمه‌های ویژه:

- **CE**: پاک کردن تمام محاسبات
- **DEL**: حذف آخرین رقم
- **±**: تغییر علامت عدد (در دسترس نیست)
- **%**: محاسبه درصد (در دسترس نیست)

## 🧪 تست کردن (در دسترس نیست)

برای اجرای تست‌ها:

</div>

```bash
npm test
# یا
yarn test
```

<div dir="rtl">

## 📦 ساخت نسخه production (در دسترس نیست)

</div>

```bash
npm run build
# یا
yarn build
```

<div dir="rtl">

## 🤝 مشارکت

1. پروژه را فورک (Fork) کنید
2. برنچ (Branch) جدید ایجاد کنید (`git checkout -b feature/amazing-feature`)
3. تغییرات را کامیت کنید (`git commit -m 'Add amazing feature'`)
4. به برنچ اصلی پوش (Push) کنید (`git push origin feature/amazing-feature`)
5. پول ریکوئست (Pull Request) باز کنید

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است. برای اطلاعات بیشتر فایل [LICENSE](LICENSE) را مطالعه کنید.

## 👤 نویسنده

- **نام شما**
- [GitHub](https://github.com/lansow)
- [وبسایت](https://helionix.ir/)

## 🙏 تشکر

از شما برای استفاده از این پروژه متشکریم! اگر سوال یا پیشنهادی دارید، لطفاً یک Issue ایجاد کنید.

</div>

---

# React + Zustand Calculator

A simple and modern calculator built with React and Zustand for state management.

![Calculator Preview](https://img.shields.io/badge/React-19.2-blue)
![Zustand](https://img.shields.io/badge/Zustand-5.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- Basic mathematical operations: addition, subtraction, multiplication, division
- Responsive design for all devices
- Support for decimal numbers
- Clear input functionality
- Delete last digit
- Operation history
- State management with Zustand
- Dark/Light theme support
- Modern and beautiful design

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-zustand-calculator.git
cd react-zustand-calculator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the application:

```bash
npm run dev
# or
yarn run dev
```

4. Open your browser and navigate to:

```
http://localhost:3050
```

## 🛠 Technologies Used

- **React 19** - Library
- **Zustand 5** - State Management
- **Vite** - Builder & Dev Server

## 📁 Project Structure

```
src/
├── store/
│   ├── calculate/
|   |   ├──calculate.store.js
|   |   ├──calculate.state.js
|   |   └──calculate.action.js
|   └── theme/
|   |   ├──theme.store.js
|   |   ├──theme.state.js
|   |   └──theme.action.js
├── styles/
│   └── index.css
├── utils/
|   ├── keysArray.js
|   └── storeSelector.js
├── App.jsx
└── main.jsx
```

## 🧮 How to Use

1. Enter numbers by clicking the corresponding buttons
2. Select the desired mathematical operator
3. Enter the second number
4. Press the equals (=) button
5. The calculation result will be displayed

### Special Buttons:

- **C**: Clear all calculations
- **DEL**: Delete last digit
- **±**: Change sign (Not available)
- **%**: Percentage calculation (Not available)

## 🧪 Testing (Not available)

To run tests:

```bash
npm test
# or
yarn test
```

## 📦 Building for Production (Not available)

```bash
npm run build
# or
yarn build
```

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- **Your Name**
- [GitHub](https://github.com/lansow)
- [Website](https://helionix.ir/)

## 🙏 Acknowledgments

Thank you for using this project! If you have any questions or suggestions, please open an Issue.

---

**Version 0.1.0**
