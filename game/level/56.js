oS.Init(
	{
		PName: [oSunShroom, oPuffShroom, oCandyRepeater, oRepeater, oWallNut, oCherryBomb, oGraveBuster, oGhostShroom, oJackOLantern, oHypnoShroom],
		ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oFootballZombie, oDancingZombie, oPoleVaultingZombie],
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
		LevelName: "Halloween 1-6",
		LvlEName: 56,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 15: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 5] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oBucketheadZombie, oFootballZombie]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oZombie2, 2, 2],
			[oConeheadZombie, 4, 4],
			[oPoleVaultingZombie, 2, 6],
			[oBucketheadZombie, 3, 8],
			[oFootballZombie, 2, 10],
			[oDancingZombie, 1, 12],
		],
		FlagNum: 15,
		FlagToSumNum: { a1: [3, 5, 9, 11, 13, 14], a2: [1, 2, 3, 8, 10, 15] },
		FlagToMonitor: { 14: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(57);
		},
	}
);
