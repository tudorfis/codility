function solution( S ) {
    let posibilities = 0

    // here we do recursive operation through the string
    posibilities += generatePosibilities( S, 3 )
    
    return posibilities
}

function generatePosibilities( subSegment, dot ) {
    // if no subsegment then obviously no posibilities
    if ( !subSegment ) return 0
    
    // we need to stop the recursion when dot is zero
    if ( dot === 0 ) {

        // we want to know if the last subSegment is a valid one
        return isValidSubSegment( subSegment ) ? 1 : 0
    }

    let posibilities = 0

    let i = 1
    while ( i <= 3 ) {

        // we will get the sub sub segment and check if it's valid
        const subSubSegment = subSegment.substr( 0, i )

        if ( isValidSubSegment( subSubSegment ) ) {

            // iterate through sub sub sub sub... you get the idea segments, until the dot will decrement to 0
            posibilities += generatePosibilities( subSegment.substr( i ), dot - 1 )
        }

        i++
    }

    // finally we exit our recursion with all the posibilities
    return posibilities
}

function isValidSubSegment( subSegment ) {
  // we need to check if the lenght is bigger than 3 or if we have faulty values
  if ( 
    subSegment.length > 3 ||
    ( subSegment[ 0 ] === '0' && subSegment.length > 1 ) 
  ) {
    return false;
  }

  // here we return true / false depending if it's in the right ip address range, 0 - 255
  return (
      +subSegment >= 0 && 
      +subSegment <= 255
  )
}

const sol1 = solution("4216712120"); // 2
const sol2 = solution("255255255255"); // 1
const sol3 = solution("188212"); // 8

console.log({ sol1, sol2, sol3 });
