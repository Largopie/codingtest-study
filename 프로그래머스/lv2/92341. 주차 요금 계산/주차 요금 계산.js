// 기본시간 : 180분
// 기본요금 : 5000원
// 초과시 10분당 600원

// 기본계산식 : fees[1] + Math.ceil( (값) - fees[0]) / fees[2] * fees[3]
// 기본 이하 : 기본요금 청구
// 기본시간 초과 : 

// 출차 기록 없을 시 23:59 출차된 것으로 기록
function solution(fees, records) {
    const in_out = []
    const cars = {}
    const pay = {}
    
    const change_money = (minutes) => {
        let money = 0
        if(minutes <= fees[0]){
            money = fees[1]
        }else{
            money = fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3]
        }
        return money
    }
    
    const chage_minutes = (str_in, str_out) => {
        const car_out = str_out.split(':')
        const car_in = str_in.split(':')
        
        let hours = Number(car_out[0]) - Number(car_in[0])
        let minutes = Number(car_out[1]) - Number(car_in[1])
        minutes = hours * 60 + minutes
        
        return minutes
    }
    
    for(record of records){
        arr = record.split(' ')
        if(!Object.keys(cars).includes(arr[1])){
            cars[arr[1]] = arr[0]
        }else{
            let minutes = chage_minutes(cars[arr[1]], arr[0])
            if(Object.keys(pay).includes(arr[1])) pay[arr[1]] += minutes
            else pay[arr[1]] = minutes
            delete cars[arr[1]]
        }
    }
    
    for(car in cars){
        let minutes = chage_minutes(cars[car], '23:59')
        if(!Object.keys(pay).includes(car)) pay[car] = minutes
        else pay[car]+=minutes
    }
    
    for(val in pay){
        let mon = change_money(pay[val])
        pay[val] = mon
    }
    
    const answer = []
    Object.keys(pay).sort().forEach((val) => answer.push(pay[val]))
    
    return answer
}