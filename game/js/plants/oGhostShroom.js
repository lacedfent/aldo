export var oGhostShroom = InheritO(CPlants, {
	EName: "oGhostShroom",
	CName: "Ghost Shroom",
	width: 112,
	height: 81,
	beAttackedPointR: 92,
	SunNum: 100,
	HP: 300,
	BookHandBack: "Night",
	SleepGif: 3,
	night: true,
	BookHandPosition: "47% 60%",
	PicArr: [
		"images/Card/Plants/GloomShroom.webp",
		"images/Plants/GloomShroom/0.gif",
		"images/Plants/GloomShroom/GloomShroom.gif",
		"images/Plants/GloomShroom/GloomShroomSleep.gif",
		"images/Plants/GloomShroom/GloomShroomAttack.gif",
		"images/Plants/GloomShroom/GloomShroomBullet.gif",
	],
	AudioArr: ["fume"],
	Tooltip: "Haunts zombies with a stronger spooky fume cloud",
	Produce:
		'<font color="#28325A">Ghost Shrooms haunt zombies with a thicker spooky fume that passes through screen doors.</font><p>Damage: <font color="#CC241D">high, penetrates screen doors</font><br>Range: <font color="#CC241D">all zombies in the fume cloud</font><br><font color="#8832aa">Sleeps during the day</font></p>"Boo," says Ghost Shroom. "That is my whole deal. Boo."',
	GetDY(b, c, a) {
		return a[0] ? -18 : -10;
	},
	GetDX() {
		return -58;
	},
	BirthStyle(c, d, b, a) {
		oS.DKind && ((c.canTrigger = 0), (c.Sleep = 1), (b.childNodes[1].src = c.PicArr[c.SleepGif]));
		EditEle(
			b,
			{
				id: d,
			},
			a,
			EDPZ
		);
	},
	PrivateBirth(b) {
		var a = b.id;
		NewEle(
			a + "_Bullet",
			"div",
			"position:absolute;visibility:hidden;width:210px;height:200px;left:" +
				(b.pixelLeft - 60) +
				"px;top:" +
				(b.pixelTop - 65) +
				"px;background:url(images/Plants/GloomShroom/GloomShroomBullet.gif);z-index:" +
				(b.zIndex + 1),
			0,
			EDPZ
		);
	},
	PrivateDie(a) {
		ClearChild($(a.id + "_Bullet"));
	},
	getTriggerRange(a, b, c) {
		return [[b, Math.min(c + 330, oS.W), 0]];
	},
	NormalAttack() {
		PlaySound2("fume");
		var f = this;
		var d = oZ.getArZ(f.AttackedLX, Math.min(f.AttackedRX + 330, oS.W), f.R);
		var e = d.length;
		var g;
		var c = f.id;
		var b = $(c);
		var a = c + "_Bullet";
		while (e--) {
			(g = d[e]).Altitude < 2 && g.getHit1(g, 30);
		}
		b.childNodes[1].src = "images/Plants/GloomShroom/GloomShroomAttack.gif";
		SetVisible($(a));
		ImgSpriter(
			a,
			c,
			[
				["0 0", 9, 1],
				["0 -200px", 9, 2],
				["0 -400px", 9, 3],
				["0 -600px", 9, 4],
				["0 -800px", 9, 5],
				["0 -1000px", 9, 6],
				["0 -1200px", 9, 7],
				["0 -1400px", 9, 8],
				["0 -1600px", 9, 9],
				["0 -1800px", 9, 10],
				["0 -2000px", 9, 11],
				["0 -2200px", 9, -1],
			],
			0,
			(i, j) => {
				var h = $(j);
				$P[j] && ((h.childNodes[1].src = "images/Plants/GloomShroom/GloomShroom.gif"), SetHidden($(i)));
			}
		);
	},
});
