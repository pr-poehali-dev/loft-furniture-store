
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "https://cdn.poehali.dev/files/7d8d130a-8073-4a84-85cb-2cc5554474cc.jpg",
    "https://cdn.poehali.dev/files/8b16b46c-be84-4095-a738-9e5617c7fd62.png",
    "https://cdn.poehali.dev/files/b637d68c-ce3c-43ea-a907-3cd6435f1e44.jpg",
  ];

  const specifications = [
    { name: "Материал сиденья", value: "Массив сосны, состаренный" },
    { name: "Материал каркаса", value: "Сталь, покрытие порошковой краской" },
    { name: "Размеры", value: "80×60×75 см (Ш×Г×В)" },
    { name: "Вес", value: "12 кг" },
    { name: "Максимальная нагрузка", value: "120 кг" },
    { name: "Гарантия", value: "5 лет" },
  ];

  const similarProducts = [
    { 
      id: 1, 
      name: "Стеллаж X-Line", 
      price: 45600, 
      image: "https://cdn.poehali.dev/files/1b3935b7-db26-4561-8628-a7160843d5f1.jpg" 
    },
    { 
      id: 2, 
      name: "Кресло Loft Relax", 
      price: 18700, 
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "Стол рабочий Индастриал", 
      price: 32900, 
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" 
    },
  ];

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex text-sm mb-6">
          <Link to="/" className="text-gray-500 hover:text-[#9b87f5]">Главная</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/catalog" className="text-gray-500 hover:text-[#9b87f5]">Каталог</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/category/chairs" className="text-gray-500 hover:text-[#9b87f5]">Стулья и кресла</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-foreground">Кресло Minimalistic Loft</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <Carousel className="w-full max-w-xl">
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`Кресло Minimalistic Loft - вид ${index + 1}`} 
                          className="w-full object-cover aspect-square rounded-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </div>
            </Carousel>
            
            <div className="flex gap-3 mt-4">
              {productImages.map((image, index) => (
                <div 
                  key={index} 
                  className="w-20 h-20 rounded-md overflow-hidden border-2 border-transparent hover:border-[#9b87f5] cursor-pointer"
                >
                  <img 
                    src={image} 
                    alt={`Миниатюра ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Кресло Minimalistic Loft</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-5 w-5 text-[#F97316] fill-[#F97316]" />
                ))}
              </div>
              <span className="text-gray-500">(18 отзывов)</span>
            </div>
            
            <div className="text-2xl font-bold mb-6">24 500 ₽</div>
            
            <p className="text-gray-600 mb-6">
              Лаконичное кресло для отдыха в стиле лофт. Сиденье выполнено из массива состаренной сосны, каркас из прочной стали с порошковым покрытием. Идеально впишется в современный минималистичный интерьер, подойдет для квартиры, дома, террасы или зоны отдыха в офисе.
            </p>
            
            <div className="flex mb-8">
              <span className="flex items-center mr-4 text-sm">
                <Icon name="CheckCircle2" className="h-5 w-5 text-green-500 mr-2" />
                В наличии
              </span>
              <span className="flex items-center text-sm">
                <Icon name="Truck" className="h-5 w-5 text-[#9b87f5] mr-2" />
                Бесплатная доставка
              </span>
            </div>
            
            <div className="border-t border-b py-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button 
                    onClick={handleDecrement}
                    className="px-4 py-2 hover:bg-gray-100 text-xl font-medium"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={handleIncrement}
                    className="px-4 py-2 hover:bg-gray-100 text-xl font-medium"
                  >
                    +
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Осталось: 7 шт.
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#9b87f5] hover:bg-[#8371e0] text-white py-6 flex-1">
                  <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white py-6 flex-1">
                  <Icon name="Heart" className="h-5 w-5 mr-2" />
                  В избранное
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2">Характеристики:</h3>
              <div className="grid grid-cols-2 gap-y-3">
                {specifications.map((spec, index) => (
                  <React.Fragment key={index}>
                    <div className="text-gray-500">{spec.name}</div>
                    <div>{spec.value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs with description, specs and reviews */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="description" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#9b87f5] text-base py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Описание
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#9b87f5] text-base py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Характеристики
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#9b87f5] text-base py-4 px-6 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Отзывы (18)
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="pt-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  Кресло Minimalistic Loft — это идеальное сочетание простоты, комфорта и индустриального стиля. Каждый элемент кресла тщательно продуман и отражает философию минимализма и функциональности.
                </p>
                <p>
                  Сиденье изготовлено из массива сосны, прошедшего специальную обработку для создания эффекта состаренной древесины. Поверхность сохраняет естественную текстуру дерева, делая каждое кресло уникальным.
                </p>
                <p>
                  Каркас выполнен из прочной стали с порошковым покрытием, которое обеспечивает долговечность конструкции и защищает металл от коррозии. Минималистичная Z-образная форма каркаса придает креслу легкость и элегантность, несмотря на брутальность использованных материалов.
                </p>
                <p>
                  Кресло подходит как для внутреннего, так и для наружного использования (на защищенных от прямого воздействия осадков площадках). Идеально дополнит интерьер в стиле лофт, индастриал или современный минимализм.
                </p>
                <div className="flex items-center pt-4 text-[#9b87f5]">
                  <Icon name="Factory" className="h-5 w-5 mr-2" />
                  <span>Сделано в России</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="pt-6">
              <div className="max-w-2xl">
                <div className="grid grid-cols-2 gap-y-4 text-base">
                  {specifications.map((spec, index) => (
                    <React.Fragment key={index}>
                      <div className="border-b pb-2 text-gray-600">{spec.name}</div>
                      <div className="border-b pb-2 font-medium">{spec.value}</div>
                    </React.Fragment>
                  ))}
                  <div className="border-b pb-2 text-gray-600">Инструкция по уходу</div>
                  <div className="border-b pb-2">Протирать мягкой сухой тканью, не использовать агрессивные химические средства</div>
                  <div className="border-b pb-2 text-gray-600">Сборка</div>
                  <div className="border-b pb-2">Требуется минимальная сборка</div>
                  <div className="border-b pb-2 text-gray-600">Страна производства</div>
                  <div className="border-b pb-2">Россия</div>
                  <div className="border-b pb-2 text-gray-600">Артикул</div>
                  <div className="border-b pb-2">ML-2025-CH</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Отзывы покупателей (18)</h3>
                  <Button className="bg-[#9b87f5] hover:bg-[#8371e0] text-white">
                    <Icon name="PenLine" className="h-4 w-4 mr-2" />
                    Написать отзыв
                  </Button>
                </div>
                
                <div className="flex flex-col gap-6">
                  {/* Review 1 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Марина К.</div>
                      <div className="text-gray-500 text-sm">12 апреля 2025</div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="h-4 w-4 text-[#F97316] fill-[#F97316]" />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Отличное кресло! Заказывала для лофт-интерьера квартиры, идеально вписалось. Очень удобное для чтения и отдыха, несмотря на минималистичный дизайн. Доставили быстро, сборка заняла буквально 15 минут.
                    </p>
                  </div>
                  
                  {/* Review 2 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Александр Д.</div>
                      <div className="text-gray-500 text-sm">28 марта 2025</div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" className="h-4 w-4 text-[#F97316] fill-[#F97316]" />
                      ))}
                      <Icon name="Star" className="h-4 w-4 text-gray-300" />
                    </div>
                    <p className="text-gray-700">
                      Хорошее соотношение цены и качества. Выглядит стильно и брутально, но для длительного сидения не очень подходит - не хватает мягкости. Впрочем, как элемент интерьера в кабинете просто прекрасно.
                    </p>
                  </div>
                  
                  {/* Review 3 */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Елена В.</div>
                      <div className="text-gray-500 text-sm">15 февраля 2025</div>
                    </div>
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="h-4 w-4 text-[#F97316] fill-[#F97316]" />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Купила в комплекте со столиком из той же серии, выглядит потрясающе! Особенно нравится фактура дерева, видно что ручная работа. Рекомендую тем, кто ценит качественные и необычные предметы интерьера.
                    </p>
                  </div>
                  
                  <Button variant="outline" className="self-center mt-4">
                    Показать все отзывы
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Similar Products */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Похожие товары</h2>
            <Link to="/catalog" className="text-[#9b87f5] hover:underline flex items-center">
              Смотреть все
              <Icon name="ChevronRight" className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProducts.map((product) => (
              <Card key={product.id} className="border-0 overflow-hidden bg-transparent">
                <CardContent className="p-0">
                  <div className="relative group cursor-pointer">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full aspect-square object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold">{product.price.toLocaleString()} ₽</span>
                        <Button size="sm" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                          <Icon name="Eye" className="h-4 w-4 mr-1" />
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
