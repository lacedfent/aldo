oS.Init(
	{
		PName: [oSunShroom, oPuffShroom, oPeashooter, oWallNut, oCherryBomb, oGraveBuster, oPotatoMine, oSnowPea],
		ZName: [oZombie, oZombie2, oZombie3, oNewspaperZombie],
		PicArr: (function () {
			var a = oSunShroom.prototype;
			var b = a.PicArr;
			return [
				"images/interface/background2.jpg",
				"images/interface/Dave.gif",
				"images/interface/Dave3.gif",
				"images/interface/Tombstones.png",
				"images/interface/Tombstone_mounds.png",
				b[a.CardGif],
				b[a.NormalGif],
			];
		})(),
		backgroundImage: "images/interface/background2.jpg",
		CanSelectCard: 1,
		DKind: 0,
		SunNum: 50,
		LevelName: "Halloween 1-2",
		LvlEName: 52,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 10: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 3] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oZombie2]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oZombie2, 2, 1],
			[oZombie3, 2, 2],
			[oNewspaperZombie, 2, 3],
		],
		FlagNum: 10,
		FlagToSumNum: { a1: [3, 5, 9], a2: [1, 2, 3, 15] },
		FlagToMonitor: { 9: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(53);
		},
	}
);
