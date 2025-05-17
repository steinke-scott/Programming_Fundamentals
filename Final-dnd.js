/*  
  Generate a DnD (Race names changed for funsies) character's ability scores using a 3d6 roll.  
  The user can type in as many characters as they want, until they hit cancel and then it will display all of them. I only tested up to three. I had to look up the math ones to make this work for me, I did run into plenty of issues, but the trouble shooting steps you provided helped a lot, and I cannot lie, some co-pilot asks helped out too. 
*/

function roll3d6() {
  return Math.floor(Math.random() * 6 + 1) +
         Math.floor(Math.random() * 6 + 1) +
         Math.floor(Math.random() * 6 + 1);
}

function getRaceBonus(race) {
  let bonuses = {
    "Pointy Ear Guy": { Dexterity: 2 },
    "Short Bearded Fellow": { Constitution: 2 },
    "Standard NPC": { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 1, Wisdom: 1, Charisma: 1 }
  };

  return bonuses[race] || {};
}

function generateCharacter(race) {
  let stats = {
    Strength: roll3d6(),
    Dexterity: roll3d6(),
    Constitution: roll3d6(),
    Intelligence: roll3d6(),
    Wisdom: roll3d6(),
    Charisma: roll3d6()
  };

  let bonus = getRaceBonus(race);
  
  // Race bonuses!!!!
  for (let stat in bonus) {
    stats[stat] += bonus[stat];
  }

  return stats;
}

function displayCharacterStats(stats) {
  document.write("<h3>Character Stats:</h3>");
  document.write("<ul>");
  for (let stat in stats) {
    document.write(`<li>${stat}: ${stats[stat]}</li>`);
  }
  document.write("</ul>");
}

function startCharacterCreation() {
  let race;
  while (true) {
    race = prompt("Choose a race: Pointy Ear Guy, Short Bearded Fellow, Standard NPC");

    switch (race) {
      case "Pointy Ear Guy":
      case "Short Bearded Fellow":
      case "Standard NPC":
        let characterStats = generateCharacter(race);
        document.write(`<h3>Race selected: ${race}</h3>`);
        displayCharacterStats(characterStats);
        break;
      default:
        alert("Invalid race selected. Please choose Pointy Ear Guy, Short Bearded Fellow, or Standard NPC.");
        continue; // Keep asking the same question until they type it in right or click cancel
    }

    if (!confirm("Do you want to roll another character?")) {
      break;
    }
  }
  
  document.write("<p>Bye Bye! Have fun storming the castle!!</p>");
}

// Run the thing
startCharacterCreation();