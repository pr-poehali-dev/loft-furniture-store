import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Каталог", path: "/catalog" },
    { name: "О нас", path: "/about" },
    { name: "Доставка", path: "/delivery" },
    { name: "Контакты", path: "/contacts" },
  ];

  const categories = [
    { name: "Столы", path: "/category/tables" },
    { name: "Стулья", path: "/category/chairs" },
    { name: "Диваны", path: "/category/sofas" },
    { name: "Кровати", path: "/category/beds" },
    { name: "Стеллажи", path: "/category/shelves" },
    { name: "Декор", path: "/category/decor" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1A1F2C] py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">
          LOFT STYLE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-white hover:text-[#9b87f5] py-2">
              Каталог
              <Icon name="ChevronDown" className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#1A1F2C] rounded-md shadow-lg p-3 z-50">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={category.path}
                    className="text-gray-300 hover:text-white hover:bg-[#2A303C] px-3 py-2 rounded"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white hover:text-[#9b87f5]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Icon name="Search" className="h-5 w-5" />
          </Button>

          <Link to="/cart" className="relative text-white">
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-[#9b87f5] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hidden md:flex"
          >
            <Icon name="UserRound" className="h-5 w-5" />
          </Button>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white md:hidden"
              >
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#1A1F2C] text-white border-[#2A303C] w-[80vw]"
            >
              <div className="py-6">
                <h3 className="font-bold text-xl mb-4">LOFT STYLE</h3>
                <div className="space-y-1">
                  <p className="text-gray-400 font-medium mb-2">Меню</p>
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block py-2 hover:text-[#9b87f5]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 space-y-1">
                  <p className="text-gray-400 font-medium mb-2">Категории</p>
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="block py-2 hover:text-[#9b87f5]"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center mt-8 pt-6 border-t border-[#2A303C]">
                  <Link
                    to="/cart"
                    className="flex items-center mr-6"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                    Корзина
                  </Link>
                  <Link
                    to="/account"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name="UserRound" className="h-5 w-5 mr-2" />
                    Войти
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2A303C] text-gray-400 text-sm">
                  <div className="flex items-center mb-3">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    +7 (495) 123-45-67
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-4 w-4 mr-2" />
                    info@loftstyle.ru
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
