
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;
        heroElement.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroElement.style.opacity = `${1 - scrollY * 0.002}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProducts = [
    { 
      id: 1, 
      name: "Индустриальный стол Delta", 
      price: 24500, 
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      name: "Кресло Loft Air", 
      price: 18700, 
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "Диван Metropolis", 
      price: 67800, 
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      name: "Стеллаж Raw Steel", 
      price: 32400, 
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: 5, 
      name: "Журнальный столик Cube", 
      price: 13900, 
      image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=1974&auto=format&fit=crop" 
    },
  ];

  const categories = [
    { name: "Столы", icon: "Table2" },
    { name: "Диваны", icon: "Sofa" },
    { name: "Стулья", icon: "ArmchairIcon" },
    { name: "Стеллажи", icon: "LayoutGrid" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop')", 
            zIndex: -1 
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            LOFT STYLE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl">
            Мебель, которая подчеркнёт брутальный характер вашего пространства
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8371e0] text-white">
              Каталог
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              О нас
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <Icon name="ChevronDown" className="text-white animate-bounce h-8 w-8" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">КАТЕГОРИИ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/category/${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-[#1A1F2C] aspect-square rounded-lg flex flex-col items-center justify-center text-white transition-transform hover:scale-105">
                <Icon name={category.icon} className="h-12 w-12 mb-3 group-hover:text-[#9b87f5] transition-colors" />
                <span className="text-lg font-medium">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-[#1A1F2C] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-white">ПОПУЛЯРНОЕ</h2>
          <p className="text-gray-300 mb-10">Товары, которые выбирают наши клиенты</p>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 overflow-hidden bg-transparent">
                    <CardContent className="p-0">
                      <div className="relative group cursor-pointer">
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full aspect-square object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-90">
                          <h3 className="text-white text-xl font-medium">{product.name}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-white font-bold">{product.price.toLocaleString()} ₽</span>
                            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                              <Icon name="Plus" className="h-4 w-4 mr-1" />
                              В корзину
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="text-white -left-12" />
              <CarouselNext className="text-white -right-12" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-10">
            <Button className="bg-[#9b87f5] hover:bg-[#8371e0] text-white">
              Смотреть все товары
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">О НАШЕЙ МЕБЕЛИ</h2>
          <p className="text-lg mb-4">
            Мы создаем мебель в стиле лофт, используя долговечные материалы и уникальные дизайнерские решения.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <Icon name="Check" className="h-5 w-5 text-[#9b87f5] mr-2" />
              <span>Изготовление под ваши размеры</span>
            </li>
            <li className="flex items-center">
              <Icon name="Check" className="h-5 w-5 text-[#9b87f5] mr-2" />
              <span>Гарантия 5 лет на все изделия</span>
            </li>
            <li className="flex items-center">
              <Icon name="Check" className="h-5 w-5 text-[#9b87f5] mr-2" />
              <span>Бесплатная доставка по Москве и МО</span>
            </li>
            <li className="flex items-center">
              <Icon name="Check" className="h-5 w-5 text-[#9b87f5] mr-2" />
              <span>Собственное производство в России</span>
            </li>
          </ul>
          <Button className="bg-[#1A1F2C] hover:bg-black text-white">
            Подробнее о нас
          </Button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop" 
            alt="Наше производство" 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#1A1F2C] text-white p-6 rounded-lg max-w-xs shadow-xl hidden md:block">
            <div className="flex items-center mb-3">
              <Icon name="Star" className="h-5 w-5 text-[#F97316] mr-1 fill-[#F97316]" />
              <Icon name="Star" className="h-5 w-5 text-[#F97316] mr-1 fill-[#F97316]" />
              <Icon name="Star" className="h-5 w-5 text-[#F97316] mr-1 fill-[#F97316]" />
              <Icon name="Star" className="h-5 w-5 text-[#F97316] mr-1 fill-[#F97316]" />
              <Icon name="Star" className="h-5 w-5 text-[#F97316] mr-1 fill-[#F97316]" />
            </div>
            <p className="italic">
              "Качество и стиль на высшем уровне! Заказывали обеденный стол и стеллаж — все идеально подошло под наш интерьер."
            </p>
            <div className="mt-3 font-semibold">Анна К.</div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#1A1F2C] py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
          <p className="mb-8">Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="px-4 py-3 rounded-md flex-1 text-black" 
            />
            <Button className="bg-[#9b87f5] hover:bg-[#8371e0] sm:flex-shrink-0">
              Подписаться
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111318] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">LOFT STYLE</h3>
            <p className="text-gray-400">Создаем эксклюзивную мебель в стиле лофт с 2015 года.</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white hover:text-[#9b87f5]">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5]">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#9b87f5]">
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Столы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Стулья</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Диваны</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Кровати</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Стеллажи</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Гарантия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 mr-2 text-[#9b87f5] shrink-0" />
                г. Москва, ул. Индустриальная, 14, стр. 8
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                info@loftstyle.ru
              </p>
              <p className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 mr-2 text-[#9b87f5]" />
                Пн-Вс: 10:00 - 20:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 LOFT STYLE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
