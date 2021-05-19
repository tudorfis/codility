
function solution(S, K) {
    const daysOfTheWeek = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
    const indexOfDay = daysOfTheWeek.indexOf( S )

    const futureIndexOfDay = ( ( K % 7 ) + indexOfDay ) % 7
    
    return daysOfTheWeek[  futureIndexOfDay ]
}

const sol1 = solution( 'Wed', 2 )
const sol2 =solution( 'Sat', 23 )

console.log({ sol1, sol2 })
