import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="header">
                <Link to='Cf'><button className='site'>Codeforces</button> </Link>
                {/* <Link to='Cc'><button className='site'>Codechef</button> </Link> */}
                <Link to='Leetcode'><button className='site'>Leetcode</button> </Link>
                <Link to='Atcoder'><button className='site'>Atcoder</button> </Link>
                <Link to='Resource'><button className='site'>Resource</button> </Link>
                {/* <Link to='User'><button className='site'>User-Info</button> </Link> */}
            </div>
        </>
    )
}

export default Header
