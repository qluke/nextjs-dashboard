import SideNav from '@/app/ui/dashboard/sidenav';
 
{/* 
创建仪表板布局：
首先，将 <SideNav /> 组件导入到布局中。导入到此文件中的任何组件都将成为布局的一部分。
<Layout /> 组件接收一个名为 children 的属性，该属性是一个 React 节点类型的子组件。
这个子组件可以是一个页面或其他布局。在这个例子中，位于 /dashboard 路径的页面将自动嵌套在 <Layout /> 组件中。
*/}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}