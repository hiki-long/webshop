import React from 'react'
import TopNavItems from '../../model/TopNavItems'
import './Navigate.css'

class Navigate extends React.Component{
    state = {clicked: false}
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems" >
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {TopNavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navigate;