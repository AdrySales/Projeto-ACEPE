import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            width={150}
            height={40}
            className="mr-6"
          />
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="text-blue-600">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Cadastro</Button>
        </div>
      </nav>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto my-8 px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index}>
                <Link href={`/concurso/${index + 1}`}>
                  <Image
                    src="/placeholder.svg"
                    alt={`Slide ${index + 1}`}
                    width={1200}
                    height={400}
                    className="rounded-lg"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Concursos Abertos */}
      <section className="max-w-6xl mx-auto my-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Concursos Abertos</h2>
          <Button variant="outline" className="text-blue-600">
            Ver mais
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Polícia Federal",
              salary: "Até R$27 mil",
              image: "/placeholder.svg",
            },
            {
              title: "Correios",
              salary: "Até R$6.333,54",
              image: "/placeholder.svg",
            },
            {
              title: "TSE Unificado",
              salary: "Até R$13 mil",
              image: "/placeholder.svg",
            },
          ].map((concurso, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={concurso.image}
                    alt={concurso.title}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {concurso.title}
                    </h3>
                    <p className="text-sm text-gray-600">{concurso.salary}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Prepare-se com os melhores materiais para conquistar um salário
                  de {concurso.salary}
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="max-w-6xl mx-auto my-12 px-4 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Últimas Notícias</h2>
          <Button variant="outline" className="text-blue-600">
            Ver mais
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg"
                  alt={`Notícia ${index + 1}`}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Novo concurso anunciado
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button variant="outline" className="w-full">
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <p className="text-sm text-gray-300">
                Somos uma plataforma dedicada a ajudar você a encontrar e se preparar para os melhores concursos públicos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Concursos Abertos</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Notícias</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Materiais de Estudo</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-sm text-gray-300">
                Email: contato@concursos.com<br />
                Telefone: (11) 1234-5678<br />
                Endereço: Rua dos Concursos, 123 - São Paulo, SP
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-300">
              © 2024 Concursos Website. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

