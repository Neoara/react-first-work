import React from 'react'

const Cities = () => {
    let citiesArr = [
        {
            city: "Astana",
            populate: 4866001,
            id: 1
        },
        {
            city: "Almaty",
            populate: 5263002,
            id: 2
        },
        {
            city: "Shymkent",
            populate: 1000283,
            id: 3
        },
        {
            city: "Taltykurgan",
            populate: 150002,
            id: 4
        },
        {
            city: "Moscow",
            populate: 7840201,
            id: 5
        },
    ]

    const listCities = citiesArr.map(e => <li key={e.id}>{e.city}</li>)
    const listPopulate = citiesArr.map(e => <li key={e.id}>{e.populate}</li>)

    return (
        <div className='citiesContainer'>
            <ul>
                City: {listCities}
            </ul>
            <ul>
                Populate: {listPopulate}
            </ul>
        </div>
    )
}

export default Cities