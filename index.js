// Code your solution here:

function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function (driver) {
    return driver.revenue > amount
  })
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount)
  .map(driver => driver.name)
}


function exactMatch(drivers, details) {
  return drivers.filter(function (driver) {
    return driver.name === details.name || driver.revenue === details.revenue
  })
}

function exactMatchToList(drivers, details) {
  return exactMatch(drivers, details)
  .map(driver => driver.name)
}


