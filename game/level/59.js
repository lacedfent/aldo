oS.Init(
	{
		PName: [oSunShroom, oTwinSunflower, oCandyRepeater, oWallNut, oTallNut, oSquash, oJalapeno, oDoomShroom, oGraveBuster, oGhostShroom, oJackOLantern, oCoffeeBean],
		ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oFootballZombie, oDancingZombie, oBalloonZombie, oDiggerZombie, oGargantuar, oVampireZombie, oFrankenZombie, oPumpkinImp],
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
		LevelName: "Halloween 1-9",
		LvlEName: 59,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 10: $("imgFlag3"), 20: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 7] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oDancingZombie, oGargantuar]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oZombie2, 2, 2],
			[oConeheadZombie, 4, 4],
			[oBucketheadZombie, 3, 6],
			[oFootballZombie, 3, 9],
			[oDancingZombie, 2, 12],
			[oBalloonZombie, 2, 14],
			[oDiggerZombie, 2, 15],
			[oVampireZombie, 3, 14],
			[oFrankenZombie, 2, 16],
			[oPumpkinImp, 4, 15],
			[oGargantuar, 1, 17],
		],
		FlagNum: 20,
		FlagToSumNum: {
			a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 99],
			a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 99],
		},
		FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(60);
		},
	}
);
