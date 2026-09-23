import { oRepeater } from "./oRepeater.js";

export var oCandyRepeater = InheritO(oRepeater, {
	EName: "oCandyRepeater",
	CName: "Candy Repeater",
	width: 92,
	height: 72,
	beAttackedPointR: 72,
	SunNum: 175,
	HP: 300,
	PicArr: [
		"images/Card/Plants/SplitPea.webp",
		"images/Plants/SplitPea/0.gif",
		"images/Plants/SplitPea/SplitPea.gif",
		"images/Plants/PB00.gif",
		"images/Plants/PB01.gif",
		"images/Plants/PeaBulletHit.gif",
	],
	AudioArr: ["splat1", "splat2", "splat3", "plastichit", "shieldhit", "shieldhit2"],
	Tooltip: "Fires two candy peas at a time, faster than repeater",
	Produce:
		'<font color="#28325A">Candy Repeaters fire two candy-coated peas at a time, with a quicker second shot.</font><p>Damage: <font color="#CC241D">normal (for each pea)</font><br>Firing speed: <font color="#CC241D">2x, faster follow-up</font></p>A Halloween treat that shoots back. The zombies love the candy. Unfortunately for them, it comes out at 200 peas per hour.',
	NormalAttack1: oRepeater.prototype.NormalAttack,
	NormalAttack(a) {
		this.NormalAttack1();
		oSym.addTask(
			10,
			(c) => {
				var b = $P[c];
				b && b.NormalAttack1();
			},
			[this.id]
		);
	},
});
