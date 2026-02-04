const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
//const juntaNums = nums1.concat(nums2, [7, 8, 9], 'Rodrigo')
// ... rest -> ... spread
const juntaNums = [...nums1, 'Rodrigo', ...nums2, ...[7, 8 ,9]]

const lutadoresUFC = ['Dustin Poirier', 'Max Holloway', 'Charles Oliveira']
const atualCampeoesUFC = ['Alex Poatan', 'Ilia Topuria', 'Petry Yan']

const lutadores = [...lutadoresUFC, ...atualCampeoesUFC, 'Rodrigo']
console.log(lutadores)