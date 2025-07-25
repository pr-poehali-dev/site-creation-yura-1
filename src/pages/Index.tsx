import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const features = [
    {
      icon: "Brain",
      title: "Искусственный интеллект",
      description: "Передовые алгоритмы машинного обучения для решения сложных задач",
      badge: "AI Core"
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Обработка данных в реальном времени с минимальной задержкой",
      badge: "Performance"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Многоуровневая защита и шифрование всех операций",
      badge: "Security"
    },
    {
      icon: "Cpu",
      title: "Нейронные сети",
      description: "Глубокое обучение с архитектурой transformer",
      badge: "Neural"
    },
    {
      icon: "Database",
      title: "Большие данные",
      description: "Анализ и обработка петабайтов информации",
      badge: "Big Data"
    },
    {
      icon: "Globe",
      title: "Глобальная сеть",
      description: "Распределенная инфраструктура по всему миру",
      badge: "Global"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Icon name="Cpu" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AI Platform</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Возможности</a>
            <a href="#technology" className="text-gray-600 hover:text-blue-600 transition-colors">Технологии</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
            Начать
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Новая эра технологий
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Будущее
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"> ИИ </span>
            уже здесь
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Откройте безграничные возможности искусственного интеллекта. 
            Наша платформа использует передовые технологии для революционных решений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto">
              <Icon name="Rocket" size={20} className="mr-2" />
              Запустить платформу
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-blue-200 hover:border-blue-300">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ключевые возможности</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Передовые технологии для решения самых сложных задач
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Передовые технологии</h2>
            <p className="text-xl mb-10 opacity-90">
              Мы используем самые современные алгоритмы и архитектуры для достижения максимальной эффективности
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { name: "GPT-4", desc: "Языковые модели" },
                { name: "PyTorch", desc: "Глубокое обучение" },
                { name: "CUDA", desc: "GPU ускорение" },
                { name: "Kubernetes", desc: "Оркестрация" }
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name="Cpu" size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{tech.name}</h3>
                  <p className="text-sm opacity-75">{tech.desc}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Документация API
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Готовы начать путешествие в будущее?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Присоединяйтесь к тысячам разработчиков, которые уже используют нашу платформу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Создать аккаунт
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2 border-gray-200 hover:border-gray-300">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Icon name="Cpu" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">AI Platform</span>
              </div>
              <p className="text-gray-400">
                Революционная платформа искусственного интеллекта для решения задач будущего.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Связаться</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Platform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}