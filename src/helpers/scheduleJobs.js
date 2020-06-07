import DBConn from '../DB/connect'
import createJobPromise from './createJobPromise'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config
}
DBConn()
/**
 * @param {Array} jobs
 * @returns doneJobs
 */
export default async jobs => {
  const jobPromises = jobs.map(job => createJobPromise(job))
  const doneJobs = await Promise.all(jobPromises)
  /*doneJobs.forEach(doneJob => {
    console.log('doneJob')
  })*/
  return doneJobs
}
