/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tone from 'Tone/core/Tone'
import Detector from 'three/examples/js/Detector'
//import {GA} from 'utils/GA'

//export const audioDirectory = 'audio'
export const audioDirectory = 'https://3dyt.hcilab.ml/audio'
export const unitsPerSecond = 7
export const circleHeight = 0
export const radius = 1.1
export const sceneColor = '#faa'
export const tubeColor = '#ffffff'
export const title = 'Inside Music'
export const trackRadius = 2
export const useVoiceOver = true
export const supported = true; //Detector.webgl && Tone.supporte
export const trackConfig = [
	{
		artist : 'PLAYING',
		track : 'SONG',
		folder : 'america',
		intro : 'song',
		segments : 8,
		duration : 240,
		// duration : 5,
		trackNames : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
		names : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934' //#263330'
		}
	},
	// {
	// 	artist : 'BACK',
	// 	track : 'TO MENU',
	// 	folder : 'america',
	// 	intro : 'song',
	// 	segments : 8,
	// 	duration : 240,
	// 	// duration : 5,
	// 	trackNames : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
	// 	names : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
	// 	soundRings: {
	// 		startColor: '#f7002d',
	// 		endColor: '#00edaa',
	// 		shape: 'triangle',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#253934' //#263330'
	// 	}
	// }
	// {
	// 	artist : 'america',
	// 	track : 'america',
	// 	folder : 'song',
	// 	intro : 'song',
	// 	duration : 240,
	// 	segments: 8,
	// 	trackNames : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	names : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	soundRings: {
	// 		startColor: '#ffca7a',
	// 		endColor: '#cc3600',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#cc3600'
	// 	}
	// },
	// {
	// 	artist : 'angel',
	// 	track : 'angel',
	// 	folder : 'angel',
	// 	intro : 'angel',
	// 	duration : 270,
	// 	segments: 9,
	// 	trackNames : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	names : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	soundRings: {
	// 		startColor: '#ffca7a',
	// 		endColor: '#cc3600',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#cc3600'
	// 	}
	// },
	// {
	// 	artist : 'rasputin',
	// 	track : 'rasputin',
	// 	folder : 'rasputin',
	// 	intro : 'rasputin',
	// 	duration : 270,
	// 	segments: 9,
	// 	trackNames : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	names : ['bass', 'drums', 'piano', 'null', 'vocals', 'other', 'null'],
	// 	soundRings: {
	// 		startColor: '#ffca7a',
	// 		endColor: '#cc3600',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#cc3600'
	// 	}
	// },
	// {
	// 	artist : 'Alarm Will Sound',
	// 	track : 'Roadrunner',
	// 	folder : 'aws',
	// 	intro : 'aws',
	// 	duration : 364,
	// 	segments: 12,
	// 	trackNames : ['STRINGS', 'WINDS', 'BRASS', 'null', 'SYNTH', 'BASS', 'PERC'],
	// 	names : ['strings', 'winds', 'brass', 'null', 'synth', 'bass', 'percussion'],
	// 	soundRings: {
	// 		startColor: '#ffca7a',
	// 		endColor: '#cc3600',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#cc3600'
	// 	}
	// },
	// {
	// 	artist : 'Clipping',
	// 	track : 'The Deep',
	// 	folder : 'clipping',
	// 	intro : 'clipping',
	// 	segments : 11,
	// 	duration : 328,
	// 	trackNames : ['LEAD_VOX', 'WATER', 'FX', 'BASS', 'SYNTH_BELLS', 'SYSTEM_VOICE', 'DRUMS'],
	// 	names : ['lead vocals', 'water', 'fx', 'bass', 'synth bells', 'system voice', 'drums'],
	// 	soundRings: {
	// 		startColor: '#aff702', //#00b3ff
	// 		endColor: '#00e1ff', //#efff00
	// 		shape: 'circle',
	// 		size: 4.5
	// 	},
	// 	floor: {
	// 		color: '#0a6166'
	// 	}
	// },
	// {
	// 	artist : 'Natalia Lafourcade',
	// 	track : 'Tu si sabes quererme',
	// 	folder : 'natalia_lafourcade',
	// 	intro : 'natalia_lafourcade',
	// 	segments : 8,
	// 	duration : 246,
	// 	trackNames : ['GUITARS', 'VOCALS', 'BASS', 'HARMONIUM', 'BACKING_VOCALS', 'PERCUSSION',  'JARANA'],
	// 	names : ['guitars', 'vocals', 'bass', 'harmonium', 'backing vocals', 'percussion', 'jarana'],
	// 	soundRings: {
	// 		startColor: '#f2c600',
	// 		endColor: '#b30071',
	// 		shape: 'circle',
	// 		size: 8
	// 	},
	// 	floor: {
	// 		color: '#391936' //'#402f31'
	// 	}

	// },
	// {
	// 	artist : 'Perfume Genius',
	// 	track : 'Slip Away',
	// 	intro : 'perfume_genius',
	// 	folder : 'perfume_genius',
	// 	segments : 5,
	// 	duration : 170,
	// 	// duration : 10,
	// 	trackNames : ['MBIRA', 'GUITARS', 'OTHER_VOCALS', 'SYNTHS_AND_PIANO', 'BASS_AND_BASS_SYNTHS', 'DRUMS', 'LEAD_VOCALS'],
	// 	names : ['mbira', 'guitars', 'other vocals', 'synths and piano', 'bass', 'drums', 'lead vocals'],
	// 	soundRings: {
	// 		startColor: '#18D2F6',
	// 		endColor: '#FF00CD',
	// 		shape: 'circle',
	// 		size: 5
	// 	},
	// 	floor: {
	// 		color: '#262137' //'#1b1c2b'
	// 	}
	// },
	// {
	// 	artist : 'Ibeyi',
	// 	track : 'Deathless',
	// 	intro : 'ibeyi',
	// 	folder : 'ibeyi',
	// 	segments : 6,
	// 	duration : 194,
	// 	trackNames : ['BASS', 'LEAD_VOCALS', 'BACKING_VOCALS_ONE', 'BACKING_VOCALS_TWO', 'SAXOPHONE', 'DRONE_AND_FX', 'DRUMS'],
	// 	names : ['Bass', 'Lead Vocals', 'Backing Vocals 1', 'Backing Vocals 2', 'Saxophone', 'Drone and FX', 'drums'],
	// 	soundRings: {
	// 		startColor: '#01903C',
	// 		endColor: '#E4AA24',
	// 		shape: 'circle',
	// 		size: 6.5
	// 	},
	// 	floor: {
	// 		color: '#252118'
	// 	}
	// },
]


export function getTrackData(artist){
	// const index = trackConfig.findIndex(t => t.artist === artist)
	// return trackConfig[index]
	// if (artist == 'BACK') {
	// 	//window.history.go(-2);
	// 	//window.location.href = "/";
	// 	if(window.hasOwnProperty('exitVR')) {
	// 		try {
	// 			window.exitVR();	
	// 		} catch(e) {
	// 			console.log(e);
	// 		}
	// 	} else {
	// 		window.location.href = "/";
	// 	}
	// 	//window.location.reload();
	// }
	let hash = location.hash.substr(1)
	let parts = hash.split(',')
	let duration = parseInt(parts[1])
	return {
		artist : 'PLAY',
		track : 'SONG',
		folder : parts[0],
		intro : 'song',
		segments : parseInt(duration/30),
		duration : duration,
		// duration : 5,
		trackNames : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
		names : ['other', 'piano', 'drums', 'null', 'vocals', 'null', 'bass'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934' //#263330'
		}
	}
}
