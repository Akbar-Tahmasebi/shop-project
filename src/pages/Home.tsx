import Container from "../components/container";

function Home() {
  return (
    <Container>
        <h1 className="text-2xl pt-4 text-neutral-100">مینی پروژه فروشگاهی</h1>
      <div>
        <h2 className="text-xl pt-8 pb-4 text-neutral-200">ساخته شده</h2>
        <p className="text-lg text-neutral-300">Vite - React - Type Script - Tailwind Css - Router - Axios</p>
      </div>
      
      <div>
        <h3 className="text-xl pt-8 pb-4 text-neutral-200">امکانات پروژه</h3>
        <ul className="list-disc mr-5 text-neutral-300">
          <li>محصولات با اطلاعات دیتا ساخته می شود.</li>
          <li>سفارش محصول - افزایش و کاهش تعداد سفارش - حذف سفارش</li>
          <li>نمایش تعداد سفارشات در هدر پروژه.</li>
          <li>قابلیت لاگین کردن - خروج از لاگین<br/>نکته اول: برای بازید از سبد خرید باید لاگین کرد.<br/>نکته دوم: زمان لاگین بودن دسترسی به صفحه گالین نیست.</li>
          <li>ذخیر اطلاعات لاگین و سفارشات در مروگر.</li>
        </ul>
      </div>
    </Container>
  );
}

export default Home;
