import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
 
// 这段代码定义了一个名为 SideNav 的组件，用于创建仪表板的侧边导航栏。
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40" href="/">
        {/* 在导航链接内部，有一个包含 <AcmeLogo /> 组件的 <div> 元素，用于显示 Acme 公司的标志。 */}
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* 在这个 <div> 元素内部，首先使用 <NavLinks /> 组件来显示导航链接列表。 */}
        <NavLinks />
        {/* 然后，在大屏幕上显示一个空白区域的 <div> 元素 */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* 最后，在一个 <form> 元素内部，定义了一个处理注销操作的按钮。form 元素的 action 属性设置为一个异步函数，使用 signOut 函数来处理用户的注销操作。 */}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
