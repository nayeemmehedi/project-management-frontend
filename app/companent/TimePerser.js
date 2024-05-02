 export function parseDateTimeString(dateString) {
    // Check if dateString is a valid string
    if (!dateString || typeof dateString !== 'string') {
      return {
        formattedDate: '',
        formattedTime: '',
        displayDate: ''
      };
    }
  
    // Parse the date string
    const parsedDate = new Date(dateString);
  
    // Check if the parsed date is valid
    if (isNaN(parsedDate.getTime())) {
      return {
        formattedDate: '',
        formattedTime: '',
        displayDate: ''
      };
    }
  
    // Format the date and time
    const formattedDate = parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    const formattedTime = parsedDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  
    const displayDate = `${formattedDate} ${formattedTime}`;
  
    return {
      formattedDate,
      formattedTime,
      displayDate
    };
  }