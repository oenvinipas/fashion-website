import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
            <Section 
                title="Welcome to Hollister Kids"
                subtitle=""
                bgImage="clothesScattered.jpg"
                leftBtn="Sign Up"
                rightBtn="Log In"
            />
            <Section
                title="Babies 0-2/yrs"
                subtitle="Find the best deals here now!"
                bgImage="baby.jpg"
                leftBtn="Shop Now"
                rightBtn="Go to Cart"
            />
            <Section 
                title="Kids 3-12/yrs"
                subtitle="Find the best deals here now!"
                bgImage="jumping-girl.jpg"
                leftBtn="Shop Now"
                rightBtn="Go to Cart"
            />
            <Section 
                title="Teens 13-17/yrs"
                subtitle="Find the best deals here now!"
                bgImage="clothesScattered.jpg"
                leftBtn="Shop Now"
                rightBtn="Go to Cart"
            />
        </div>
    )
}

export default Home
