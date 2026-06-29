import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-blue-900" />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-semibold leading-none text-blue-900 tracking-tight">
              대한민국 특별 복지청 소속
            </span>
            <span className="text-sm sm:text-lg font-bold leading-tight text-gray-900 tracking-tight">
              N.P.S.I 중앙특수복지인재개발원
            </span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">기관 소개</a>
          <a href="#evaluation" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">평가 안내</a>
          <a href="#personnel" className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">훈련생 및 교관</a>
        </nav>
      </div>
    </header>
  );
}
