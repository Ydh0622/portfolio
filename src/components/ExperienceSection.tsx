import { GraduationCap, Award, Calendar } from 'lucide-react';

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
  type: 'education' | 'activity';
}

const timelineData: TimelineItem[] = [
  {
    id: 'global-hackathon',
    period: '2026.08',
    title: '부산-호치민 글로벌 해커톤 참여',
    organization: 'Global Hackathon',
    description:
      '제한된 시간 내에 팀원들과 협업하여 실전 웹 서비스 프로토타입을 기획하고 프론트엔드 UI 및 핵심 인터랙션을 빠르게 구현했습니다.',
    badge: 'Hackathon',
    type: 'activity',
  },
  {
    id: 'lgu-eureka',
    period: '2025.08 ~ 2026.03',
    title: 'LG U+ 유레카 프론트엔드 개발자 양성과정 수료',
    organization: '멀티캠퍼스 (총 1,080시간)',
    description:
      'React, TypeScript 기반의 모던 프론트엔드 아키텍처와 상태 관리, 현업 수준의 애자일 협업 프로세스(Git, Jira, Notion)를 집중적으로 학습하고 실무형 프로젝트를 완수했습니다.',
    badge: '1,080시간 수료',
    type: 'education',
  },
  {
    id: 'university',
    period: ' ~ 2026.03',
    title: '대학교 졸업 (학사 및 부전공 이수)',
    organization: 'University',
    description:
      '전공 및 부전공 과정을 이수하며 컴퓨터 공학 기초 소양과 논리적인 문제 해결 역량을 쌓았습니다.',
    badge: '졸업',
    type: 'education',
  },
  {
    id: 'sessac-hackathon',
    period: '2025.11',
    title: '새싹(SeSSAC) 해커톤 참여',
    organization: 'SeSSAC',
    description:
      '아이디어 구체화부터 프론트엔드 화면 설계까지 전 과정에 참여하며 빠른 실행력과 팀 단위 커뮤니케이션 역량을 길렀습니다.',
    badge: 'Hackathon',
    type: 'activity',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Education & Experience
          </h2>
          <p className="text-gray-600 mt-2">
            탄탄한 기본기와 실전 협업 감각을 기르기 위해 거쳐온 교육 및 대외 활동 이력입니다.
          </p>
        </div>

        <div className="space-y-6">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 md:p-7 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-200 transition-colors"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-3.5 h-3.5" />
                    ) : (
                      <Award className="w-3.5 h-3.5" />
                    )}
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-gray-500">{item.organization}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 shrink-0 md:self-start">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};