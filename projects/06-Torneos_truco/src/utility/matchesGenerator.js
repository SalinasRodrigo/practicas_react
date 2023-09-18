export const matchesGenerator = (numberTeams) => {
  
  let rounds = numberTeams -1
  if ((numberTeams%2) == 1){
    rounds = numberTeams
  }
  
  let mpr = (rounds+1) / 2
  let t = Array.from(Array(rounds+1), (_, i) => i )

  let matches = []
  for (let r = 0; r < rounds; r++) {
    matches.push([])

    for (let m = 0; m < mpr; m++) {
      // console.log("m:",m,"el otro:",t.length-1-m)
      // console.log([t[m],t[t.length-1-m]])
      matches[r].push([t[m],t[t.length-1-m]])
    }
    
    t.splice(1,0, t.pop())
  }
  return matches
}