import '@/ui/global.css';
import {inter} from "@/ui/fonts"
import {SideNav} from "@/ui/components/SideNav";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav/>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <div className={'h-12 py-4 hidden md:block'}>
            <h1 className={'text-2xl'}>Dunscombe Family Movies</h1>
          </div>
          <div className={'py-6 md:py-12'}>
            {children}
          </div>
        </div>
      </div>
      </body>
      </html>
  );
}
