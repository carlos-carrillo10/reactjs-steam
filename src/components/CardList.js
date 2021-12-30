import React from 'react'
import { ContentCard } from './ContentCard'

export class CardList extends React.Component {
    render() {
        const { data } = this.props
        return <div className='mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3' >
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