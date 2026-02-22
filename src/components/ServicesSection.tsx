import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Smartphone, Code, Search, UserCircle, Layers } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Создание сайтов",
    description:
      "Разрабатываем современные, быстрые и конверсионные сайты любой сложности — лендинги, корпоративные сайты, интернет-магазины. Каждый проект создаётся индивидуально под цели вашего бизнеса.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description:
      "Создаём нативные и кросс-платформенные приложения для iOS и Android. Удобный интерфейс, высокая производительность и полная интеграция с вашими бизнес-процессами.",
  },
  {
    icon: Layers,
    title: "Веб-дизайн",
    description:
      "Проектируем интерфейсы, которые не просто красивы — они продают. UI/UX дизайн, прототипирование, брендинг и фирменный стиль под ключ.",
  },
  {
    icon: Search,
    title: "SEO-продвижение",
    description:
      "Выводим сайты в топ поисковых систем. Технический аудит, оптимизация контента, наращивание ссылочной массы — стабильный органический трафик и рост заявок.",
  },
  {
    icon: UserCircle,
    title: "Личные кабинеты",
    description:
      "Разрабатываем кабинеты пользователей и администраторов с любым уровнем сложности: от простых профилей до полноценных CRM, аналитики и управления заказами.",
  },
  {
    icon: Code,
    title: "Фронтенд и бэкенд",
    description:
      "Полный стек разработки: от клиентской части до серверной логики, баз данных и API-интеграций. Строим масштабируемые системы, готовые к росту вашего бизнеса.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чём мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный спектр digital-услуг под одной крышей — от идеи и дизайна до запуска и продвижения.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
