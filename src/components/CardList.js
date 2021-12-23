import React from 'react'
import { ContentCard } from './ContentCard'

export class CardList extends React.Component {
    render() {
        const { data } = this.props
        return <div className='grid grid-rows-2 w-3/4 '>
            {
                data.map(game => {
                    return <div key={game.appId}>
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