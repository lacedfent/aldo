oS.Init(
	{
		PName: [oSunShroom, oTwinSunflower, oCandyRepeater, oWallNut, oTallNut, oSquash, oJalapeno, oDoomShroom, oGraveBuster, oGhostShroom, oJackOLantern, oCoffeeBean, oPumpkinHead],
		ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oFootballZombie, oDancingZombie, oBalloonZombie, oDiggerZombie, oGargantuar, oZZ, oJackinTheBoxZombie, oVampireZombie, oFrankenZombie, oPumpkinImp, oHeadlessHorseman],
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
		LevelName: "Halloween 1-10",
		LvlEName: 60,
		AudioArr: ["crazydaveshort1", "crazydavelong1", "crazydavelong2", "crazydavelong3"],
		LargeWaveFlag: { 10: $("imgFlag3"), 20: $("imgFlag1") },
		Monitor: { f: AppearTombstones, ar: [7, 9, 8] },
		UserDefinedFlagFunc(a) {
			oP.FlagNum === oP.FlagZombies && oP.SetTimeoutTomZombie([oZZ, oGargantuar]);
		},
		StartGameMusic: "Zombieboss",
	},
	{
		AZ: [
			[oZombie, 3, 1],
			[oConeheadZombie, 4, 3],
			[oBucketheadZombie, 3, 5],
			[oFootballZombie, 3, 7],
			[oDancingZombie, 2, 9],
			[oBalloonZombie, 2, 11],
			[oDiggerZombie, 2, 13],
			[oJackinTheBoxZombie, 3, 14],
			[oVampireZombie, 3, 14],
			[oPumpkinImp, 4, 15],
			[oGargantuar, 2, 16],
			[oHeadlessHorseman, 2, 17],
			[oFrankenZombie, 2, 17],
			[oZZ, 2, 18],
		],
		FlagNum: 20,
		FlagToSumNum: {
			a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 99],
			a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 99],
		},
		FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(0);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:198px;left:269px", EDAll);
		},
	}
);
