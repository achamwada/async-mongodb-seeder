import seed from '../seeder/index'
import job from './jobs'

let results
seed([job])
  .then(res => {
    results = res
  })
  .catch(e => console.log(e))
  .finally(async () => {
    console.log('Finally results ===>', results)
  })
