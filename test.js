const cmd = require('node-cmd');

cmd.get(
  'top -b -n 1',
  function(err, data, stderr){
    if (err) {
      console.log(err);
    }
    else {
      let counter = 0;
      let substring = ""
      for (let i = 0; i < data.length; i++) {
        substring += data[i];
        if (data[i] === "\n") {
          if (counter >= 6 && counter <= 10) {
            console.log(counter - 6, substring);
            // console.log("pid ",substring.slice(0,5))
            console.log("cpu % ", parseFloat(substring.slice(48, 52),10))
            console.log("mem % ", parseFloat(substring.slice(53, 58),10))
          }
          substring = "";
          counter ++;
        }
        
        if (counter > 15) {
          break;
        }
      }
    }
  }
);

