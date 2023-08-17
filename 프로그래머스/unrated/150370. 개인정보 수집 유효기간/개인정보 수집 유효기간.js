function solution(today, terms, privacies) {
    const find_term = {}
    const date = today.split('.').map((item) => Number(item))
    const date_day = date[0]*12*28 + date[1]*28 + date[2]
    const answer = []
    
    for(val of terms){
        const arr = val.split(' ')
        find_term[arr[0]] = Number(arr[1])
    }
    
    const after = (year, month, day, plus) => {
        day += (plus*28) - 1
        month += parseInt(day / 28)
        day = day % 28
        if(day === 0){
            day = 28
            month-=1
        }
        year += parseInt(month / 12)
        month = month % 12
        if(month === 0){
            month = 12
            year -= 1
        }
        
        return day + month*28 + year*12*28;
    }
    
    for(let i=0; i < privacies.length; i++){
        const arr = privacies[i].split(' ')
        const date_arr = arr[0].split('.')
        let year = Number(date_arr[0]),
            month = Number(date_arr[1]),
            day = Number(date_arr[2]),
            term = find_term[arr[1]]
        const end_day = after(year, month, day, term)
        if(date_day - end_day > 0) answer.push(i+1)
    }
    return answer
}