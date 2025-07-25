import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Mobile-First Design */}
      <div className="w-full max-w-sm mx-auto bg-white min-h-screen">
        
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-900 px-6 py-4 rounded-b-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-slate-800 rounded-md"></div>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">ARTIFICIAL</h1>
                <h2 className="text-white text-xl font-bold">INTELLIGENCE</h2>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Secondary
            </Button>
          </div>
        </div>

        {/* SubHeading Section */}
        <div className="px-6 py-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">SubHeading</h3>
              <p className="text-sm text-gray-600">Cady Modern adipesisideri, Sed, White</p>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex space-x-3 mb-8">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-500"
            >
              Button
            </Button>
            <Button 
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Button Button
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-500"
            >
              Secondary
            </Button>
          </div>

          {/* AI Icons Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Icon name="Network" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Sparkles" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Brain" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="User" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="RefreshCw" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Download" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Upload" size={32} className="text-gray-700 mb-2" />
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Cpu" size={32} className="text-gray-700 mb-2" />
            </div>
          </div>

          {/* AI Article Card */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">AI Article</h3>
              <Badge variant="outline" className="border-gray-300 text-gray-600">
                Secondary
              </Badge>
            </div>
            
            <Card className="border-2 border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-gray-900">
                  AI Article
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  Title/description
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                </div>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Button
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <div className="w-full h-12 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center px-4">
                <Icon name="Search" size={20} className="text-gray-400" />
                <span className="ml-3 text-gray-400 text-sm">Search...</span>
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Icon name="Menu" size={20} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full flex">
                <div className="w-1/4 bg-slate-800"></div>
                <div className="w-1/4 bg-blue-500"></div>
                <div className="w-1/4 bg-cyan-400"></div>
                <div className="w-1/4 bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ключевые возможности</h3>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Brain" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Нейронные сети</h4>
                    <p className="text-sm text-gray-600">Глубокое обучение с современными архитектурами</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Быстрая обработка</h4>
                    <p className="text-sm text-gray-600">Обработка данных в реальном времени</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Безопасность</h4>
                    <p className="text-sm text-gray-600">Защищенная обработка конфиденциальных данных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Database" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Большие данные</h4>
                    <p className="text-sm text-gray-600">Анализ массивов данных любого размера</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Готовы начать?</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Присоединяйтесь к революции искусственного интеллекта
            </p>
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white mb-4"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать использование
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-500"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Документация
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-gray-900">AI Platform</span>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 AI Platform. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}