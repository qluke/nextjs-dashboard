import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      {/* Tailwind and CSS modules are the two most common ways of styling Next.js applications. Whether you use one or the other is a matter of preference - you can even use both in the same application! */}
      {/* <div className={styles.shape}/> */}
      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* Practice: Adding a secondary fontYou can also add fonts to specific elements of your application. */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          {/* <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> */}
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here  这段代码使用了 Next.js 的 Image 组件来显示两个图片，一个是桌面版本的截图，另一个是移动版本的截图。
          
          第一个 Image 组件的属性如下：
          src：指定了桌面版本截图的图片路径为 "/hero-desktop.png"。
          width 和 height：分别指定了图片的宽度和高度为 1000 和 760 像素。
          className：设置了一个 CSS 类名 "hidden md:block"，在移动设备上隐藏该图片，在桌面设备上显示该图片。
          alt：提供了一个替代文本描述，用于辅助技术和搜索引擎优化。

          第二个 Image 组件的属性如下：
          src：指定了移动版本截图的图片路径为 "/hero-mobile.png"。
          width 和 height：分别指定了图片的宽度和高度为 560 和 620 像素。
          className：设置了一个 CSS 类名 "block md:hidden"，在桌面设备上隐藏该图片，在移动设备上显示该图片。
          alt：提供了一个替代文本描述，用于辅助技术和搜索引擎优化。
          */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
       
      </div>
    </main>
  );
}
