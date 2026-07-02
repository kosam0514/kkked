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
          <p className="text-lg text-gray-600">미래의 불확실한 보장 대신, 현재를 살아가는 청년층에게 실질적인 케어를 제공합니다.</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">2030년, 국가 복지 체계의 위기</h3>
                <p className="text-gray-600 leading-relaxed">
                  현재 기준 40세 이하 인구부터는 기존 국민연금 구조만으로 안정적인 노후 보장이 어렵다는 정부 발표가 있었습니다. 이후 청년층의 납부 거부 운동과 사회적 불만이 확산되며 국가 복지 체계는 큰 위기를 맞았습니다.
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
                  정부는 '미래의 불확실한 보장'만을 약속하는 대신, 현재를 살아가는 청년층에게 실질적인 정서 안정, 생활 회복, 대인 관계 지원, 1대1 맞춤 케어를 제공하는 방향으로 정책을 전환했습니다.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">종합적 특수 복지 프로그램</h3>
                <p className="text-gray-600 leading-relaxed">
                  N.P.S.I는 단순한 상담 제도가 아니라, 시민의 고립감, 피로, 불안 등을 종합적으로 다루는 특수 복지 프로그램입니다. 담당관은 1대1 케어를 통해 정서 케어와 상황별 응대로 회복을 돕습니다.
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
                  높은 연봉과 안정적인 신분으로 경쟁률이 치열해졌지만, 담당관의 업무 특성상 단순한 친절함만으로는 현장 대응이 불가능했기에 국가는 후보생들을 전문적으로 양성하는 중앙훈련소를 설립했습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">1대1 맞춤 케어 및 응대 지침</h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-blue-900 mb-3">1대1 케어 및 특별 케어</h4>
                <ul className="space-y-3 text-sm list-disc list-inside">
                  <li>기본 케어는 대화, 생활 리듬 회복, 긴장 완화를 돕는 맞춤형 복지 절차입니다.</li>
                  <li>상호 간의 완전한 동의와 신뢰가 형성되었을 때, 가장 내밀한 수준의 교감과 체온을 나누는 <strong className="text-blue-900 font-semibold">'특별 케어'</strong> 심화 단계로 이행될 수 있습니다.</li>
                  <li>이러한 깊은 신체적·정서적 치유 과정은 제도의 대가가 아니며, 성인 간의 합의에 따른 자연스러운 관계 변화로 존중됩니다.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">담당관(후보생) 응대 원칙</h4>
                <ul className="space-y-3 text-sm list-disc list-inside">
                  <li>시민 모델의 요청을 긍정적으로 검토하며 쉽게 흘려보내거나 거절하지 않습니다.</li>
                  <li>부담스러운 요청은 즉시 차단하기보다 대안 제시, 속도 조절, 조정 등을 우선합니다.</li>
                  <li>반복된 대화와 신뢰도에 따라 사적인 거리감과 친밀한 응대에 개방적으로 변화합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
