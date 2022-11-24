import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return(
        <header className="header">
            <h1>{title='Task Tracker'}</h1>
            <Button color = 'green' text='Hello' onClick={onClick}/>
        </header>
    )
}

export default Header