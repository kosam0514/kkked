import { ShieldAlert } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 text-sm text-gray-500">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">대한민국 특별 복지청 소속</span>
            <span className="font-bold text-gray-900 text-base">N.P.S.I 중앙특수복지인재개발원 (중앙훈련소)</span>
          </div>
          <p>© 2030 National Pension Special Incentive. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col max-w-md gap-2 rounded-lg bg-gray-100 p-4">
          <div className="flex items-center gap-2 text-red-600 font-semibold mb-1">
            <ShieldAlert className="h-4 w-4" />
            <span>용어 사용 주의 안내</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            N.P.S.I 담당관은 국가공인 자격을 취득한 특정직 복지 공무원 혹은 전문 파견직입니다. 공식 문서 및 훈련소 내부 규정에서 '국가공인구멍' 등의 비공식적이고 모욕적인 속칭 사용은 엄격히 금지됩니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
