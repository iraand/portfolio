import './index.scss'

interface Props {
    numDemos: number
    className?: string
    numDemo: (value: number) => number
}

const Navigation = (props: Props): JSX.Element => {
    const { numDemos, className, numDemo } = props
    let navs = [];

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        document.querySelector('.activeNav')?.classList.remove('activeNav');
        
        const { dataset } = event.currentTarget
        const value = Number(dataset.value);

        document.querySelector(`[data-value="${value}"]`)?.classList.add('activeNav')

        numDemo(value)
    }

    for (let i = 0; i < numDemos; i++) {
        if (i === 0) {
            navs.push(<div className={className + ' activeNav'} key={'nav' + i} onClick={handleClick} data-value={i + 1} />)
        } else {
            navs.push(<div className={className} key={'nav' + i} onClick={handleClick} data-value={i + 1} />)
        }
    }

    return (
        <div className='navigation'>
            {navs}
        </div>
    )
}

export default Navigation 
