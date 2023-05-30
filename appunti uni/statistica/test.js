const dataset = [1, 3, 5, 6, 7, 7, 9, 9, 10, 11]
const fixed_position = 4;
var mean;

function calculateMean(data) {
    const n = data.length;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += data[i];
    }
  	mean = sum / n;
  	return `[media] (${sum}) / ${n} = ${mean.toFixed(fixed_position)}`;
}

function calculateStandardDeviation(data) {
    const n = data.length;
    let sumSquaredDifferences = 0;
  
    for (let i = 0; i < n; i++) {
      const difference = data[i] - mean;
      sumSquaredDifferences += difference * difference;
    }
  
    const variance = sumSquaredDifferences / n;
	
    const standardDeviation = Math.sqrt(variance);
    return `\n[dev st.] √(${sumSquaredDifferences.toFixed(fixed_position)} / ${n}) = √${variance} =  ${standardDeviation.toFixed(fixed_position)}`;
}

function calculateSampleVariance(data) {
    const n = data.length;
    let sumSquaredDifferences = 0;
  
    for (let i = 0; i < n; i++) {
      const difference = data[i] - mean;
      sumSquaredDifferences += Math.pow(difference, 2);
    }
  
    const sampleVariance = sumSquaredDifferences.toFixed(fixed_position) / (n - 1);
    return `\n[S^2] (${sumSquaredDifferences.toFixed(fixed_position)}) / ${data.length - 1} = ${sampleVariance.toFixed(fixed_position)}\n[S] √(S^2) = √${sampleVariance.toFixed(fixed_position)} = ${Math.sqrt(sampleVariance.toFixed(fixed_position))}`;
}

console.log(calculateMean(dataset), calculateStandardDeviation(dataset), calculateSampleVariance(dataset))