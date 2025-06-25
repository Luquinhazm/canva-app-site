import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";

const hkGrostesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>

      <main className="flex relative items-center justify-center h-dvh">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video1.mp4" // <-- ajuste o caminho do seu vídeo
          autoPlay
          loop
          muted
          playsInline
        />
        <div className='absolute inset-0 bg-black opacity-70 z-10' />
        <h2 className={`absolute inset-20 uppercase ${hkGrostesk.className} flex justify-center z-30`}>demire dadelta</h2>
        <div className="flex justify-around flex-col z-30">
          <h1 className={`text-3xl text-center uppercase tracking-normal md:text-5xl  `}>somos <br /> especialistas <br /> em criar <br /> campanhas <br /> que elevam o <br /> pontencial da <br /> sua marca</h1>
        </div>
      </main>

      <section className=' md:min-h-dvh flex justify-between flex-col md:flex-row flex-wrap'>
        <div className="w-full  md:w-1/2 md:mt-0  bg-black flex justify-center items-center ">
          <Image src={'/2.png'} width={'520'} height={'520'} className="w-3xs md:w-3/4 my-6" />
        </div>

        <div className="w-full md:w-1/2 relative flex flex-col items-center gap-4 justify-center px-4 py-8">
          <Image src={'/1.png'} width={'520'} height={'100'} className="absolute inset-0 h-full w-full object-cover -z-10"></Image>
          <h1 className='text-[22px] md:text-[29px] uppercase text-center mb-4 leading-8'>Ajudamos <br /> nossos clientes <br /> a montar seus <br /> negócios</h1>
          <p className="uppercase text-center text-sm md:text-base">
            Este bloco de texto oferece <br /> uma breve visão geral da empresa.
          </p>
          <p className="uppercase text-center">
            Compartilhe sua fiosofia, visão <br /> ou mantra aqui.
          </p>
        </div>

      </section>

      <section className="bg-[#f1f1f1] min-h-dvh text-black flex flex-col justify-center gap-4 md:gap-28 items-center">
        <div className="flex flex-col items-center gap-2 md:gap-8 px-2">
          <h1 className="text-black text-2xl md:text-3xl uppercase ">O que fazemos</h1>
          <p className="max-w-[720px] text-sm px-4 md:text-base text-center">Compartilhe suas propostas de serviços ou produto aqui. Apresente-os como simples cabeçalhos que podem levar até suas páginas onde você pode fornecer mais detalhes sobre eles. Você também pode usar este espaço para outros fins onde as informações sejam apresentadas como meros chamarizes para outras páginas individualizadas.</p>
        </div>
        <div className="flex flex-wrap items-center mt-4 md:mt-0 justify-center gap-8">
          <div className="uppercase text-[22px] max-w-[320px] text-center">
            <h2 className="text-[#ff26b9]">Criação de Estrategias</h2>
            <button className=" md:mt-5 bg-black w-[220px] text-white p-1.5 rounded-md">Saiba Mais</button>
          </div>
          <div className="uppercase text-[22px] max-w-[320px] text-center">
            <h2 className="text-[#2e91f7]">serviços criativos</h2>
            <button className="md:mt-5 bg-black w-[220px] text-white p-1.5 rounded-md">Saiba Mais</button>
          </div>
          <div className="uppercase text-[22px] max-w-[320px] text-center">
            <h2 className="text-[#ff5055]">Serviços de Publicidade</h2>
            <button className="md:mt-5 bg-black w-[220px] text-white p-1.5 rounded-md">Saiba Mais</button>
          </div>
        </div>
      </section>

      <section className="bg-black c flex flex-col justify-around px-4 py-16 items-center">
        <div className="flex flex-col text-center max-w-[720px]">
          <h1 className="text-3xl uppercase mb-4">Portfólio</h1>
          <p className="mb-14">Deixe seu trabalho falar por si mesmo apresentando um portfólio. Compartilhe seus projetos anteriores aqui para que os clientes possam ver sua produção real</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
          <Image src={'/2.png'} width={'380'} height={'320'} alt="imagem Portfolio" className="h-80 transition-transform duration-300 hover:scale-105" />
        </div>
      </section>

      <section className="md:h-[80dvh] text-black bg-[#f1f1f1] flex flex-col items-center">
        <h1 className="text-3xl mt-28 uppercase">Clientefss</h1>
        <div className="mt-24">
          <Image src={'/Clientes.png'} width={'1080'} height={'320'} />
        </div>
      </section>

      <section className=" relative min-h-dvh  bg-cover bg-center flex flex-col items-center justify-center gap-16 px-4 py-20 text-white text-center">
         <Image src={'/1.png'} width={'520'} height={'100'} className="absolute inset-0 h-full w-full object-cover -z-10"></Image>
        <h1 className="text-3xl uppercase leading-tight">
          O que os nossos <br /> Clientes dizem
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Depoimento 1 */}
          <div className="max-w-xs mx-auto flex flex-col gap-8">
            <p>
              Aumente sua credibilidade inserindo os depoimentos dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento de outras pessoas que já o experimentaram é inestimável.
            </p>
            <span className="font-bold uppercase">Leila Barreiro <br /> Ana & Pam</span>
          </div>

          {/* Depoimento 2 */}
          <div className="max-w-xs mx-auto flex flex-col gap-8">
            <p>
              Aumente sua credibilidade inserindo os depoimentos dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento de outras pessoas que já o experimentaram é inestimável.
            </p>
            <span className="font-bold uppercase">Clara Alves <br /> Silva & Souza</span>
          </div>

          {/* Depoimento 3 */}
          <div className="max-w-xs mx-auto flex flex-col gap-8">
            <p>
              Aumente sua credibilidade inserindo os depoimentos dos seus clientes. Todo mundo adora recomendações, por isso, o depoimento de outras pessoas que já o experimentaram é inestimável.
            </p>
            <span className="font-bold uppercase">Elias Silveira <br /> Indústria Silveira</span>
          </div>
        </div>
      </section>
      <section className="min-h-dvh bg-black text-white flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-10">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src="/2.png" width={520} height={520} alt="Imagem de contato" />
        </div>

        {/* Conteúdo de texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-around uppercase font-bold text-center md:text-left gap-6">
          <h1 className="text-3xl mb-8 md:mb-24">entre em <br /> contato</h1>

          <p>
            Demir e Delta <br />
            Rua Qualquer, 123 <br />
            Cidade Qualquer - EQ
          </p>

          <p className="mt-8 md:mt-14">
            Telefone: (12) 3456-7890 <br />
            E-mail: ola@grandesite.com.br <br />
            Redes sociais: @grandesite
          </p>
        </div>
      </section>

    </div>
  );
}
