oS.Init(
	{
		PName: [oSunShroom, oTwinSunflower, oCandyRepeater, oWallNut, oSquash, oJalapeno, oSpikeweed, oGraveBuster, oGhostShroom, oJackOLantern],
		ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie, oGargantuar, oImp, oJackinTheBoxZombie],
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
		HaveFog: 6,
		SunNum: 50,
		LevelName: "Halloween 1-8",
		LvlEName: 58,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 15: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 6] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oFootballZombie, oGargantuar]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oConeheadZombie, 4, 3],
			[oBucketheadZombie, 3, 5],
			[oFootballZombie, 3, 8],
			[oJackinTheBoxZombie, 2, 10],
			[oGargantuar, 1, 12],
		],
		FlagNum: 15,
		FlagToSumNum: { a1: [3, 5, 9, 11, 13, 14], a2: [1, 2, 3, 8, 10, 15] },
		FlagToMonitor: { 14: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(59);
		},
	}
);
