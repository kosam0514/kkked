import { motion } from 'motion/react';
import { EVALUATION_CRITERIA, OPERATING_GUIDELINES } from '../data';
import { CheckCircle2, XCircle } from 'lucide-react';

export function Evaluation() {
  return (
    <section id="evaluation" className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">실습 평가 안내</h2>
          <p className="text-lg text-gray-600">
            후보생들은 아직 정식 요원이 아니므로 주의사항을 완벽히 이행하지 못할 수 있습니다.<br />
            엄격하고 공정한 평가를 통해 현장 투입 여부를 결정합니다.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full sm:w-auto">
              <span className="text-sm font-medium text-gray-500 mb-1">합격 기준</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-blue-600">95</span>
                <span className="text-gray-500">점 이상</span>
              </div>
              <span className="text-xs text-blue-600 font-medium mt-1">현장 투입 가능</span>
            </div>
            <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full sm:w-auto">
              <span className="text-sm font-medium text-gray-500 mb-1">탈락(방출) 기준</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-red-600">40</span>
                <span className="text-gray-500">점 이하</span>
              </div>
              <span className="text-xs text-red-600 font-medium mt-1">즉시 방출 조치</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">10대 평가 항목</h3>
                <span className="text-sm font-medium text-blue-600">총 100점 만점</span>
              </div>
              <ul className="divide-y divide-gray-100">
                {EVALUATION_CRITERIA.map((criteria, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 sm:px-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-semibold text-gray-900">{criteria.name}</span>
                      <p className="text-sm text-gray-500 mt-1">{criteria.description}</p>
                    </div>
                    <div className="flex-shrink-0 whitespace-nowrap">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {criteria.score}점
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                기본 운영 지침
              </h3>
              <ul className="space-y-4">
                {OPERATING_GUIDELINES.map((guideline, index) => {
                  const [title, desc] = guideline.split(':');
                  return (
                    <li key={index} className="text-sm">
                      <strong className="text-gray-900 block mb-1">{title}</strong>
                      <span className="text-gray-600 leading-relaxed">{desc}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5" />
                엄격 금지 사항
              </h3>
              <ul className="space-y-3 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold">•</span>
                  <span>미성년자 등장 금지. 모든 인물은 성인입니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold">•</span>
                  <span>강압적 실습 금지. 동의 없는 실습은 불가합니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold">•</span>
                  <span>후보생의 불편 신호 및 중단 요청 무시 금지.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 font-bold">•</span>
                  <span>규정을 무시한 권력 행사 전개는 교관이 즉시 제지합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
