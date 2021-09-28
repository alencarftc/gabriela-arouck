import React from 'react'
import style from '@sass/layouts/skills.module.scss';
import ChatIcon from "@images/layouts/skills/chat.svg"
import ChatAltIcon from "@images/layouts/skills/chat-alt-2.svg"
import LightBulbIcon from "@images/layouts/skills/light-bulb.svg"
import SearchCircleIcon from "@images/layouts/skills/search-circle.svg"
import UserCircleIcon from "@images/layouts/skills/user-circle.svg"
import UserGroupIcon from "@images/layouts/skills/user-group.svg"

const Skills = () => {
  const skills = [
    {
      title: "CURIOSIDADE",
      description: "Sempre buscando aprender coisas novas e assim trazer soluções para o projeto.",
      icon: SearchCircleIcon
    },
    {
      title: "EMPATIA",
      description: "Entendendo o ponto de vista da persona conseguimos atender as necessidades do usuário em um determinado contexto.",
      icon: UserCircleIcon
    },
    {
      title: "COMUNICAÇÃO",
      description: "É necessário ter uma boa comunicação com a equipe e todas as partes interessadas no projeto.",
      icon: ChatAltIcon
    },
    {
      title: "SOLUÇÃO DE PROBLEMAS",
      description: "Ter a capacidade de superar as dificuldades e resolver problemas.",
      icon: LightBulbIcon
    },
    {
      title: "ARGUMENTAÇÃO",
      description: "Argumentar de acordo com os fatos e resultados na busca de um melhor resultado para o usuário e para o negócio.",
      icon: ChatIcon
    },
    {
      title: "TRABALHO EM EQUIPE",
      description: "Ter uma boa relação interpessoal, saber trocar ideias e valorizar opiniões em prol de um resultado melhor.",
      icon: UserGroupIcon
    },
  ]

  return (
    <section className={style.skills}>
      <div className={`${style.skillsInner} container`}>
        <div className="row">
          <div className="col-12">
            <h3 className="subtitle">SKILLS</h3>
          </div>
        </div>
        <div className="row">
          {skills.map(skill => (
            <div key={skill.title} className="col-12 col-sm-6 col-md-4">
              <div className={style.item}>
                <img src={skill.icon} alt={skill.title} />
                <h5>{skill.title}</h5>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

