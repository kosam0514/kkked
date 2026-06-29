import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-900 text-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full bg-blue-800/50 px-3 py-1 text-sm font-medium text-blue-200 mb-8 border border-blue-700/50"
        >
          2030 국가 특별 복지 대응 체계
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          “당신의 오늘이 헛되지 않도록.<br />
          <span className="text-blue-300">그 오늘을 책임질 사람을 기른다.</span>”
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light"
        >
          N.P.S.I 중앙특수복지인재개발원은 국가가 보장하는 합법적인 특수 복지 서비스를 제공할 특별 복지 담당관 후보생을 양성하는 국가공인 전문 훈련 기관입니다.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
            제도 안내 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
