import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Полный цикл", description: "От анализа и проектирования до запуска, SEO и поддержки — всё в одном месте" },
  { title: "Прозрачность", description: "Фиксированные сроки, чёткое ТЗ и понятная стоимость без скрытых платежей" },
  { title: "Качество кода", description: "Чистый, масштабируемый код с документацией — сайт работает быстро и без сбоев" },
  { title: "Клиентоориентированность", description: "Ваш бизнес в центре внимания — слушаем, предлагаем, реализуем" },
  { title: "Масштабируемость", description: "Архитектура, которая растёт вместе с вашим бизнесом без переписывания с нуля" },
  { title: "Поддержка 24/7", description: "Всегда на связи — оперативно реагируем на любые вопросы и задачи" },
]

const stats = [
  { number: "100+", label: "Проектов" },
  { number: "80+", label: "Довольных клиентов" },
  { number: "50+", label: "Приложений" },
  { number: "5+", label: "Лет опыта" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О ONETWOWEB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Результат, который{" "}
            <span className="text-primary relative">
              говорит сам
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            ONETWOWEB — digital-агентство полного цикла. Мы берём проект от первой идеи и доводим до работающего продукта, который приносит реальные заявки и деньги.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}