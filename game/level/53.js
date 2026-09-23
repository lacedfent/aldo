oS.Init(
	{
		PName: [oSunShroom, oPuffShroom, oPeashooter, oWallNut, oCherryBomb, oGraveBuster, oGhostShroom, oFumeShroom],
		ZName: [oZombie, oZombie2, oZombie3, oNewspaperZombie, oConeheadZombie],
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
		LevelName: "Halloween 1-3",
		LvlEName: 53,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 12: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 4] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oZombie, oZombie2, oConeheadZombie]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oZombie2, 2, 1],
			[oZombie3, 2, 2],
			[oNewspaperZombie, 2, 3],
			[oConeheadZombie, 3, 5],
		],
		FlagNum: 12,
		FlagToSumNum: { a1: [3, 5, 9, 11], a2: [1, 2, 3, 10, 15] },
		FlagToMonitor: { 11: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(54);
		},
	}
);
