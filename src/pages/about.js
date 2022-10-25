import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  const data = [
    {
      "title" : "Assistant D’éducation",
      "date" : "CDD - Luynes - 2018/2022",
      "type" : "work",
      "desc" : "L'expérience la plus enrichissante. Quand on parle à un adolescent en lui demandant de la rigueur et de la discipline, il est important d’être soi-même exemplaire. Aujourd’hui et depuis plus de 3 ans, je travaille avec exigeance ces soft-skills. J’ai véritablement changé mentalement : je sais où je dois aller et comment y parvenir. Je sais tenir mes objectifs et assurer suffisament de recul pour gérer les projets que j’entreprends. J’ai gagné la confiance en moi qu’il me manquait lors des autres postes que j’ai occupé."
    },
    {
      "title" : "Professeur des écoles",
      "date" : "Stage - Loir-et-Cher / Cher - 2017/2019",
      "type" : "work",
      "desc" : "Ayant voulu poursuivre mon parcours professionnel dans l’éducation nationale, je me suis orienté vers un master MEEF. Au sein de cette formation j’ai pu pratiquer le metier d’enseignant dans différentes classes des départements (Cher et Loir-et-Cher)."
    },
    {
      "title" : "Chef de projet Web",
      "date" : "Alternance - Paris - 2015/2016",
      "type" : "work",
      "desc" : "Au sein de la délégation à la communication du ministère de l’éducation nationale. J’étais en charge du processus de validation et de publication du contenu “FAQ” du site [devenirenseignant.gouv.fr](http://devenirenseignant.gouv.fr). Cette expérience etait exigeante. Elle m’a permis de gagner en confiance et de vraiment devenir pro-actif dans mes tâches. La gestion des contenus et les longs processus de validation par la hierarchie ont mis à l’épreuve mes compétences. Le site est sorti à temps, proposait tous les services et répondait à tous les besoins formulés par les panels de testeurs."
    },
    {
      "title" : "Coordinateur de projet multimédia",
      "date" : "Service civique - Blois - 2014/2015",
      "type" : "work",
      "desc" : "J’avais pour rôle d’accompagner les enseignants dans leur projet numérique en les conseillants sur les bons outils. Il fallait également faire preuve de pédagogie pour les former aux outils mis à disposition par le conseil départemental (tablettes, tableaux numériques/tableaux blanc intéractif, logiciels). J’ai pu travailler ma communication pair à pair et simplifier mes propos pour les rendre clairs et compréhensibles pour des personnes qui ne sont pas familier des nouvelles technologies."
    },
    {
      "title" : "Consultant webmarketing",
      "date" : "Stage - Blois - 2014 (3 mois)",
      "type" : "work",
      "desc" : "L’objectif du stage était de fixer les connaissances acquise pendant la formation. J’ai migré le site existant sur Wordpress et changé le design de ce dernier pour qu’il corresponde mieux au nouveau logo de la radio. Durant ces 3 mois, j’ai surtout conseillé l’équipe de la radio sur la communication web. J’ai également mis en place des outils nouveaux comme le tracker de musique passé sur la radio (pour retrouvé le titre et l’auteur de la chanson)."
    },
    {
      "title" : "Master Meef",
      "date" : "Sept 2017 - Aout 2019",
      "type" : "formation",
      "desc" : "Espe Centre Val de Loire"
    },
    {
      "title" : "Licence pro Management de projet",
      "date" : "Sept 2015 - Aout 2016",
      "type" : "formation",
      "desc" : "Les Gobelins - Paris"
    },
    {
      "title" : "DUT Services et réseaux de communication",
      "date" : "Sept 2012 - Aout 2014",
      "type" : "work",
      "desc" : "I.U.T de Blois."
    }
  ];

  return (
    <Layout pageTitle="About Me">
      <div className='w-96 mx-auto'>
        {
         data.map(item => (
          <div className='w-96 p-2 bg-gray-300 my-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300 scrollHidden'>
          <div className='flex justify-between'>
            <h2 className='font-bold text-2xl underline outline-offset-4 decoration-2'>{item.title}</h2>
            <span>
              {item.type === 'formation' ? 

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 p-1 bg-gray-700 fill-gray-300 dark:bg-gray-300 dark:fill-gray-700 rounded-full">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg> 
            :

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 p-1 bg-gray-700 fill-gray-300 dark:bg-gray-300 dark:fill-gray-700 rounded-full">
                <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
            } 
            </span>
          </div>
          <h3 className='text-md opacity-50 font-medium capitalize'>{item.date}</h3>
          <p className='text-sm text-justify my-2 px-1'>
            {item.desc}
          </p>
        </div>
        ))
        }
        
      </div>
    </Layout>
  )
}
  
  export const Head = () => <Seo title={"About Me"} />
  // Step 3: Export your component
  export default AboutPage