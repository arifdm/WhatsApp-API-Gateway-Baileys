import { Analytics } from '@vercel/analytics/react';
// import { DashboardBreadcrumb } from '../../components/DashboardBreadcrumb';
import { DesktopNav } from '../../components/DesktopNav';
import { MobileNav } from '../../components/MobileNav';
import TooltipProviders from '../../components/providers';
import { SearchInput } from './search';
import { User } from '../../components/user';
import { DashboardBreadcrumb } from '../../components/DashboardBreadcrumb';

export default function DashboardLayout({ children }) {
  return (
    <TooltipProviders>
      <main className="flex min-h-screen w-screen flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <MobileNav />
            <DashboardBreadcrumb />
            <SearchInput />
            <User />
          </header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
        {/* <Analytics /> */}
      </main>
    </TooltipProviders>
  );
}
