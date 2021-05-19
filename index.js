function solution(P, S) {
  const Pclone = JSON.parse(JSON.stringify(P));
  let totalCars = P.length

  for (let i = 0; i <= P.length; i++) {
    // if last element then we stop
    if ( Pclone[ i + 1 ] === undefined ) break
    
    // if we already got rid of a car then we continue
    if ( Pclone[ i ] === 0 ) continue

    // we move everybody from the next car in the current car and empty the next car
    Pclone[ i ] = Pclone[ i ] + Pclone[ i + 1 ];
    Pclone[ i + 1 ] = 0 

    // if to many people are in the current car, then we move some back to the next car
    if ( Pclone[ i ] >= S[ i ] ) {
        Pclone[ i + 1 ] = Pclone[ i ] - S[ i ]
        Pclone[ i ] = S[ i ]
    } 
    
    // if the next car is empty then we got rid o one and we decrement the total
    if ( Pclone[ i + 1 ] === 0 ) totalCars--
  }

   return totalCars
}

// solution([1, 4, 1], [1, 5, 1]) // 2
// solution([4, 4, 2, 4], [5, 5, 2, 5]) // 3
solution([2, 3, 4, 2], [2, 5, 7, 2]) // 2

