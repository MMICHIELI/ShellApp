/**
 * Created by mmichieli on 04/02/2018.
 */
export class SortBy {
  // Function which sorts by no matter which field, in ascending and in descdending order
  // The last parameter is optional and is a function that we may give in order to convert to int or to make the sort case insensitive, etc
  // Example of call :
  // --> exampleArray.sort(sort_by('id', true, parseInt)); -Sort the elements in ascending order by id.
  // If the id is not an integer and is for example a string, we may give a parameter the parseInt function
  // to do the conversion.
  // -->exampleArray.(sort_by('name', false, (a) =>{return a.toUpperCase()})); Sort the elements by name (case insensitive)
  public static sortByField = (field: string, ascending: boolean, functionToApply?: Function) => {

    let convertField =  (x) => {
      return functionToApply ? functionToApply(x[field]) : x[field];
    };

    return (a, b) => {
      let A = convertField(a);
      let B = convertField(b);
      return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1, 1][+!!ascending];
    };
  }

  constructor() {
  }

}
