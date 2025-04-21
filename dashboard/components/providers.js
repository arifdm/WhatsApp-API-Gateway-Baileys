import { TooltipProvider } from '@/components/ui/tooltip';

export default function TooltipProviders({ children }) {
  return <TooltipProvider delayDuration={100}>{children}</TooltipProvider>;
}
