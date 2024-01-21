import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
// 通过将 Inter 添加到 /app/layout.tsx 文件中的 <body> 元素，字体将应用于整个应用程序
export const inter = Inter({ subsets: ['latin'] });
// 在 fonts.ts 文件中，导入名为 Lusitana 的辅助字体，并将其传递给 /app/page.tsx 文件中的 <p> 元素
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});