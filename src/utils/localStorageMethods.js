export const addEntryToLocalStorage = ({score, startTime, difficulty}) => {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const endTime = date.getTime();

    const resultedTime = Math.floor((endTime-startTime) / 1000)

    const recordToBeAdded = `${score}-${difficulty}-${resultedTime}-${day}/${month}/${year}`

    if (localStorage.getItem('previousGames') === null)
        localStorage.setItem('previousGames', recordToBeAdded)
    else {
        const entries = localStorage.getItem('previousGames')
        localStorage.setItem('previousGames', entries.concat(`;${recordToBeAdded}`))
    }
}

const sortEntriesByScore = () => {
    return (a, b) => {        
        let comparison = 0;

        if (a.score > b.score) {
            comparison = -1
        } else if (a.score < b.score) {
            comparison = 1
        }

        return comparison
    }
}

export const getEntriesFromLocalStorage = () => {
    if (localStorage.getItem('previousGames') === null) return []

    const stringEntries = localStorage.getItem('previousGames')

    const arrayEntries = stringEntries.split(';')

    const objectifiedEntries = [] 
    
    arrayEntries.forEach(entry => {
        const data = entry.split('-')

        objectifiedEntries.push({
            score: parseInt(data[0]),
            difficulty: data[1],
            time: data[2],
            date: data[3]
        })
    })

    return objectifiedEntries.sort(sortEntriesByScore())
}