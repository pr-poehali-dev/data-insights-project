import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ONETWOWEB сделали нам сайт с личным кабинетом для клиентов за 3 недели. Всё чётко, по ТЗ, без правок — сразу в продакшн. Уже через месяц пошли заявки с органики.",
    name: "Алексей Морозов",
    role: "Директор строительной компании",
  },
  {
    quote:
      "Заказывали мобильное приложение и сайт одновременно. Команда всё скоординировала, держала в курсе на каждом этапе. Результат превзошёл ожидания — приложение уже в App Store и Google Play.",
    name: "Марина Ковалёва",
    role: "Основатель сети кофеен",
  },
  {
    quote:
      "До ONETWOWEB наш сайт был на 5-й странице Google. После 3 месяцев SEO-продвижения — в топ-3 по ключевым запросам. Трафик вырос в 6 раз, заявки льются каждый день.",
    name: "Игорь Савельев",
    role: "Владелец интернет-магазина",
  },
  {
    quote:
      "Сделали нам полноценную платформу с кабинетом администратора, аналитикой и CRM-интеграцией. Команда профессионалов — поняли задачу с первого разговора.",
    name: "Ольга Петрова",
    role: "HR-директор, кадровое агентство",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Более 80 компаний уже доверили нам свои digital-проекты. Вот что они говорят о работе с ONETWOWEB.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}