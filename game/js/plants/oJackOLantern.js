import { oFlowerVase } from "./oFlowerVase.js";

export var oJackOLantern = InheritO(CPlants, {
	EName: "oJackOLantern",
	CName: "Jack-o'-Lantern",
	width: 250,
	height: 242,
	beAttackedPointL: 105,
	beAttackedPointR: 145,
	canEat: 1,
	BookHandBack: "Night",
	SunNum: 50,
	HP: 600,
	BookHandPosition: "50% 20%",
	PicArr: ["images/Card/Plants/Plantern.webp", "images/Plants/Plantern/0.gif", "images/Plants/Plantern/Plantern.gif"],
	Tooltip: "Big spooky light, burns through thick fog",
	Produce:
		"<font color=\"#28325A\">Jack-o'-Lanterns burn through thick Halloween fog over a wide area.</font><p>Range: <font color=\"#CC241D\">wide, more than one lane</font><br>Special: <font color=\"#CC241D\">sees through heavy fog</font><br>Toughness: <font color=\"#CC241D\">medium</font></p>Carved on Halloween night. Lights the way when the fog rolls in. Afraid of nothing, except being turned into pie.",
	PrivateBirth(c) {
		var a = c.R;
		var b = c.C;
		oGd.$Plantern[a + "_" + b] = c.id;
		NewImg("", "images/Plants/Plantern/light.gif", "filter:alpha(opacity=30);opacity:.3;left:0;top:0;z-index:" + c.zIndex, $(c.id));
		(oS.HaveFog && oGd.GatherFog(a, b, 3, 4, 0), oFlowerVase.prototype.FreshXRay());
	},
	InitTrigger() {},
	PrivateDie(c) {
		var a = c.R;
		var b = c.C;
		delete oGd.$Plantern[a + "_" + b];
		(oS.HaveFog && oGd.GatherFog(a, b, 3, 4, 1), oFlowerVase.prototype.FreshXRay());
	},
	GetDY(b, c, a) {
		return a[0] ? 70 : 74;
	},
	getShadow(a) {
		return "left:" + (a.width * 0.5 - 43) + "px;top:" + (a.height - 100) + "px";
	},
});
