import { href, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { label } from "framer-motion/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // para controle dos submenus mobile

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  const navItems = [
    { label: "Início", href: "/" },
    {
      label: "Liderança",
    dropdown: [
      { label: "Presidente", href: "/lideranca/presidente" },
      { label: "Vice-Presidente", href: "/lideranca/vice-presidente" },
      { label: "Conselho", href: "/lideranca/conselho" },
      { label: "Pastores", href: "/lideranca/pastores" }
    ],
    },
    {
  label: "Sobre Nós",
  dropdown: [
    { label: "Quem Somos", href: "/sobre-nos/quem-somos" },
    { label: "Nossa Missão", href: "/sobre-nos/nossa-missao" },
    { label: "Nossa Visão", href: "/sobre-nos/nossa-visao" },
    { label: "Valores", href: "/sobre-nos/valores" }
  ]
},
    {
  label: "Localização",
  dropdown: [
    { label: "Onde Estamos", href: "/localizacao/onde-estamos" },
    { label: "Congregações", href: "/localizacao/congregacoes" },
    { label: "Contato", href: "/localizacao/contato" }
  ]
},
    {
      label: "Ministérios",
      dropdown: [
        { label: "Mocidade", href: "/ministerios/mocidade" },
        { label: "Geração Teen", href: "/ministerios/geracao-teen" },
        { label: "Kids", href: "/ministerios/kids" }
      ],
    }
  ];

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2">

          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="/img/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>

          <span className="text-lg font-bold">Igreja do Avivamento</span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a
                href={item.href || "#"}
                className="hover:bg-white hover:text-green-800 transition px-3 py-2 rounded-md font-medium flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && <span className="text-xs">▼</span>}
              </a>
              {item.dropdown && (
                <div
  className={`absolute left-0 top-full mt-2 w-56 bg-white text-green-800 rounded shadow-lg z-50 ${
    hoveredMenu === item.label ? "visible opacity-100" : "invisible opacity-0"
  } transition-all duration-200`}
>
                  {item.dropdown.map((sub, idx) => (
  <a
    key={idx}
    href={sub.href}
    className="block px-4 py-2 text-sm hover:bg-green-100 hover:text-green-800 transition"
    onClick={() => setIsOpen(false)}
  >
    {sub.label}
  </a>
))}
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-2 ml-4">
            <a
              href="#"
              className="border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-green-800 transition"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-white text-green-800 px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
            >
              Cadastre-se
            </a>
          </div>
        </nav>



        {/* Botão menu mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu lateral mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-white text-green-800 z-50 shadow-lg p-6 flex flex-col justify-between gap-4 md:hidden overflow-y-auto max-h-screen"
            >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex justify-between items-center font-semibold text-lg cursor-pointer"
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        <span>{item.label}</span>
                        <span className="text-sm">
                          {openSubmenu === item.label ? "▲" : "▼"}
                        </span>
                      </div>
                      {openSubmenu === item.label && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.dropdown.map((sub, idx) => (
                            <a
                              key={idx}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="hover:text-green-600"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-semibold text-lg hover:text-green-600"
                    >
                      {item.label}
                    </a>
                  )}

                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 pb-8 flex flex-col gap-3">
              <a
                href="#"
                className="border border-green-800 px-4 py-2 rounded-full text-center hover:bg-green-800 hover:text-white transition"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-green-800 text-white px-4 py-2 rounded-full text-center hover:bg-green-900 transition"
              >
                Cadastre-se
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
