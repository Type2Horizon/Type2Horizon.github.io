function getSleepHours(day) {
  switch(day) {
    case 'monday':
        return parseFloat(document.getElementById('user_defined_monday').value,10) || 0;
            break;
    case 'tuesday':
        return parseFloat(document.getElementById('user_defined_tuesday').value,10) || 0;
            break;
    case 'wednesday':
        return parseFloat(document.getElementById('user_defined_wednesday').value,10) || 0;
            break;
    case 'thursday':
        return parseFloat(document.getElementById('user_defined_thursday').value,10) || 0;
            break;
    case 'friday':
        return parseFloat(document.getElementById('user_defined_friday').value,10) || 0;
            break;
    case 'saturday':
        return parseFloat(document.getElementById('user_defined_saturday').value,10) || 0;
            break;
    case 'sunday':
        return parseFloat(document.getElementById('user_defined_sunday').value,10) || 0;
            break;
  }
};
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
const getIdealSleepHours = () => {
    const idealHours = parseFloat(document.getElementById('user_defined_sleep_goal').value,10) || 8;
    return idealHours * 7;
};
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        document.getElementById('sleep_calculation_text').innerHTML = 'You got the perfect amount of sleep!';
    } else if (actualSleepHours > idealSleepHours) {
        document.getElementById('sleep_calculation_text').innerHTML = 'You over slept by ' + (actualSleepHours - idealSleepHours) + ' hours!';
    } else {
        document.getElementById('sleep_calculation_text').innerHTML = 'You under slept by ' + (idealSleepHours - actualSleepHours) + ' hours!';
    }
};
document.getElementById('calculate_dleep_debt').addEventListener('click', calculateSleepDebt);