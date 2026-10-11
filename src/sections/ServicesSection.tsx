import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Code2, Database, ShoppingCart, Wrench } from 'lucide-react';

interface SkillGroup {
  num: string;
  category: string;
  icon: React.ElementType;
  skills: string[];
  description: string;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    num: '01',
    category: 'Front-End',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 Canvas',
      'Three.js',
      'Responsive Design',
    ],
    description:
      'Xây dựng giao diện web chuẩn responsive, tối ưu chuyển động mượt mà và tương tác trực quan.',
  },
  {
    num: '02',
    category: 'Back-End & Database',
    icon: Database,
    skills: ['PHP', 'MySQL', 'JSON Server', 'RESTful API'],
    description:
      'Thiết kế cơ sở dữ liệu quan hệ, xử lý logic nghiệp vụ phía máy chủ và tích hợp RESTful API liền mạch.',
  },
  {
    num: '03',
    category: 'CMS & E-commerce',
    icon: ShoppingCart,
    skills: [
      'WordPress',
      'Tối ưu Yoast SEO',
      'Google Search Console',
      'Google Ads',
      'Cấu hình DNS/Hosting',
    ],
    description:
      'Triển khai website thương mại điện tử trọn gói, chuẩn SEO On-page và quản trị hạ tầng tên miền/hosting.',
  },
  {
    num: '04',
    category: 'Công cụ & UI/UX',
    icon: Wrench,
    skills: [
      'Visual Studio Code',
      'Figma (Wireframe, Prototype)',
      'Git / GitHub',
      'Antigravity',
      'OpenCode',
    ],
    description:
      'Quy trình làm việc chuyên nghiệp từ thiết kế wireframe, prototype đến quản lý mã nguồn và công cụ lập trình AI.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 select-none z-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2
              className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
            >
              Kỹ năng
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base uppercase tracking-widest text-neutral-500 font-medium">
              Kỹ năng chuyên môn &bull; Công nghệ &amp; Công cụ
            </p>
          </div>
        </FadeIn>

        {/* Skill Groups List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.num} delay={index * 0.1} y={30}>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 py-10 sm:py-12 border-b border-[rgba(12,12,12,0.15)] transition-colors duration-300 hover:bg-black/[0.015] px-2 sm:px-4">
                  {/* Left: Number & Category Title */}
                  <div className="flex items-start gap-4 sm:gap-6 lg:w-[38%] shrink-0">
                    <div
                      className="font-black text-[#0C0C0C] leading-none shrink-0"
                      style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
                    >
                      {group.num}
                    </div>

                    <div className="flex flex-col gap-1.5 pt-1">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-black/5 text-black">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0C0C0C]">
                          {group.category}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-sm mt-1">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Skill Badges / Tools */}
                  <div className="flex-1 flex flex-wrap gap-2 sm:gap-2.5 items-center pt-1 lg:pt-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0C0C0C]/[0.04] hover:bg-[#0C0C0C] text-[#0C0C0C] hover:text-[#FFFFFF] border border-[#0C0C0C]/10 transition-all duration-200 cursor-default shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
