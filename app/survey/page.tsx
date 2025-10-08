import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SurveyForm } from "@/components/SurveyForm";

export const metadata: Metadata = {
  title: "الاستبيان — ورينا التحديات البتواجهك",
  description: "أكتب لينا عن وضعك الحالي أو فكرتك. بنرجع ليك باستشارة مجانية.",
};

export default function SurveyPage() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-right">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            تسجيل اهتمام – استشارة تقنية مجانية
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              في زمن الحرب شركات كتيرة وقفت وبيانات ضاعت عشان ما كان في نظام ولا نسخ احتياطي يحميها
            </p>
            <p>
              والدنيا اتغيرت سريع، والتقنية بقت أساس في كل شغل.
            </p>
            <p>
              عشان كده نحن راجعين ✨ بخبرة جديدة عشان نساعدك تبني من أول وجديد، أو تطور فكرتك وتخليها واقع قدام عينيك.
            </p>
            <p className="font-medium text-foreground">
              سجّل بياناتك هنا 👇 وحنقدم ليك استشارة مجانية ونوريك كيف ترجع أقوى من زمان.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <SurveyForm
              isRtl
              labels={{
                company: "اسم الشركة / العمل",
                email: "البريد الإلكتروني",
                phone: "رقم الهاتف / واتساب",
                businessStatus: "هل عندك عمل قائم ولا فكرة داير تطورها؟",
                businessExisting: "عندي عمل قائم محتاج دعم تقني",
                businessIdea: "عندي فكرة لتطبيق/موقع جديد داير أطورها",
                industry: "المجال أو النشاط",
                industryPlaceholder: "اختر المجال",
                industryOptions: [
                  { value: "trade", label: "تجارة" },
                  { value: "industry", label: "صناعة" },
                  { value: "services", label: "خدمات" },
                  { value: "tech", label: "تقنية" },
                ],
                supportType: "نوع الدعم المطلوبة",
                supportOptions: [
                  { value: "infrastructure", label: "إعادة بناء البنية التحتية التقنية" },
                  { value: "development", label: "تطوير أو تحديث الأنظمة" },
                  { value: "ai", label: "إدخال حلول الذكاء الاصطناعي" },
                  { value: "consulting", label: "استشارات تقنية عامة" },
                  { value: "webapp", label: "تطوير تطبيق / موقع ويب" },
                  { value: "training", label: "تدريب ودعم الفريق" },
                ],
                challenge: "أكتب لينا باختصار التحدي أو الفكرة البتواجهك ؟",
                challengePlaceholder: "أكتب هنا...",
                submit: "أرسل الاستبيان",
                successTitle: "تم الإرسال!",
                successMessage: "شكراً، استبيانك وصلنا وبنتواصل معاك قريب.",
                errorTitle: "في مشكلة!",
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


