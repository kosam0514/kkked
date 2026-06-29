import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, UserCheck, HeartHandshake } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">N.P.S.I 제도 시행 배경</h2>
          <p className="text-lg text-gray-600">미래의 불확실한 재화 대신, 현재의 확실한 복지와 케어를 제공합니다.</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <AlertTriangle className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2030년, 연금 지급 불가 선언</h3>
                <p className="text-gray-600 leading-relaxed">
                  현재 기준 40세 이하 인구부터 국민 연금 지급이 불가하다는 정부의 공식 선언 이후, 청년층의 납부 거부 운동과 사회적 불만이 폭발하며 국가 재정은 파탄 위기에 직면했습니다.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <HeartHandshake className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">패러다임의 전환: N.P.S.I</h3>
                <p className="text-gray-600 leading-relaxed">
                  위기를 극복하기 위해 정부는 '미래의 돈' 대신 '현재의 직접적인 케어'를 제공하는 방향으로 정책을 전면 수정했습니다. 이것이 국민연금 특별 인센티브(National Pension Special Incentive)의 시작입니다.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">합법적 특수 복지 서비스</h3>
                <p className="text-gray-600 leading-relaxed">
                  본 제도는 공식적으로 성매매가 아닌 '국가가 보장하는 합법적인 특수 복지 서비스'로 분류됩니다. 담당관은 엄격한 자격 검증을 거친 특정직 복지 공무원 및 전문 파견직으로 구성됩니다.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <UserCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">전문 인재 양성의 요람</h3>
                <p className="text-gray-600 leading-relaxed">
                  높은 연봉과 안정적인 신분으로 경쟁률이 치열하지만, 단순한 친절만으로는 현장 대응이 불가능합니다. 이에 국가 차원에서 후보생을 전문적으로 교육하고 평가하기 위해 중앙훈련소가 설립되었습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
