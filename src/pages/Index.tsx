import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/10 backdrop-blur-md">
        <div className="text-white text-2xl font-bold">AnimeChannel</div>
        <div className="flex gap-6">
          <a
            href="#home"
            className="text-white hover:text-pink-200 transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-white hover:text-pink-200 transition-colors"
          >
            О канале
          </a>
          <a
            href="#contact"
            className="text-white hover:text-pink-200 transition-colors"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <img
            src="/img/02c1294d-02a1-4c20-8832-0e4da9c6cb35.jpg"
            alt="Anime Channel Hero"
            className="w-48 h-48 mx-auto mb-8 rounded-full object-cover shadow-2xl"
          />
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Лучшие аниме рекомендации
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Откройте для себя удивительный мир аниме с нашими топами и
            рекомендациями!
          </p>
          <Button className="bg-white text-purple-600 hover:bg-pink-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
            <Icon name="Send" className="mr-2" />
            Подписаться на канал
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Что вас ждет
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/20 backdrop-blur-md border-white/20 hover:bg-white/30 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Топ аниме</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Еженедельные топы лучших аниме по разным жанрам и категориям
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-md border-white/20 hover:bg-white/30 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Рекомендации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Персональные рекомендации на основе ваших предпочтений
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-md border-white/20 hover:bg-white/30 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <CardTitle className="text-white">Сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-center">
                  Обсуждения, отзывы и общение с единомышленниками
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">О нашем канале</h2>
          <p className="text-xl mb-8 text-white/90">
            Мы создаем качественный контент для любителей аниме. Наши эксперты
            отбирают лучшие произведения, составляют топы и дают честные
            рекомендации, чтобы вы не тратили время на поиск достойного
            контента.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-pink-200">
                🎯 Наша миссия
              </h3>
              <p className="text-white/90">
                Помочь вам открыть для себя удивительный мир аниме через
                качественные рекомендации и обзоры
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-200">
                📊 Наши цифры
              </h3>
              <p className="text-white/90">
                Более 10,000 подписчиков и 500+ рекомендаций лучших аниме
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Присоединяйтесь к нам!</h2>
          <p className="text-xl mb-8 text-white/90">
            Подписывайтесь на наш Telegram-канал и будьте в курсе всех новинок
            аниме!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
              <Icon name="Send" className="mr-2" />
              Подписаться на канал
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black/20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center text-white/70">
          <p>&copy; 2024 AnimeChannel. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
