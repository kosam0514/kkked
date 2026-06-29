import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSTRUCTORS, TRAINEES, Character } from '../data';
import { BadgeCheck, GraduationCap, X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Personnel() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [costumeIndex, setCostumeIndex] = useState(0);

  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setCostumeIndex(0);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  const nextCostume = () => {
    setCostumeIndex((prev) => (prev + 1) % 5);
  };

  const prevCostume = () => {
    setCostumeIndex((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <section id="personnel" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">훈련생 및 교관 명단</h2>
          <p className="text-lg text-gray-600">
            당신의 오늘을 책임지기 위해 모인, 국가가 검증하는 인재들입니다.
          </p>
        </div>

        {/* Instructors */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-gray-200 pb-4">
            <BadgeCheck className="h-6 w-6 text-blue-800" />
            <h3 className="text-2xl font-bold text-gray-900">평가 및 전임 교관</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTRUCTORS.map((instructor, idx) => (
              <motion.div 
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => openModal(instructor)}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 group cursor-pointer"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={instructor.imageUrl} 
                    alt={instructor.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&background=1e3a8a&color=fff&size=512`;
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{instructor.name}</h4>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      교관
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic flex-grow">
                    "{instructor.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trainees */}
        <div>
          <div className="flex items-center gap-2 mb-8 border-b border-gray-200 pb-4">
            <GraduationCap className="h-6 w-6 text-blue-800" />
            <h3 className="text-2xl font-bold text-gray-900">특별 복지 담당관 후보생</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINEES.map((trainee, idx) => (
              <motion.div 
                key={trainee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => openModal(trainee)}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 group cursor-pointer"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                  <img 
                    src={trainee.imageUrl} 
                    alt={trainee.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(trainee.name)}&background=f3f4f6&color=111827&size=512`;
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{trainee.name}</h4>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      지원자
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic flex-grow">
                    "{trainee.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm md:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-t-3xl md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl h-[90dvh] md:h-auto md:max-h-[90vh]"
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-colors text-gray-900 shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Section */}
              <div className="relative w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 h-[45dvh] md:h-auto md:min-h-[600px] flex-shrink-0">
                <img
                  key={costumeIndex}
                  src={`https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/${selectedCharacter.code}${costumeIndex}.jpg`}
                  alt={`${selectedCharacter.name} 의상 ${costumeIndex}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                     (e.target as HTMLImageElement).src = selectedCharacter.imageUrl;
                  }}
                />
                
                {/* Navigation Controls */}
                <button 
                  onClick={prevCostume}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm text-gray-900 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextCostume}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white/80 rounded-full shadow-sm text-gray-900 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCostumeIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === costumeIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col bg-white overflow-y-auto">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider rounded-full w-fit mb-4 uppercase">
                  {selectedCharacter.role}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{selectedCharacter.name}</h3>
                
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 relative">
                  <span className="absolute -top-3 -left-2 text-6xl text-gray-200 font-serif">"</span>
                  <p className="text-lg text-gray-700 leading-relaxed relative z-10 italic">
                    {selectedCharacter.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500">
                  <p className="mb-2"><strong className="text-gray-700 font-semibold">의상 조회</strong></p>
                  <p>좌우 화살표를 클릭하거나 하단 점을 눌러 등록된 전체 복장(0~4)을 확인할 수 있습니다.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
