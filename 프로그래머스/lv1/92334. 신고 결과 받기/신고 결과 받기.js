function solution(id_list, report, k) {
    report = new Set(report)
    const answer = [],
          stop = [],
          user = {},
          report_user = {};
    for(val of id_list){
        user[val] = []
        report_user[val] = 0
    }
    
    for(val of report){
        const from_to = val.split(' ');
        user[from_to[0]].push(from_to[1])
        report_user[from_to[1]]+=1
        if(report_user[from_to[1]] >= k) stop.push(from_to[1]);
    }
    
    for(val in user){
        let count = 0;
        user[val].map((item) => {
            if(stop.includes(item)) count++;
        })
        answer.push(count)
    }
    return answer;
}