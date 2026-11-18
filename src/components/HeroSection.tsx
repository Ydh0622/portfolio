import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const HeroSection = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-6">
        Frontend Engineer
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
        복잡한 도메인과 로컬 환경을 <br className="hidden md:block" />
        <span className="text-indigo-600">직관적인 인터페이스</span>로 풀어냅니다.
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
        React와 TypeScript를 기반으로 유지보수하기 좋은 컴포넌트 아키텍처와 전역 상태 흐름을
        설계합니다. 실무 비즈니스 웹 서비스부터 Electron 데스크톱 유틸리티까지 사용자 경험을
        개선하는 도구를 직접 만듭니다.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm"
        >
          프로젝트 보기 <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="https://github.com/Ydh0622"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-700 border border-gray-200 font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          <GithubIcon className="w-4 h-4" /> GitHub
        </a>
        {/* 추후 3번째 프로젝트 및 PDF 수정 완료 시 아래 주석을 해제하세요
        <a
          href="/포트폴리오.pdf"
          download="프론트엔드_포트폴리오.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-sm"
        >
          PDF 포트폴리오
        </a>
        */}
      </div>
    </section>
  );
};