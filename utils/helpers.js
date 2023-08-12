module.exports = {
    format_date: (date) => {
      const actionDate = new Date(date)
      // Format date as MM/DD/YYYY
      return `${actionDate.getMonth() + 1}/${actionDate.getDate()}/${actionDate.getFullYear()}`
    }
  };
  