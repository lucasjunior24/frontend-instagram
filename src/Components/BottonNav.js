import React from 'react'
import { MdHome, MdPhotoCamera, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

function BottonNav() {
    return (
        <footer>
            <nav>
                <Link to='/feed'>
                    <MdHome seze={20} />
                </Link>
                <Link to='/post'>
                    <MdPhotoCamera seze={20} />
                </Link>
                <Link to='/profile'>
                    <MdPerson seze={20} />
                </Link>
            </nav>
        </footer>
    )
}

export default BottonNav
