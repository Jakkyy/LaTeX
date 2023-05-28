const dataset = [1, 3, 5, 6, 7, 7, 9, 9, 10, 11]
const fixed_position = 4;

function calculateMean(data) {
    const n = data.length;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += data[i];
    }
  
    const mean = sum / n;
    return mean.toFixed(fixed_position);
}

function calculateStandardDeviation(data) {
    const n = data.length;
    const mean = calculateMean(data);
    let sumSquaredDifferences = 0;
  
    for (let i = 0; i < n; i++) {
      const difference = data[i] - mean;
      sumSquaredDifferences += difference * difference;
    }
  
    const variance = sumSquaredDifferences / n;
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

function calculateSampleVariance(data) {
    const n = data.length;
    const mean = calculateMean(data);
    let sumSquaredDifferences = 0;
  
    for (let i = 0; i < n; i++) {
      const difference = data[i] - mean;
      sumSquaredDifferences += Math.pow(difference, 2);
    }
  
    const sampleVariance = sumSquaredDifferences.toFixed(fixed_position) / (n - 1);
    return sampleVariance.toFixed(fixed_position);
}

console.log(`Media campionaria: ${calculateMean(dataset)}
Dev. st: ${calculateStandardDeviation(dataset)}
S^2: ${calculateSampleVariance(dataset)}
S: ${Math.sqrt(calculateSampleVariance(dataset)).toFixed(fixed_position)}
`)