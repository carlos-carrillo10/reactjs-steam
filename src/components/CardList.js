import React from 'react'
import { ContentCard } from './ContentCard'

export class CardList extends React.Component {
    render() {
        const { data } = this.props
        return <div className='MoviesList'>
            {
                data.map(game => {
                    return <div key={game.appId} className='flex flex-col'>
                        <ContentCard
                            id={game.appId}
                            title={game.title}
                            released={game.released}
                            price={game.price}
                            image={game.imgUrl}
                            url={game.url}
                            review={game.reviewSummary}  />
                    </div>

                })}
        </div>

    }
}