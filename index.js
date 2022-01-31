function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2500) {
    return `No can do.`;
  }
  return `I will gladly take your thirty bucks.`;
}

function ternaryCheckCity(ifCity) {
  console.log(ifCity);
  return ifCity === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(ifTip) {
  console.log(ifTip);
  switch (ifTip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
