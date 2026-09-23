// aldo halloween world custom zombies
// classic script (no imports): defines globals like CZombie.js does.
// all art is inherited from the base zombie, only stats/names change.

var oVampireZombie = InheritO(oConeheadZombie, {
	EName: "oVampireZombie",
	CName: "Vampire Zombie",
	OrnHP: 200,
	Lvl: 2,
	SunNum: 75,
	OSpeed: 3.0,
	Speed: 3.0,
	Attack: 100,
	PicArr: (function () {
		var b = "images/Zombies/VampireZombie/";
		var a = "images/Zombies/Zombie/";
		return [
			"images/Card/Zombies/VampireZombie.png",
			b + "0.gif",
			b + "ConeheadZombie.gif",
			b + "ConeheadZombieAttack.gif",
			a + "ZombieLostHead.gif",
			a + "ZombieLostHeadAttack.gif",
			a + "ZombieHead.gif" + $Random,
			a + "ZombieDie.gif" + $Random,
			"images/Zombies/BoomDie.gif" + $Random,
			a + "Zombie.gif",
			a + "ZombieAttack.gif",
			b + "1.gif",
		];
	})(),
	Produce:
		'<font color="#28325A">A vampire zombie with a fragile cloak but blinding speed.</font><p>Toughness: <font color="#CC241D">low</font><br>Speed: <font color="#CC241D">very fast</font></p>He vant to suck your brains. He usually gets there before your peas do.',
});

var oFrankenZombie = InheritO(oBucketheadZombie, {
	EName: "oFrankenZombie",
	CName: "Frankenstein",
	HP: 800,
	OrnHP: 2000,
	Lvl: 3,
	SunNum: 150,
	OSpeed: 1.2,
	Speed: 1.2,
	Attack: 200,
	PicArr: (function () {
		var b = "images/Zombies/FrankenZombie/";
		var a = "images/Zombies/Zombie/";
		return [
			"images/Card/Zombies/FrankenZombie.png",
			b + "0.gif",
			b + "BucketheadZombie.gif",
			b + "BucketheadZombieAttack.gif",
			a + "ZombieLostHead.gif",
			a + "ZombieLostHeadAttack.gif",
			a + "ZombieHead.gif" + $Random,
			a + "ZombieDie.gif" + $Random,
			"images/Zombies/BoomDie.gif" + $Random,
			a + "Zombie.gif",
			a + "ZombieAttack.gif",
			b + "1.gif",
		];
	})(),
	PlayNormalballAudio() {
		PlaySound2(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
	},
	Produce:
		'<font color="#28325A">Stitched together from spare zombies. Hits like a truck.</font><p>Toughness: <font color="#CC241D">extremely high</font><br>Damage: <font color="#CC241D">heavy</font><br>Weakness: <font color="#CC241D">magnet-shroom</font></p>It took a whole graveyard to build him. He is not in a hurry. He does not need to be.',
});

var oPumpkinImp = InheritO(oImp, {
	EName: "oPumpkinImp",
	CName: "Pumpkin Imp",
	HP: 200,
	Lvl: 4,
	OSpeed: 2.4,
	Speed: 2.4,
	PicArr: (function () {
		var a = "images/Zombies/PumpkinImp/";
		return [
			"images/Card/Zombies/PumpkinImp.png",
			a + "0.gif",
			a + "Zombie.gif",
			a + "ZombieAttack.gif",
			"images/Zombies/Imp/ZombieLostHead.gif",
			"images/Zombies/Imp/ZombieLostHeadAttack.gif",
			"images/Zombies/Imp/ZombieHead.gif" + $Random,
			"images/Zombies/Imp/ZombieDie.gif" + $Random,
			"images/Zombies/BoomDie.gif" + $Random,
			a + "1.gif",
		];
	})(),
	Produce:
		'<font color="#28325A">A pumpkin-headed imp that scampers ahead of the horde.</font><p>Toughness: <font color="#CC241D">low</font><br>Speed: <font color="#CC241D">fast</font></p>He wears a pumpkin for a helmet. It does not help. He is still very easy to squish.',
});

var oHeadlessHorseman = InheritO(oZZ, {
	EName: "oHeadlessHorseman",
	CName: "Headless Horseman",
	Lvl: 8,
	HP: 3000,
	OSpeed: 2.0,
	Speed: 2.0,
	Attack: 200,
	PicArr: (function () {
		var a = "images/Zombies/HeadlessHorseman/";
		var w = "images/Zombies/wall/ZZ/";
		return [
			"images/Card/Zombies/HeadlessHorseman.png",
			a + "0.gif",
			a + "Zombie.gif",
			a + "ZombieAttack.gif",
			w + "ZombieLostHead.gif",
			w + "ZombieLostHeadAttack.gif",
			w + "ZombieHead.gif" + $Random,
			w + "ZombieDie.gif" + $Random,
			"images/Zombies/NewspaperZombie/BoomDie.gif" + $Random,
			a + "1.gif",
		];
	})(),
	getShadow(a) {
		return "display:none";
	},
	BookHandPosition: "35% 15px",
	Produce:
		'<font color="#28325A">The rider of halloween night. Do not let him reach your lawn.</font><p>Toughness: <font color="#CC241D">boss</font><br>Special: <font color="#CC241D">projectiles may pass through</font></p>He lost his head centuries ago and has been in a bad mood ever since. The fog parts where he rides.',
});
