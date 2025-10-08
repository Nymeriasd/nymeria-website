import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SurveyForm } from "@/components/SurveyForm";

export const metadata: Metadata = {
  title: "الاستبيان — استشارة تقنية مجانية",
  description: "شاركنا وضعك الحالي أو فكرتك. سنعود إليك باستشارة مجانية.",
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
              خلال الأزمات، توقفت العديد من الشركات وفقدت البيانات بسبب عدم وجود نظام أو نسخ احتياطية.
            </p>
            <p>
              العالم يتغير بسرعة، والتقنية أصبحت أساسية في كل عمل.
            </p>
            <p>
              نحن هنا ✨ بخبرة جديدة لمساعدتك على البناء من الصفر، أو تطوير فكرتك لتصبح واقعاً.
            </p>
            <p className="font-medium text-foreground">
              سجّل بياناتك هنا 👇 وسنقدم لك استشارة مجانية ونوضح لك كيف تعود أقوى.
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
                businessStatus: "هل لديك عمل قائم أم فكرة تريد تطويرها؟",
                businessExisting: "لدي عمل قائم يحتاج دعماً تقنياً",
                businessIdea: "لدي فكرة لتطبيق/موقع جديد أريد تطويرها",
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
                challenge: "صف لنا باختصار التحدي أو الفكرة",
                challengePlaceholder: "اكتب هنا...",
                submit: "أرسل الاستبيان",
                successTitle: "تم الإرسال!",
                successMessage: "شكراً، وصلنا استبيانك وسنتواصل معك قريباً.",
                errorTitle: "حدث خطأ!",
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


