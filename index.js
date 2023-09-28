// Code your solution in this file!

function distanceFromHqInBlocks(){
    return 1;
}
function distanceFromHqInBlocks(){
    return 8;
}
function distanceFromHqInBlocks(distance){
    if(distance < 42){
        return 42 - distance ;
    }
    else{
       return distance - 42  }
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

 function  distanceTravelledInFeet( start , distenation){
   
    if(distenation < start){
        return (start -distenation) * 264;

    }
    else {
        return (distenation - start) * 264;
    }

 }
 function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
      if (  distance < 400){
        return 0;
      } else if(distance >= 400 && distance <= 2000){
       return (distance-400)* 0.02;
      }
      else if(distance > 2000 && distance <= 2500)  {
        return 25;

      }
      else if( distance > 2500){
        return "cannot travel that far";
      }
 }
   
   