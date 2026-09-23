oS.Init(
	{
		PName: [oSunShroom, oPuffShroom, oPeashooter, oCandyRepeater, oWallNut, oCherryBomb, oGraveBuster, oGhostShroom, oJackOLantern],
		ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oJackinTheBoxZombie, oNewspaperZombie],
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
		HaveFog: 5,
		SunNum: 50,
		LevelName: "Halloween 1-5",
		LvlEName: 55,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 15: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 5] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oConeheadZombie, oBucketheadZombie]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oZombie2, 2, 2],
			[oZombie3, 2, 3],
			[oNewspaperZombie, 2, 5],
			[oConeheadZombie, 4, 6],
			[oBucketheadZombie, 3, 9],
			[oJackinTheBoxZombie, 2, 10],
		],
		FlagNum: 15,
		FlagToSumNum: { a1: [3, 5, 9, 11, 13, 14], a2: [1, 2, 3, 8, 10, 15] },
		FlagToMonitor: { 14: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(56);
		},
	}
);
