import { X, Layers, CheckCircle2, Wrench } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface Props {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-xl border border-gray-100 p-6 md:p-8 relative"
      >
        <button
          onClick={onClose}
          className="sticky top-0 float-right p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
            {project.period} · {project.team}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mt-3">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">담당 역할: {project.role}</p>
        </div>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
            <Layers className="w-4 h-4 text-indigo-600" /> 아키텍처 및 구조 설계
          </h4>
          <ul className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
            {project.architecture.map((item, i) => (
              <li key={i} className="text-sm text-gray-700 leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" /> 상세 구현 기능
          </h4>
          <ul className="space-y-2">
            {project.features.map((feat, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
            <Wrench className="w-4 h-4 text-indigo-600" /> 핵심 트러블슈팅 (문제 해결)
          </h4>
          <div className="space-y-4">
            {project.troubleshooting.map((ts, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                <p className="text-sm font-semibold text-red-600">
                  🚨 문제 상황: <span className="font-normal text-gray-800">{ts.problem}</span>
                </p>
                <p className="text-sm font-semibold text-indigo-600">
                  💡 해결 방법: <span className="font-normal text-gray-800">{ts.solution}</span>
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  ✅ 성과 및 결과: <span className="font-normal text-gray-800">{ts.result}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};