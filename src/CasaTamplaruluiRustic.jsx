import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Hammer } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CasaTamplaruluiRustic() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const imaginiGalerie = [
    "https://i.imgur.com/fpHPJ0g.jpeg",
    "https://i.imgur.com/YpDq0fn.jpeg",
    "https://i.imgur.com/cexksWO.jpeg",
    "https://i.imgur.com/YlgFtOR.jpeg",
    "https://i.imgur.com/NdXv8pT.jpeg",
    "https://i.imgur.com/ZxFDU1e.jpeg",
    "https://i.imgur.com/r1AtqYy.jpeg",
    "https://i.imgur.com/yKNkNcv.jpeg",
  ];

  return (
    <div className="min-h-screen text-[#4b3b2a] bg-[#fdfaf6]">
      {/* Banner */}
      <div
        id="acasa"
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('https://i.imgur.com/YpDq0fn.jpeg')" }}
      >
        <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0" />
=======
import { Menu, Hammer, Home } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CasaTamplaruluiRustic() {
  return (
    <div className="min-h-screen text-[#4b3b2a] bg-[#fdfaf6]">
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('https://i.imgur.com/YpDq0fn.jpeg')" }}
      >
        <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>
>>>>>>> 7c1349426ec1f1d8a8da2d4ded0efc96bc7d6957
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md" style={{ fontFamily: 'serif' }}>
            Casa Tâmplarului Rustic
          </h1>
          <p className="mt-4 text-xl md:text-2xl drop-shadow-md" style={{ fontFamily: 'serif' }}>
            0775 510 594
          </p>
          <a
            href="https://wa.me/40775510594"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-[#4CAF50] hover:bg-[#3c9b45] text-[#fff8f0] rounded-full text-lg shadow-lg transition-colors"
          >
            <FaWhatsapp className="text-2xl text-[#fff8f0]" /> Scrie-ne pe WhatsApp
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigație */}
=======
>>>>>>> 7c1349426ec1f1d8a8da2d4ded0efc96bc7d6957
      <div className="p-6">
        <header className="backdrop-blur-sm bg-white/80 rounded-xl p-4 mb-6 shadow-md">
          <div className="flex items-center justify-between border-b border-[#ddd] pb-4">
            <div className="flex items-center gap-2">
              <Hammer className="text-[#8b5e3c]" />
              <h2 className="text-2xl font-bold">Casa Tâmplarului Rustic</h2>
            </div>
            <nav className="flex gap-4">
<<<<<<< HEAD
              <Button variant="ghost" onClick={() => scrollTo('acasa')}>Acasă</Button>
              <Button variant="ghost" onClick={() => scrollTo('servicii')}>Servicii</Button>
              <Button variant="ghost" onClick={() => scrollTo('galerie')}>Galerie</Button>
              <Button variant="ghost" onClick={() => scrollTo('contact')}>Contact</Button>
=======
              <Button variant="ghost">Acasă</Button>
              <Button variant="ghost">Servicii</Button>
              <Button variant="ghost">Galerie</Button>
              <Button variant="ghost">Contact</Button>
>>>>>>> 7c1349426ec1f1d8a8da2d4ded0efc96bc7d6957
            </nav>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
          {/* Despre */}
          <div id="servicii" className="md:col-span-1">
            <Card className="bg-[#fff8f0]/90 shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Despre noi</h2>
                <p>
                  Suntem o echipă de tâmplari pasionați, cu o dragoste pentru lucrul în lemn
                  natural, realizând mobilier rustic autentic și personalizat pentru orice
                  spațiu.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Servicii */}
          <div className="md:col-span-1">
            <Card className="bg-[#fff8f0]/90 shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Servicii oferite</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mobilier rustic personalizat</li>
                  <li>Recondiționare mobilier vechi</li>
                  <li>Decor interior din lemn masiv</li>
                  <li>Consultanță și design rustic</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Galerie */}
          <div id="galerie" className="md:col-span-2">
            <Card className="bg-[#fff8f0]/90 shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Galerie</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {imaginiGalerie.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Poză galerie ${i + 1}`}
                      className="rounded-xl shadow-md object-cover w-full h-64"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer id="contact" className="mt-12 text-center text-sm text-[#7b6a58] backdrop-blur-sm bg-white/70 py-2 rounded-xl shadow-md">
=======
          <Card className="bg-[#fff8f0]/90 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Despre noi</h2>
              <p>
                Suntem o echipă de tâmplari pasionați, cu o dragoste pentru lucrul în lemn
                natural, realizând mobilier rustic autentic și personalizat pentru orice
                spațiu.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#fff8f0]/90 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Servicii oferite</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mobilier rustic personalizat</li>
                <li>Recondiționare mobilier vechi</li>
                <li>Decor interior din lemn masiv</li>
                <li>Consultanță și design rustic</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 bg-[#fff8f0]/90 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Galerie</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src="https://i.imgur.com/fpHPJ0g.jpeg" alt="Mobilier rustic 1" className="rounded-xl shadow-md object-cover w-full h-64" />
                <img src="https://i.imgur.com/j1PK4uy.jpeg" alt="Mobilier rustic 2" className="rounded-xl shadow-md object-cover w-full h-64" />
                <img src="https://i.imgur.com/otcUr5s.jpeg" alt="Mobilier rustic 3" className="rounded-xl shadow-md object-cover w-full h-64" />
                <img src="https://i.imgur.com/5e0hkAm.jpeg" alt="Mobilier rustic 4" className="rounded-xl shadow-md object-cover w-full h-64" />
                <img src="https://i.imgur.com/YpDq0fn.jpeg" alt="Mobilier rustic 5" className="rounded-xl shadow-md object-cover w-full h-64" />
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="mt-12 text-center text-sm text-[#7b6a58] backdrop-blur-sm bg-white/70 py-2 rounded-xl shadow-md">
>>>>>>> 7c1349426ec1f1d8a8da2d4ded0efc96bc7d6957
          © 2025 Casa Tâmplarului Rustic. Toate drepturile rezervate.
        </footer>
      </div>
    </div>
  );
}
