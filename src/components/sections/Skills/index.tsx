import './index.scss'
import Cube from './Cube'
import SkillsList from './SkillsList'
import SkillsWord from './SkillsWord'

const Skills = () => {
    return (
        <section className="skills__section">
            <SkillsWord />
            <SkillsList />
            <Cube />           
        </section>
    )
}


export default Skills


