console.log('tenses = {');
for(let x1 of [ 'Statement', 'Question' ]) {
  for(let x2 of [ 'Positive', 'Negative' ]) {
    for(let x3 of [ 'Past', 'Present', 'Future' ]) {
      for(let x4 of [ 'Simple', 'Continuous', 'Perfect', 'PerfectContinuous' ]) {
        for(let x5 of [ 'I', 'He She It', 'We You They' ]) {
          console.log(`  '${ x1 } ${ x2 } ${ x3 } ${ x4 } ${ x5 }': '???',`);
        }
      }
    }
  }
}
console.log('};');
