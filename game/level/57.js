oS.Init(
	{
		PName: [oSunShroom, oPuffShroom, oCandyRepeater, oWallNut, oTallNut, oDoomShroom, oIceShroom, oGraveBuster, oGhostShroom, oJackOLantern],
		ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oBalloonZombie, oDiggerZombie, oScreenDoorZombie],
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
		LevelName: "Halloween 1-7",
		LvlEName: 57,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 15: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 6] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oBalloonZombie, oDiggerZombie]);
		},
		StartGameMusic: "Moongrains",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oConeheadZombie, 4, 3],
			[oScreenDoorZombie, 2, 5],
			[oBucketheadZombie, 3, 7],
			[oBalloonZombie, 2, 9],
			[oDiggerZombie, 2, 11],
		],
		FlagNum: 15,
		FlagToSumNum: { a1: [3, 5, 9, 11, 13, 14], a2: [1, 2, 3, 8, 10, 15] },
		FlagToMonitor: { 14: [ShowFinalWave, 0] },
		FlagToEnd() {
			SelectModal(58);
		},
	}
);
