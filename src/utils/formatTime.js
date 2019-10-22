


export const formatTime = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - (hours * 3600))/60);
  let seconds = time - (hours * 3600) - (minutes * 60);


  let timeString = hours.toString().padStart(2, '0') + ':' + 
                    minutes.toString().padStart(2,'0') + ':' +
                    seconds.toString().padStart(2, '0');

  return timeString;
};