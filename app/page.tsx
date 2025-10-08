import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,oklch(0.95_0.03_255),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-100px,oklch(0.23_0.06_255),transparent)]" />
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Badge className="bg-amber-500 text-black">شريكك التقني</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              نبني. نطلق. ننمو مع نيميريا
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              نصمم ونطوّر أنظمة ERP قوية، مواقع وتطبيقات ويب وموبايل، مع استشارات مستمرة لنمو أعمالك.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button className="gap-2" dir="rtl">
                ابدأ مشروعك <IconArrowLeft className="h-4 w-4" />
              </Button>
              <Button asChild variant="outline">
                <a href="#services">اطلع على خدماتنا</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/survey">شارك في الاستبيان</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">ماذا نقدم</h2>
          <p className="mt-3 text-muted-foreground">
            <span dir="rtl">حلول عملية من الفكرة إلى التنفيذ</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">أنظمة ERP</h3>
              <p className="mt-2 text-sm text-muted-foreground">نظام ERP مخصص لتسهيل العمليات التشغيلية.</p>
              <p className="mt-1 text-sm text-muted-foreground">أتمتة وتقارير • صلاحيات وتكاملات</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">تطبيقات ويب ومواقع</h3>
              <p className="mt-2 text-sm text-muted-foreground">سريعة، سهلة الاستخدام، ومجهزة للسيو.</p>
              <p className="mt-1 text-sm text-muted-foreground">Next.js + CMS • Design System</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">تطبيقات الجوال</h3>
              <p className="mt-2 text-sm text-muted-foreground">تطبيقات iOS و Android بأداء عالي الجودة.</p>
              <p className="mt-1 text-sm text-muted-foreground">متعدد المنصات • دعم غير متصل + إشعارات</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">استشارات تقنية</h3>
              <p className="mt-2 text-sm text-muted-foreground">مراجعات، خطط طريق، وقيادة تقنية.</p>
              <p className="mt-1 text-sm text-muted-foreground">مراجعة معمارية • تمكين الفريق</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px] lg:col-start-2">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">حلول للأعمال</h3>
              <p className="mt-2 text-sm text-muted-foreground">من ستارتب لكبريات الشركات.</p>
              <p className="mt-1 text-sm text-muted-foreground">نطاق ثابت أو فرق مخصصة • امتثال</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px] lg:col-start-3">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">صيانة ودعم</h3>
              <p className="mt-2 text-sm text-muted-foreground">اتفاقيات خدمة، تحديثات، ومتابعة مستمرة.</p>
              <p className="mt-1 text-sm text-muted-foreground">مراقبة وأداء • مراجعات أمنية</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y bg-secondary/50">
        <div className="container mx-auto px-6 py-14 flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold">هل أنت جاهز للبدء؟</h3>
          <p className="text-muted-foreground max-w-2xl">أرسل لنا فكرتك وسنعود إليك بخطة وجدول زمني وتكلفة.</p>
          <Button className="gap-2" dir="rtl">احصل على عرض مجاني <IconArrowLeft className="h-4 w-4" /></Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-semibold">تواصل معنا</h4>
            <p className="mt-2 text-muted-foreground">شاركنا بعض التفاصيل وسنعود إليك قريباً.</p>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">نيميريا • نصنع برمجيات موثوقة</span>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ContactForm
                isRtl
                labels={{
                  name: "الاسم",
                  namePlaceholder: "اسمك",
                  email: "الإيميل",
                  emailPlaceholder: "you@company.com",
                  message: "نبذة عن المشروع",
                  messagePlaceholder: "أخبرنا عن نظام ERP أو الموقع أو التطبيق أو الدعم الذي تحتاجه",
                  submit: "أرسل الرسالة",
                  successTitle: "تم الإرسال!",
                  successMessage: "شكراً، وصلتنا رسالتك وسنعود إليك قريباً.",
                  errorTitle: "حدث خطأ!",
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} نيميريا</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#services">الخدمات</a>
            <a className="hover:underline" href="/survey">الاستبيان</a>
            <a className="hover:underline" href="#contact">تواصل</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
