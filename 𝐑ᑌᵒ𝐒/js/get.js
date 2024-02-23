/*
App Information Installer By @s1z4r
5/20/2020
https://sizu.gq
Bundle ID 	= CFBundleIdentifier
App Version = CFBundleShortVersionString
*/

var $$ = Dom7;

$$('.install-app').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'App Name Here' + '<br>Bundle Identifier: ' + 'Bundle Here' + '<br>Version: ' + 'Version Here' + '<br>Size: ' + 'Size Here', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=Link";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

$$('.install-videostar').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'VideoStar Hack' + '<br>Bundle Identifier: ' + 'com.frontierdesign.videostar' + '<br>Version: ' + '8.3.2' + '<br>Size: ' + '145.2 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/videostar.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-videostarpro').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'VideoStar Pro' + '<br>Bundle Identifier: ' + 'com.frontierdesign.videostar' + '<br>Version: ' + '11.3.2' + '<br>Size: ' + '140.28 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/videostarpro.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-8ballpool').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + '8ball Pool' + '<br>Bundle Identifier: ' + 'com.miniclip.8ballpool.fire' + '<br>Version: ' + '5.7.1' + '<br>Size: ' + '65.88 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/8ball.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-pubg').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Pubg Mobile' + '<br>Bundle Identifier: ' + 'com.ig.pubg' + '<br>Version: ' + '2.3.0' + '<br>Size: ' + '1.97 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/pubg.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-spotify').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Spotify' + '<br>Bundle Identifier: ' + 'com.spotify.clinet' + '<br>Version: ' + '8.7.78' + '<br>Size: ' + '61.93 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/spotify.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-esign').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Esign' + '<br>Bundle Identifier: ' + 'p3.xyz.yyyue.esign' + '<br>Version: ' + '4.6.7' + '<br>Size: ' + '10.42 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/esign.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});









$$('.install-luma').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Luma Fusion' + '<br>Bundle Identifier: ' + 'com.luma-touch.lumafusion' + '<br>Version: ' + '3.2.0' + '<br>Size: ' + '131.41 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/luma.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-ppsspp').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'PPSSPP' + '<br>Bundle Identifier: ' + 'org.ppsspp.ppsspp' + '<br>Version: ' + '?' + '<br>Size: ' + '26.30 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/ppsspp.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-pythonista').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Pythonista' + '<br>Bundle Identifier: ' + 'com.omz-software.Pythoinsa3' + '<br>Version: ' + '3.3' + '<br>Size: ' + '244.93 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/python.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-odyssey').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Odyssey' + '<br>Bundle Identifier: ' + 'org.coolstar.odyssey' + '<br>Version: ' + '1.4.2' + '<br>Size: ' + '27.20 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/odssey.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-unc0ver').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Unc0ver' + '<br>Bundle Identifier: ' + 'science.xnu.undecimus' + '<br>Version: ' + '8.0.2' + '<br>Size: ' + '54.49 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/unc0ver.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-instagramplus').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Instagram Plus' + '<br>Bundle Identifier: ' + 'com.burbn.instagram' + '<br>Version: ' + '259.0' + '<br>Size: ' + '101.77 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/instaplus.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-snapchat').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Snapchat Plus' + '<br>Bundle Identifier: ' + 'com.toyopagroup.picabo' + '<br>Version: ' + '12.06.0' + '<br>Size: ' + '207.37 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/snap.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-instarocket').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Instagram Rocket' + '<br>Bundle Identifier: ' + 'com.burbn.instagram' + '<br>Version: ' + '247.1' + '<br>Size: ' + '104.14 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/instarocket.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-facebookplus').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Facebook Plus' + '<br>Bundle Identifier: ' + 'com.facebook.facebook' + '<br>Version: ' + '389.0' + '<br>Size: ' + '129.16 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/facebookplus.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});




$$('.install-whatsapp').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'WhatsApp' + '<br>Bundle Identifier: ' + 'net.whatsapp.Whatsapp' + '<br>Version: ' + '25.15.75' + '<br>Size: ' + '48.44 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/whatsapp.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-youtube').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'YoutubeDL' + '<br>Bundle Identifier: ' + 'com.google.ios.youtube' + '<br>Version: ' + '17.41.2' + '<br>Size: ' + '100.45 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/youtube.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-tiktokdl').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Tiktok DL' + '<br>Bundle Identifier: ' + 'com.zhiliaapp.musicaly' + '<br>Version: ' + '26.8.0' + '<br>Size: ' + '191.89 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/tiktok.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-minecraft').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Minecraft' + '<br>Bundle Identifier: ' + 'com.mojang.minecraftpe' + '<br>Version: ' + '1.19.41' + '<br>Size: ' + '587.49 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/minecraft.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-gtasa').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Gta San Andreas' + '<br>Bundle Identifier: ' + 'com.rockstargames.gta3sa' + '<br>Version: ' + '2.02.11' + '<br>Size: ' + '1.80 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/gtasan.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-agario').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Agar IO' + '<br>Bundle Identifier: ' + 'com.miniclip.agar.io' + '<br>Version: ' + '2.2.1.1' + '<br>Size: ' + '36.23 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/agario.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-carx').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Car X Drift' + '<br>Bundle Identifier: ' + 'com.carx.-tech.car' + '<br>Version: ' + '1.23.0' + '<br>Size: ' + '2.15 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/car2.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-clashroyal').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Clash Of Royal' + '<br>Bundle Identifier: ' + 'royal.Z7mh_7ki.hacks' + '<br>Version: ' + '3.302.4.2' + '<br>Size: ' + '180.58 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/clashroyal.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-clashofclans').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Clash Of Clans' + '<br>Bundle Identifier: ' + 'nt.nc.ios' + '<br>Version: ' + '15.0.2' + '<br>Size: ' + '288.51 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/clashofclans.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-kinemaster').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Kine Master' + '<br>Bundle Identifier: ' + 'com.kinemaster.kios' + '<br>Version: ' + '6.2.0' + '<br>Size: ' + '76.11 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/kinemaster.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-appcake').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'App Cake' + '<br>Bundle Identifier: ' + 'com.iphonecake.appcake' + '<br>Version: ' + '7.2.2' + '<br>Size: ' + '15.44 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/appckae.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});


$$('.install-bully').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Bully: Anniversary Edition' + '<br>Bundle Identifier: ' + 'com.rockstar.bully' + '<br>Version: ' + '1.03.6' + '<br>Size: ' + '1.81 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/bully.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});




$$('.install-ammar').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Pubg Four Engine Yahya VIP' + '<br>Bundle Identifier: ' + 'com.ig.FOUR' + '<br>Version: ' + '2.3.0' + '<br>Size: ' + '1.83 GB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/pubgyahya.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});



$$('.install-kurdm').on('click', function (appName, bundle, version, size) {
	app.dialog.confirm('App Name: ' + 'Pics Art PRO' + '<br>Bundle Identifier: ' + 'com.picsart.studio' + '<br>Version: ' + '21.0.8' + '<br>Size: ' + '97.21 MB', 'Information', function () {
		app.dialog.preloader('Installing...', 'white');
		window.location = "itms-services://?action=download-manifest&url=https://kurd-app-24.glitch.me/plist/picsart.plist";
		setTimeout(function () {
			app.dialog.close();
		}, 1500);
	});
});

