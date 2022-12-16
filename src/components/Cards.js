import {review} from '../utils'
import {Card} from '../components'

const Cards = () => {

    return (
        <div className='w-full h-fit flex flex-row flex-wrap gap-y-7'>
            {review.slice(0,2).map((item) => {
                return (
                    <Card key={item._id || item.id}  {...item} />
                )
            })}
        </div>
    )
}

export default Cards