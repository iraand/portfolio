import './index.scss'
import LineLetterA from './FirstLetterA'
import NameIra from './NameIra'
import FullName from './FullName'

const Introduction: React.FC = () => {

    return (
        <section
            className="intro"
            data-scroll
            data-scroll-speed="3"
            data-scroll-section
        >

            <div className="intro__container">
                <LineLetterA />
                <NameIra />  
                <FullName />
            </div>    
        </section>
    )
}

export default Introduction
