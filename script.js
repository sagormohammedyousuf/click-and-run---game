const winner = document.getElementById("winner");

const timeArray = []; // store run time // 
const playerNameArray = [] // store input player name // 


const playerOne = document.getElementById("player-one");
const run = document.getElementById("run-1");
const pOneTime = document.getElementById("pOneTime");
const pOneName = document.getElementById("pOneName");

let a = 0; // initial value // 
run.addEventListener('click', () => {


  if (a === 60) {
    startTime = performance.now(); // start count run time // 
  }

  a = a + 30;

  switch (a) {

    case 30:
      var modal = document.getElementById("playerNameModal");
      modal.style.display = "block";

      break;
    case 60:
      playerOne.style.marginLeft = `${a}px`;
      break;

    case 90:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 120:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 150:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 180:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 210:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 240:
      playerOne.style.marginLeft = `${a}px`;
      break;

    case 270:
      playerOne.style.marginLeft = `${a}px`;
      break

    case 300:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 330:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 360:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 390:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 420:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 450:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 480:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 510:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 540:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 570:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 600:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 630:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 660:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 690:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 720:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 750:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 780:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 810:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 840:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 870:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 900:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 930:
      playerOne.style.marginLeft = `${a}px`;
      break
    case 960:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 990:
      playerOne.style.marginLeft = `${a}px`;
      break;
    case 1020:
      playerOne.style.marginLeft = `1000px`;
      break;

    case 1050:
      playerOne.style.transform = "rotate(-180deg)"
      let pNameText = document.getElementById("playerNumber");
      pNameText.textContent = "1"
      pNameText.style.transform = "rotate(180deg)"
      break;

    case 1080:
      playerOne.style.marginLeft = "990px"
      break;

    case 1110:
      playerOne.style.marginLeft = `960px`;
      break;

    case 1140:
      playerOne.style.marginLeft = `930px`;
      break;


    case 1170:
      playerOne.style.marginLeft = `900px`;
      break;



    case 1200:
      playerOne.style.marginLeft = `870px`;
      break;



    case 1230:
      playerOne.style.marginLeft = `840px`;
      break;


    case 1260:
      playerOne.style.marginLeft = `810px`;
      break;

    case 1290:
      playerOne.style.marginLeft = `780px`;
      break;


    case 1320:
      playerOne.style.marginLeft = `750px`;
      break;

    case 1350:
      playerOne.style.marginLeft = `720px`;
      break;

    case 1380:
      playerOne.style.marginLeft = `690px`;
      break;

    case 1410:
      playerOne.style.marginLeft = `660px`;
      break;

    case 1440:
      playerOne.style.marginLeft = `630px`;
      break;


    case 1470:
      playerOne.style.marginLeft = `600px`;
      break;


    case 1500:
      playerOne.style.marginLeft = `570px`;
      break;



    case 1530:
      playerOne.style.marginLeft = `540px`;
      break;




    case 1560:
      playerOne.style.marginLeft = `510px`;
      break;




    case 1590:
      playerOne.style.marginLeft = `480px`;
      break;



    case 1620:
      playerOne.style.marginLeft = `450px`;
      break;



    case 1650:
      playerOne.style.marginLeft = `420px`;
      break;



    case 1680:
      playerOne.style.marginLeft = `390px`;
      break;


    case 1710:
      playerOne.style.marginLeft = `360px`;
      break;




    case 1740:
      playerOne.style.marginLeft = `330px`;
      break;




    case 1770:
      playerOne.style.marginLeft = `300px`;
      break;




    case 1800:
      playerOne.style.marginLeft = `270px`;
      break;



    case 1830:
      playerOne.style.marginLeft = `240px`;
      break;



    case 1860:
      playerOne.style.marginLeft = `210px`;
      break;



    case 1890:
      playerOne.style.marginLeft = `180px`;
      break;


    case 1920:
      playerOne.style.marginLeft = `160px`;
      break;




    case 1950:
      playerOne.style.marginLeft = `130px`;
      break;



    case 1980:
      playerOne.style.marginLeft = `100px`;
      break;



    case 2010:
      playerOne.style.marginLeft = `75px`;
      break;


    case 2040:
      playerOne.style.marginLeft = `50px`;
      break;


    case 2070:
      playerOne.style.marginLeft = `25px`;
      break;


    case 2100:
      playerOne.style.marginLeft = `0px`;
      const endTime = performance.now(); // run time time end //
      const elapsedTimeOne = endTime - startTime; // calculate  run time
      // timeArray.push(elapsedTimeOne / 1000);
      // pOneTime.textContent = Math.round(elapsedTimeOne / 1000 ) + " second";



      // const roundTimeOne = Math.round(elapsedTimeOne / 1000)
      timeArray.push(elapsedTimeOne / 1000);

      pOneTime.textContent = (elapsedTimeOne / 1000).toFixed(3) + " second";


      // push player name //

      runTwo.classList.add("flash");
      runTwo.textContent = "Click Here";





      break;
    case 2130:
      alert("run finished")
      break;




  }

})


/// player 2 / /

const playerTwo = document.getElementById("player-two");
const runTwo = document.getElementById("run-2");
const pTwoTime = document.getElementById("pTwoTime");
const pTwoName = document.getElementById("ptwoName");
const rText = document.getElementById("r-text")

let b = 0;
runTwo.addEventListener('click', () => {

  // runTwo.textContent = "player-2"
  if (b === 30) {
    startTime = performance.now();  // run time calculate start
  }
  b = b + 30; // initial value //
  switch (b) {

    case 30:
      let modal = document.getElementById("playerNameModalTwo");
      modal.style.display = "block";
      modal.style.marginTop = "13rem"
      break
    case 60:
      playerTwo.style.marginLeft = `${b}px`;
      break

    case 90:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 120:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 150:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 180:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 210:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 240:
      playerTwo.style.marginLeft = `${b}px`;
      break;

    case 270:
      playerTwo.style.marginLeft = `${b}px`;
      break

    case 300:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 330:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 360:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 390:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 420:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 450:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 480:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 510:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 540:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 570:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 600:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 630:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 660:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 690:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 720:
      playerTwo.style.marginLeft = `${b}px`;

    case 750:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 780:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 810:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 840:
      playerTwo.style.marginLeft = `${b}`;
      break;
    case 870:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 900:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 930:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 960:
      playerTwo.style.marginLeft = `${b}px`;
      break;
    case 990:
      playerTwo.style.marginLeft = `${b}px`;
      break
    case 1020:
      playerTwo.style.marginLeft = `1000px`;
      break;
    case 1050:
      playerTwo.style.transform = `rotate(-180deg)`

      let pNameText = document.getElementById("playerTwoNumber");
      pNameText.textContent = "2"
      pNameText.style.transform = "rotate(180deg)"
      break;

    case 1080:
      playerTwo.style.marginLeft = "990px"
      break;

    case 1110:
      playerTwo.style.marginLeft = `960px`;
      break;

    case 1140:
      playerTwo.style.marginLeft = `930px`;
      break;


    case 1170:
      playerTwo.style.marginLeft = `900px`;
      break;



    case 1200:
      playerTwo.style.marginLeft = `870px`;
      break;



    case 1230:
      playerTwo.style.marginLeft = `840px`;
      break;


    case 1260:
      playerTwo.style.marginLeft = `810px`;
      break;

    case 1290:
      playerTwo.style.marginLeft = `780px`;
      break;


    case 1320:
      playerTwo.style.marginLeft = `750px`;
      break;

    case 1350:
      playerTwo.style.marginLeft = `720px`;
      break;

    case 1380:
      playerTwo.style.marginLeft = `690px`;
      break;

    case 1410:
      playerTwo.style.marginLeft = `660px`;
      break;

    case 1440:
      playerTwo.style.marginLeft = `630px`;
      break;


    case 1470:
      playerTwo.style.marginLeft = `600px`;
      break;


    case 1500:
      playerTwo.style.marginLeft = `570px`;
      break;



    case 1530:
      playerTwo.style.marginLeft = `540px`;
      break;




    case 1560:
      playerTwo.style.marginLeft = `510px`;
      break;




    case 1590:
      playerTwo.style.marginLeft = `480px`;
      break;



    case 1620:
      playerTwo.style.marginLeft = `450px`;
      break;



    case 1650:
      playerTwo.style.marginLeft = `420px`;
      break;



    case 1680:
      playerTwo.style.marginLeft = `390px`;
      break;


    case 1710:
      playerTwo.style.marginLeft = `360px`;
      break;




    case 1740:
      playerTwo.style.marginLeft = `330px`;
      break;




    case 1770:
      playerTwo.style.marginLeft = `300px`;
      break;




    case 1800:
      playerTwo.style.marginLeft = `270px`;
      break;



    case 1830:
      playerTwo.style.marginLeft = `240px`;
      break;



    case 1860:
      playerTwo.style.marginLeft = `210px`;
      break;



    case 1890:
      playerTwo.style.marginLeft = `180px`;
      break;


    case 1920:
      playerTwo.style.marginLeft = `160px`;
      break;




    case 1950:
      playerTwo.style.marginLeft = `130px`;
      break;



    case 1980:
      playerTwo.style.marginLeft = `100px`;
      break;



    case 2010:
      playerTwo.style.marginLeft = `75px`;
      break;


    case 2040:
      playerTwo.style.marginLeft = `50px`;
      break;


    case 2070:
      playerTwo.style.marginLeft = `25px`;
      break;


    case 2100:
      playerTwo.style.marginLeft = `0px`;
      const endTime = performance.now();
      const elapsedTimeTwo = endTime - startTime;

      const roundTimeTwo = (elapsedTimeTwo / 1000)
      timeArray.push(roundTimeTwo);


      pTwoTime.textContent = (elapsedTimeTwo / 1000).toFixed(3) + " second";


      // push player name //

      // playerArray.push("Player-2");

      runThree.classList.add("flash");
      runThree.textContent = "Click Here";

      break;
    case 2130:
      alert("run finished")
      break;
  }

})




/// player 3 // 





const playerThree = document.getElementById("player-three");
const runThree = document.getElementById("run-3");
const pThreeTime = document.getElementById("pThreeTime");
const gif = document.getElementById("gif")
const animation = document.getElementById("animation");

const pThreeName = document.getElementById("pThreeName");

const winningStage = document.getElementById("winning-stage");
// const stageOne  = document.querySelector("stageOne");
// const stageTwo = document.getElementById("stageTwo");
// const stageThree = document.getElementById("stageThree");


let c = 0;
runThree.addEventListener('click', () => {
  runThree.classList.add("flash");
  // runThree.textContent = "player-3"

  if (c === 30) {
    startTime = performance.now();
  }

  c = c + 30;

  switch (c) {

    case 30:
      // let pNameThree = prompt("Please enter player name: ");
      // pThreeName.textContent = pNameThree;
      // playerThree.style.marginLeft = `${c}px`;


      let modal = document.getElementById("playerNameModalThree");
      modal.style.display = "block";

      modal.style.marginTop = "21rem"
      break
    case 60:
      playerThree.style.marginLeft = `${c}px`;
      break

    case 90:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 120:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 150:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 180:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 210:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 240:
      playerThree.style.marginLeft = `${c}px`;
      break;

    case 270:
      playerThree.style.marginLeft = `${c}px`;
      break

    case 300:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 330:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 360:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 390:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 420:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 450:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 480:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 510:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 540:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 570:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 600:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 630:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 660:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 690:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 720:
      playerThree.style.marginLeft = `${c}px`;

    case 750:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 780:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 810:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 840:
      playerThree.style.marginLeft = `${c}`;
      break;
    case 870:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 900:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 930:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 960:
      playerThree.style.marginLeft = `${c}px`;
      break;
    case 990:
      playerThree.style.marginLeft = `${c}px`;
      break
    case 1020:
      playerThree.style.marginLeft = `$1010px`;
    case 1050:
      playerThree.style.transform = `rotate(-180deg)`
      // rText.style.transform = "rotate(0deg)"
      let pNameText = document.getElementById("playerThreeNumber");
      pNameText.textContent = "3"
      pNameText.style.transform = "rotate(180deg)"
      break;

    case 1080:
      playerThree.style.marginLeft = "990px"
      break;

    case 1110:
      playerThree.style.marginLeft = `960px`;
      break;

    case 1140:
      playerThree.style.marginLeft = `930px`;
      break;


    case 1170:
      playerThree.style.marginLeft = `900px`;
      break;



    case 1200:
      playerThree.style.marginLeft = `870px`;
      break;



    case 1230:
      playerThree.style.marginLeft = `840px`;
      break;


    case 1260:
      playerThree.style.marginLeft = `810px`;
      break;

    case 1290:
      playerThree.style.marginLeft = `780px`;
      break;


    case 1320:
      playerThree.style.marginLeft = `750px`;
      break;

    case 1350:
      playerThree.style.marginLeft = `720px`;
      break;

    case 1380:
      playerThree.style.marginLeft = `690px`;
      break;

    case 1410:
      playerThree.style.marginLeft = `660px`;
      break;

    case 1440:
      playerThree.style.marginLeft = `630px`;
      break;


    case 1470:
      playerThree.style.marginLeft = `600px`;
      break;


    case 1500:
      playerThree.style.marginLeft = `570px`;
      break;



    case 1530:
      playerThree.style.marginLeft = `540px`;
      break;




    case 1560:
      playerThree.style.marginLeft = `510px`;
      break;




    case 1590:
      playerThree.style.marginLeft = `480px`;
      break;



    case 1620:
      playerThree.style.marginLeft = `450px`;
      break;



    case 1650:
      playerThree.style.marginLeft = `420px`;
      break;



    case 1680:
      playerThree.style.marginLeft = `390px`;
      break;


    case 1710:
      playerThree.style.marginLeft = `360px`;
      break;




    case 1740:
      playerThree.style.marginLeft = `330px`;
      break;




    case 1770:
      playerThree.style.marginLeft = `300px`;
      break;




    case 1800:
      playerThree.style.marginLeft = `270px`;
      break;



    case 1830:
      playerThree.style.marginLeft = `240px`;
      break;



    case 1860:
      playerThree.style.marginLeft = `210px`;
      break;



    case 1890:
      playerThree.style.marginLeft = `180px`;
      break;


    case 1920:
      playerThree.style.marginLeft = `160px`;
      break;




    case 1950:
      playerThree.style.marginLeft = `130px`;
      break;



    case 1980:
      playerThree.style.marginLeft = `100px`;
      break;



    case 2010:
      playerThree.style.marginLeft = `75px`;
      break;


    case 2040:
      playerThree.style.marginLeft = `50px`;
      break;


    case 2070:
      playerThree.style.marginLeft = `25px`;
      break;


    case 2100:
      playerThree.style.marginLeft = `0px`;
      const endTime = performance.now();
      const elapsedTimeThree = endTime - startTime; // count run time

      const roundTimeThree = (elapsedTimeThree / 1000);
      timeArray.push(roundTimeThree); // push time array 
      pThreeTime.textContent = (elapsedTimeThree / 1000).toFixed(3) + " second";





      break;
    case 2130:
      alert("Game is over");

      const minValue = Math.min(...timeArray); // finding minimum run time
      const minIndex = timeArray.indexOf(minValue); // find min value index 

      gif.style.display = "block";
      animation.style.display = "flex";

      playerOne.style.display = "none";
      playerThree.style.display = "none";
      playerTwo.style.display = "none";

      winningStage.style.display = "flex";

      const stageOne = document.querySelector("#stageOne");

      stageOne.style.backgroundColor = "#38419D";


      // finding who winner // 
      if (minIndex === 0) {
        winner.textContent = "player-a";
        stageOne.innerText = "player-a";
        let name = playerNameArray[0];
        const winnerName = document.getElementById("stagePNameOne");
        winnerName.textContent = name;
        winnerName.style.background = '#304D30;'


        // animation add //0

        var run = document.getElementById("run-1");
        var runTwoDivX = document.getElementById("run-1-div");
        var cloneRun = run.cloneNode(true);
        runTwoDivX.appendChild(cloneRun);


        run.classList.add("flyAnimWinnerTopFirst");




      } else if (minIndex === 1) {
        winner.textContent = "player-b";
        stageOne.innerText = "player-b";

        let name = playerNameArray[1];
        const winnerName = document.getElementById("stagePNameOne");
        winnerName.textContent = name;
        winnerName.style.background = '#31304D';


        // set animation when player to will be first // 

        winnerName.style.display = "none"
        const runTwo = document.getElementById("run-2");



        let runTwoDivZ = document.getElementById("run-2-div");
        let cloneRun = runTwo.cloneNode(true);
        runTwoDivZ.appendChild(cloneRun);


        runTwo.classList.add("flyAnimWinnerMidFirst");



      } else if (minIndex === 2) {
        winner.textContent = "player-c"
        stageOne.innerText = "player-c";

        let name = playerNameArray[2];
        const winnerName = document.getElementById("stagePNameOne");
        winnerName.textContent = name;
        winnerName.style.background = "#DBCC95"

        // add animation //
        const runTwo = document.getElementById("run-3");
        let runTwoDivThree = document.getElementById("run-3-div");
        let cloneRun = runThree.cloneNode(true);
        runTwoDivThree.appendChild(cloneRun);


        runTwo.classList.add("flyAnimWinnerBottomFirst");

      } else {
        console.log("No winner");
      }






      // stage 2 text add //

      // finding who 2nd // 
      const modifiedArray = timeArray.filter(value => value !== minValue);

      // Step 3: Find the minimum value again in the modified array
      const secondMinValue = Math.min(...modifiedArray);


      const secondMinValueIndex = timeArray.indexOf(secondMinValue);

      console.log(secondMinValue);

      const stageTwo = document.querySelector("#stageTwo");

      stageTwo.style.backgroundColor = "green";

      if (secondMinValueIndex === 0) {
        stageTwo.textContent = "player-a";

        let name = playerNameArray[0];
        const winnerNameTwo = document.getElementById("stagePNameTwo");

        winnerNameTwo.textContent = name;

        winnerNameTwo.style.background = '#304D30';




        //clone element & animation //

        var run = document.getElementById("run-1");
        var runTwoDivX = document.getElementById("run-1-div");
        var cloneRun = run.cloneNode(true);
        runTwoDivX.appendChild(cloneRun);


        run.classList.add("flyAnimWinnerTopSecond");


      } else if (secondMinValueIndex === 1) {

        stageTwo.textContent = "player-b";
        let name = playerNameArray[1];
        const winnerNameTwo = document.getElementById("stagePNameTwo");
        winnerNameTwo.textContent = name;
        winnerNameTwo.style.background = 'hsl(242, 40%, 25%)';

        // set animation for stage player// 
        winnerNameTwo.style.display = "none"
        const runTwo = document.getElementById("run-2");






        //clone element

        var runTwoDivX = document.getElementById("run-2-div");
        var cloneRun = runTwo.cloneNode(true);
        runTwoDivX.appendChild(cloneRun);
        // let runTwoDup = document.getElementById("run-two-dup");
        // runTwoDup.style.display = "block"

        runTwo.classList.add("flyAnimWinnerMidSecond");


      } else if (secondMinValueIndex === 2) {


        stageTwo.textContent = "player-c"

        let name = playerNameArray[2];
        const winnerNameTwo = document.getElementById("stagePNameTwo");

        winnerNameTwo.textContent = name;


        winnerNameTwo.style.background = '#DBCC95';


        const runTwo = document.getElementById("run-3");
        let runTwoDivThree = document.getElementById("run-3-div");
        let cloneRun = runThree.cloneNode(true);
        runTwoDivThree.appendChild(cloneRun);


        runTwo.classList.add("flyAnimWinnerBottomSecond");

      } else {
        console.log("No winner");
      }



      // 3rd stage // 

      // finding who positioned 3rd // 
      const maxValue = Math.max(...timeArray);

      const maxValueIndex = timeArray.indexOf(maxValue);
      const stageThree = document.getElementById("stageThree");



      if (maxValueIndex === 0) {
        stageThree.textContent = "player-1";
        let name = playerNameArray[0];
        const winnerNameTwo = document.getElementById("stagePNameThree");
        winnerNameTwo.textContent = name;
        winnerNameTwo.style.background = '#304D30';
        winnerNameTwo.style.display = none;


        //clone element & animation //

        var run = document.getElementById("run-1");
        var runTwoDivX = document.getElementById("run-1-div");
        var cloneRun = run.cloneNode(true);
        runTwoDivX.appendChild(cloneRun);


        run.classList.add("flyAnimWinnerTopThird");
        // flyAnimWinnerTopThird 
 


      } else if (maxValueIndex === 1) {
        stageThree.textContent = "player-b";
        let name = playerNameArray[1];
        const winnerNameTwo = document.getElementById("stagePNameThree");
        winnerNameTwo.textContent = name;
        winnerNameTwo.style.background = 'hsl(242, 40%, 25%)';


        // ‍animation //

        // winnerNameTwo.style.display = "none"
        const runTwo = document.getElementById("run-2");
        winnerNameTwo.style.display = "none";

        //clone element

        let runTwoDiv = document.getElementById("run-2-div");
        let cloneRun = runTwo.cloneNode(true);
        runTwoDiv.appendChild(cloneRun);


        runTwo.classList.add("flyAnimWinnerMidThird");







      } else if (maxValueIndex === 2) {
        stageThree.textContent = "player-c";
        let name = playerNameArray[2];
        const winnerNameTwo = document.getElementById("stagePNameThree");
        winnerNameTwo.textContent = name;

        winnerNameTwo.style.background = '#DBCC95';


        // add animation ///
        const runTwo = document.getElementById("run-3");
        let runTwoDivThree = document.getElementById("run-3-div");
        let cloneRun = runThree.cloneNode(true);
        runTwoDivThree.appendChild(cloneRun);


        runTwo.classList.add("flyAnimWinnerBottomThird");



      } else {
        console.log("No winner");
      }

      // refresh btn animation // 
      let refreshFlash = document.getElementById("refreshImg");
      refreshFlash.classList.remove("rotate-scale-up");
      refreshFlash.classList.add("flashRef");
      // refreshFlash.style.display = "none";


      // code for copy run button and set top off stage // 

      // const runThree = document.getElementById("run-3");
      // runThree.classList.add ("flyAnimWinnerBottomFirst");

      // run.style. = ""
      // const clickDiv = document.getElementById("click-div");
      // clickDiv.style  = `
      // width : 100%;
      // height : 50vh;
      // display: flex;
      // align-item: center;
      // justify-content: space-around;

      // `
      // setInterval(() => {
      //   const stagePNameThree = document.getElementById("stagePNameThree");
      //   stagePNameThree.style.display = "flex";
      // }, 3000);

      break;
  }
})

// refresh the page //

const refreshBtn = document.getElementById("refresh");

refreshBtn.addEventListener("click", () => {
  location.reload();
})



// modal 1st player // 

function openModal() {
  var modal = document.getElementById("playerNameModal");
  modal.style.display = "block";

  // Listen for the animationend event to ensure the modal is fully displayed
  modal.addEventListener("animationend", function () {
    var playerNameInputF = document.getElementById("playerNameInput");
    playerNameInputF.focus();
  }, { once: true }); // Use { once: true } to remove the event listener after it's triggered once
}

// close the modal //
function closeModal() {
  var modal = document.getElementById("playerNameModal");
  modal.style.display = "none";
}

//when press escape key the modal will be close // 
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

function setPlayerName() {
  var playerNameInput = document.getElementById("playerNameInput");
  var pOneName = document.getElementById("pOneName");

  // Check if the input is not empty
  if (playerNameInput.value.trim() !== "") {
    pOneName.textContent = playerNameInput.value; //set player name
    run.textContent = playerNameInput.value;
    playerNameArray.push(playerNameInput.value); // push player name in name array //

    closeModal(); // Close the modal after setting the name //

    playerNameInput.value = "";
  } else {
    alert("Please enter a valid player name.");
  }
}


// when click enter 




// modal player 2 // 


function openModalTwo() {
  let modal = document.getElementById("playerNameModalTwo");
  modal.style.display = "block";
}

function closeModalTwo() {
  var modal = document.getElementById("playerNameModalTwo");
  modal.style.display = "none";
}

//when press escape key the modal will be close // 
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalTwo();

  }
});



function setPlayerNameTwo() {
  var playerNameInputTwo = document.getElementById("playerNameInputTwo");
  var pTwoName = document.getElementById("ptwoName");

  // Check if the input is not empty
  if (playerNameInputTwo.value.trim() !== "") {
    pTwoName.textContent = playerNameInputTwo.value;
    runTwo.textContent = playerNameInputTwo.value;
    playerNameArray.push(playerNameInputTwo.value)
    closeModalTwo(); // Close the modal after setting the name

    playerNameInputTwo.value = "";
  } else {
    alert("Please enter a valid player name.");
  }


}

// when click enter 


function handleKeyPress(event) {
  if (event.key === "Enter") {
    setPlayerNameTwo();
  }
}
// modal 3 // 




function openModalThree() {
  let modal = document.getElementById("playerNameModalThree");
  modal.style.display = "block";
}

function closeModalThree() {
  var modal = document.getElementById("playerNameModalThree");
  modal.style.display = "none";

}

function setPlayerNameThree() {
  var playerNameInputThree = document.getElementById("playerNameInputThree");
  var pThreeName = document.getElementById("pThreeName");

  // Check if the input is not empty
  if (playerNameInputThree.value.trim() !== "") {
    pThreeName.textContent = playerNameInputThree.value;
    runThree.textContent = playerNameInputThree.value;
    playerNameArray.push(playerNameInputThree.value)
    closeModalThree(); // Close the modal after setting the name //

    playerNameInputThree.value = "";
  } else {
    alert("Please enter a valid player name.");
  }



}

// when click escape key //

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalThree();
  }
});


//    when click enter

// playerNameInputThree.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     setPlayerNameThree();
//   }
// });

// console.log(playerNameArray);



