function formatString(input: string, toUpper?: boolean): string{
    if(toUpper === false){
        return input.toLowerCase()
    }else{
        return input.toUpperCase()
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
  const Filtered_By_Rating_Items: { title: string; rating: number }[] = []
  
    for(let i=0; i< items.length; i++){
        if(items[i].rating >=4){
            Filtered_By_Rating_Items.push(items[i])
        }
    }
    return Filtered_By_Rating_Items;
}
console.log("Hello")