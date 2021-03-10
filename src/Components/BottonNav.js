import React from 'react'
import { MdHome, MdPhotoCamera, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'

function BottonNav() {
    return (
        <footer>
            <nav>
                <Link to='/feed'>
                    <MdHome size={20} />
                </Link>
                <Link to='/post'>
                    <MdPhotoCamera size={20} />
                </Link>
                <Link to='/profile'>
                    <MdPerson size={20} />
                </Link>
            </nav>
        </footer>
    )
}

export default BottonNav
