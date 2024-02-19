'use client'

import Image from "next/image"

export default function Home() {

  const datos = [
    {
      id: 1,
      titulo: "Definición del referendo revocatorio",
      urlImgen: null,
      contenido: `El referendo revocatorio[1] es un instrumento de la democracia participativa directa que se define como el procedimiento que somete a votación popular la remoción de funcionarios públicos de sus cargos antes del término de su mandato (Burns et al. 2000: 27). El fundamento principal de la revocatoria es permitir que un número determinado de votantes insatisfechos con sus representantes tengan derecho a una elección especial en la cual estos últimos puedan ser removidos de sus cargos(Lijphart, 1984: 200). El referendo revocatorio es una institución de la democracia directa de la cual pueden hacer uso los ciudadanos para retirar del cargo, generalmente a representantes del ejecutivo que han sido elegidos mediante el voto popular para gobernar, no obstante, también puede ser utilizada para remover del cargo a jueces, senadores, militares, o cualquier cargo público del Estado.La razón de la existencia de este mecanismo de participación ciudadana, es que un determinado grupo de electores insatisfechos con la acción del representante puedan durante el mandato de éste, removerlo de su cargo sin tener que esperar hasta que se cumpla su periodo institucional. El referendo revocatorio busca destituir a aquel representante que ostenta el mandato y que ha generado en los ciudadanos la intención de revocarlo.En este sentido, son los ciudadanos quienes ostentan el "poder" de destituir a un representante, basado en la lógica de que fueron ellos mismos quienes los eligieron; así, la revocatoria del mandato en principio ha sido diseñada para ser aplicada en democracias donde el pueblo elige directamente y sin intermediarios, a sus gobernantes.`,
    },
    {
      id: 2,
      titulo: "Revocatómetro latinoamericano.",
      urlImgen: null,
      contenido: `
      A recall of mandate, revocation of mandate, recall referendum or recall elections is a legal procedure through which voters can determine the permanence or not of a person in an office elected by popular vote, either by direct voting, collection of signatures or a combination of both.Through this procedure, the constituent citizens can terminate the mandate that they have conferred on an elected authority, such as a president, a district representative before a legislative assembly, a governor or mayor, whose foundation would be the principle of political freedom of citizens to elect and depose their rulers in a representative democracy.
      
      It is a mechanism for the interruption or early termination of the mandate established under popular election, as long as the requirements referred to in the regulations of each country are met.
      A recall of mandate, revocation of mandate, recall referendum or recall elections is a legal procedure through which voters can determine the permanence or not of a person in an office elected by popular vote, either by direct voting, collection of signatures or a combination of both.Through this procedure, the constituent citizens can terminate the mandate that they have conferred on an elected authority, such as a president, a district representative before a legislative assembly, a governor or mayor, whose foundation would be the principle of political freedom of citizens to elect and depose their rulers in a representative democracy.
      
      It is a mechanism for the interruption or early termination of the mandate established under popular election, as long as the requirements referred to in the regulations of each country are met.`,
    }, {
      id: 3,
      titulo: "Causas para activar el referendo revocatorio",
      urlImgen: "https://i.ibb.co/k9mTLhv/revo-Tello.png",
      contenido: null,
    },
  ]

  console.log(datos)

  return (
    <div className=" w-full bg-slate-200 text-black pt-20 px-40">


      <div className=" w-[100%] h-[20vh] bg-[#614E2E80]  rounded-full">

      </div>


      {datos.map(dato => (
        <section className=" w-[70%]   py-10 px-8  text-black" key={dato.id} id={dato.id}>
          <h1 className=" text-center text-2xl font-bold ">{dato.titulo}</h1>
          {dato.contenido ? <p className=" ">{dato.contenido}</p> : null}
          {dato.urlImgen ? <Image  width={500} height={500} layout="responsive" objectFit="cover" objectPosition="center" src={dato.urlImgen} alt="imagen" /> : null} 
        </section>

      ))}



    </div>
  )
}
