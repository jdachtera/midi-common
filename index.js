exports.commands = {
  // # Channel Messages

  // ## Note Off
  0x80: { "dataLength":  1, "name": "noteOff" },

  // ## Note On
  0x90: { "dataLength": 2, "name": "noteOn" },

  // ## PolyphonicAftertouch
  0xa0: {"dataLength": 2, "name": "polyphonicAftertouch" },

  // ## Control Change
  0xb0: {"dataLength": 2, "name": "controlChange" },

  // ## Program/ Mode Change
  0xc0: {"dataLength": 1, "name": "programChange" },

  // ## Channel Aftertouch
  0xd0: {"dataLength": 1, "name": "channelAftertouch" },

  // ## PitchWheel
  0xe0: {"dataLength": 2, "name": "pitchWheel" },

  // # System Common Messages
  /*
   0xf0: SysEx Start, length is determined by SysEx end byte
   */
  0xf1: {"dataLength": 1, "name": "quarterTime"},           // Quarter time
  0xf2: {"dataLength": 2, "name": "songPosition"},          // Song Position Pointer
  0xf3: {"dataLength": 1, "name": "songSelect"},            // Song select

  /*
   0xf4: Undefined
   0xf5: Undefined
   */
  0xf6: {"dataLength": 0, "name": "tuneRequest"},           // Tune request (no data)
  /*
   0xf7: End of SysEx
   */

  // # System Realtime Messages
  0xf8: {"dataLength": 0, "name": "clock"},                 // Timing clock
  0xfa: {"dataLength": 0, "name": "start"},                 // Start
  0xfb: {"dataLength": 0, "name": "continue"},              // Continue
  0xfc: {"dataLength": 0, "name": "stop"},                  // Stop
  /*
   0xfd: Undefined
   */
  0xfe: {"dataLength": 0, "name": "activeSensing"},         // Active Sensing
  0xff: {"dataLength": 0, "name": "systemReset"}            // System Reset
};

exports.systemExclusive = {
  short: {
    0x01: 'Sequential Circuits',
    0x02: 'Big Briar',
    0x03: 'Octave / Plateau',
    0x04: 'Moog',
    0x05: 'Passport Designs',
    0x06: 'Lexicon',
    0x07: 'Kurzweil',
    0x08: 'Fender',
    0x09: 'Gulbransen',
    0x0a: 'Delta Labs',
    0x0b: 'Sound Comp.',
    0x0c: 'General Electro',
    0x0d: 'Techmar',
    0x0e: 'Matthews Research',
    0x10: 'Oberheim',
    0x11: 'PAIA',
    0x12: 'Simmons',
    0x13: 'DigiDesign',
    0x14: 'Fairlight',
    0x15: 'JL Cooper',
    0x16: 'Lowery',
    0x17: 'Lin',
    0x18: 'Emu',
    0x1b: 'Peavey',
    0x20: 'Bon Tempi',
    0x21: 'S.I.E.L.',
    0x23: 'SyntheAxe',
    0x24: 'Hohner',
    0x25: 'Crumar',
    0x26: 'Solton',
    0x27: 'Jellinghaus Ms',
    0x28: 'CTS',
    0x29: 'PPG',
    0x2f: 'Elka',
    0x36: 'Cheetah',
    0x3e: 'Waldorf',
    0x40: 'Kawai Musical Instruments MFG.',
    0x41: 'Roland',
    0x42: 'Korg',
    0x43: 'Yamaha',
    0x44: 'Casio Computer',
    0x45: 'Akai',
    0x46: 'Kamiya Studio',
    0x47: 'Akai Electric',
    0x48: 'Victor Company of Japan',
    0x4b: 'Fujitsu',
    0x4c: 'Sony',
    0x4e: 'Teac',
    0x50: 'Matsushita Electric Industrial',
    0x51: 'Fostex',
    0x52: 'Zoom',
    0x54: 'Matsushita Communication Industrial',
    0x55: 'Suzuki Musical Instruments MFG.',
    0x56: 'Fuji Sound',
    0x57: 'Acoustic Technical Laboratory,',
    0x59: 'Faith,',
    0x5a: 'Internet',
    0x5c: 'Seekers',
    0x5f: 'SD Card Association'
  },
  extended: {
    0x000074: 'Ta Horng Musical Instrument',
    0x000075: 'e-Tek Labs (Forte Tech)',
    0x000076: 'Electro-Voice',
    0x000077: 'Midisoft',
    0x000078: 'QSound Labs',
    0x000079: 'Westrex',
    0x00007a: 'Nvidia',
    0x00007b: 'ESS Technology',
    0x00007c: 'Media Trix Peripherals',
    0x00007d: 'Brooktree',
    0x00007e: 'Otari',
    0x00007f: 'Key Electronics,',
    0x000100: 'Shure Incorporated',
    0x000101: 'AuraSound',
    0x000102: 'Crystal Semiconductor',
    0x000103: 'Conexant (Rockwell)',
    0x000104: 'Silicon Graphics',
    0x000105: 'M-Audio (Midiman)',
    0x000106: 'PreSonus',
    0x000108: 'Topaz Enterprises',
    0x000109: 'Cast Lighting',
    0x00010a: 'Microsoft',
    0x00010b: 'Sonic Foundry',
    0x00010c: 'Line 6 (Fast Forward)',
    0x00010d: 'Beatnik',
    0x00010e: 'Van Koevering Company',
    0x00010f: 'Altech Systems',
    0x000110: 'S & S Research',
    0x000111: 'VLSI Technology',
    0x000112: 'Chromatic Research',
    0x000113: 'Sapphire',
    0x000114: 'IDRC',
    0x000115: 'Justonic Tuning',
    0x000116: 'TorComp Research',
    0x000117: 'Newtek',
    0x000118: 'Sound Sculpture',
    0x000119: 'Walker Technical',
    0x00011a: 'Digital Harmony (PAVO)',
    0x00011b: 'InVision Interactive',
    0x00011c: 'T-Square Design',
    0x00011d: 'Nemesys Music Technology',
    0x00011e: 'DBX Professional (Harman Intl)',
    0x00011f: 'Syndyne',
    0x000120: 'Bitheadz',
    0x000121: 'Cakewalk Music Software',
    0x000122: 'Analog Devices',
    0x000123: 'National Semiconductor',
    0x000124: 'Boom Theory / Adinolfi Alternative Percussion',
    0x000125: 'Virtual DSP',
    0x000126: 'Antares Systems',
    0x000127: 'Angel Software',
    0x000128: 'St Louis Music',
    0x000129: 'Passport Music Software LLC (Gvox)',
    0x00012a: 'Ashley Audio',
    0x00012b: 'Vari-Lite',
    0x00012c: 'Summit Audio',
    0x00012d: 'Aureal Semiconductor',
    0x00012e: 'SeaSound',
    0x00012f: 'U.S. Robotics',
    0x000130: 'Aurisis Research',
    0x000131: 'Nearfield Research',
    0x000132: 'FM7',
    0x000133: 'Swivel Systems',
    0x000134: 'Hyperactive Audio Systems',
    0x000135: 'MidiLite (Castle Studios Productions)',
    0x000136: 'Radikal Technologies',
    0x000137: 'Roger Linn Design',
    0x000138: 'TC-Helicon Vocal Technologies',
    0x000139: 'Event Electronics',
    0x00013a: 'Sonic Network',
    0x00013b: 'Realtime Music Solutions',
    0x00013c: 'Apogee Digital',
    0x00013d: 'Classical Organs,',
    0x00013e: 'Microtools',
    0x00013f: 'Numark Industries',
    0x000140: 'Frontier Design Group',
    0x000141: 'Recordare',
    0x000142: 'Starr Labs',
    0x000143: 'Voyager Sound',
    0x000144: 'Manifold Labs',
    0x000145: 'Aviom',
    0x000146: 'Mixmeister Technology',
    0x000147: 'Notation Software',
    0x000148: 'Mercurial Communications',
    0x000149: 'Wave Arts',
    0x00014a: 'Logic Sequencing Devices',
    0x00014b: 'Axess Electronics',
    0x00014c: 'Muse Research',
    0x00014d: 'Open Labs',
    0x00014e: 'Guillemot R&D',
    0x00014f: 'Samson Technologies',
    0x000150: 'Electronic Theatre Controls',
    0x000151: 'Blackberry (RIM)',
    0x000152: 'Mobileer',
    0x000153: 'Synthogy',
    0x000154: 'Lynx Studio Technology',
    0x000155: 'Damage Control Engineering',
    0x000156: 'Yost Engineering,',
    0x000157: 'Brooks & Forsman Designs / DrumLite',
    0x000158: 'Infinite Response',
    0x000159: 'Garritan',
    0x00015a: 'Plogue Art et Technologie,',
    0x00015b: 'RJM Music Technology',
    0x00015c: 'Custom Solutions Software',
    0x00015d: 'Sonarcana',
    0x00015e: 'Centrance',
    0x00015f: 'Kesumo',
    0x000160: 'Stanton (Gibson)',
    0x000161: 'Livid Instruments',
    0x000162: 'First Act / 745 Media',
    0x000163: 'Pygraphics,',
    0x000164: 'Panadigm Innovations',
    0x000165: 'Avedis Zildjian',
    0x000166: 'Auvital Music',
    0x000167: 'Inspired Instruments',
    0x000168: 'Chris Grigg Designs',
    0x000169: 'Slate Digital',
    0x00016a: 'Mixware',
    0x00016b: 'Social Entropy',
    0x00016c: 'Source Audio',
    0x00016d: 'Ernie Ball / Music Man',
    0x00016e: 'Fishman Transducers',
    0x00016f: 'Custom Audio Electronics',
    0x000170: 'American Audio/DJ',
    0x000171: 'Mega Control Systems',
    0x000172: 'Kilpatrick Audio',
    0x000173: 'iConnectivity',
    0x000174: 'Fractal Audio',
    0x000175: 'NetLogic Microsystems',
    0x000176: 'Music Computing',
    0x000177: 'Nektar Technology',
    0x000178: 'Zenph Sound Innovations',
    0x000179: 'DJTechTools.com',
    0x00017a: 'Rezonance Labs',
    0x00017b: 'Decibel Eleven',
    0x00017c: 'CNMAT',
    0x00017d: 'Media Overkill',
    0x00017e: 'Confusionists',
    0x00017f: 'moForte',
    0x000200: 'Miselu',
    0x000201: 'Amelia\'s Compass',
    0x000202: 'Zivix',
    0x000203: 'Artiphon',
    0x002029: 'Focusrite/Novation',
    0x00202a: 'Samkyung Mechatronics',
    0x00202b: 'Medeli Electronics',
    0x00202c: 'Charlie Lab SRL',
    0x00202d: 'Blue Chip Music Technology',
    0x00202e: 'BEE OH',
    0x00202f: 'LG Semicon America',
    0x002030: 'TESI',
    0x002031: 'EMAGIC',
    0x002032: 'Behringer',
    0x002033: 'Access Music Electronics',
    0x002034: 'Synoptic',
    0x002035: 'Hanmesoft',
    0x002036: 'Terratec Electronic',
    0x002037: 'Proel SpA',
    0x002038: 'IBK MIDI',
    0x002039: 'IRCAM',
    0x00203a: 'Propellerhead Software',
    0x00203b: 'Red Sound Systems',
    0x00203c: 'Elektron ESI AB',
    0x00203d: 'Sintefex Audio',
    0x00203e: 'MAM (Music and More)',
    0x00203f: 'Amsaro',
    0x002040: 'CDS Advanced Technology BV',
    0x002041: 'Mode Machines',
    0x002042: 'DSP Arts',
    0x002043: 'Phil Rees Music Tech',
    0x002044: 'Stamer Musikanlagen',
    0x002045: 'Musical Muntaner S.A. dba Soundart',
    0x002046: 'C-Mexx Software',
    0x002047: 'Klavis Technologies',
    0x002048: 'Noteheads AB',
    0x002049: 'Algorithmix',
    0x00204a: 'Skrydstrup R&D',
    0x00204b: 'Professional Audio Company',
    0x00204c: 'NewWave Labs (MadWaves)',
    0x00204d: 'Vermona',
    0x00204e: 'Nokia',
    0x00204f: 'Wave Idea',
    0x002050: 'Hartmann',
    0x002051: 'Lion\'s Tracs',
    0x002052: 'Analogue Systems',
    0x002053: 'Focal-JMlab',
    0x002054: 'Ringway Electronics (Chang-Zhou)',
    0x002055: 'Faith Technologies (Digiplug)',
    0x002056: 'Showworks',
    0x002057: 'Manikin Electronic',
    0x002058: '1 Come Tech',
    0x002059: 'Phonic',
    0x00205a: 'Dolby Australia (Lake)',
    0x00205b: 'Silansys Technologies',
    0x00205c: 'Winbond Electronics',
    0x00205d: 'Cinetix Medien und Interface',
    0x00205e: 'A&G Soluzioni Digitali',
    0x00205f: 'Sequentix Music Systems',
    0x002060: 'Oram Pro Audio',
    0x002061: 'Be4',
    0x002062: 'Infection Music',
    0x002063: 'Central Music Co. (CME)',
    0x002064: 'genoQs Machines',
    0x002065: 'Medialon',
    0x002066: 'Waves Audio',
    0x002067: 'Jerash Labs',
    0x002068: 'Da Fact',
    0x002069: 'Elby Designs',
    0x00206a: 'Spectral Audio',
    0x00206b: 'Arturia',
    0x00206c: 'Vixid',
    0x00206d: 'C-Thru Music',
    0x00206e: 'Ya Horng Electronic',
    0x00206f: 'SM Pro Audio',
    0x002070: 'OTO MACHINES',
    0x002071: 'ELZAB S.A., G LAB',
    0x002072: 'Blackstar Amplification',
    0x002073: 'M3i Technologies',
    0x002074: 'Gemalto (from Xiring)',
    0x002075: 'Prostage SL',
    0x002076: 'Teenage Engineering',
    0x002077: 'Tobias Erichsen Consulting',
    0x002078: 'Nixer',
    0x002079: 'Hanpin Electron',
    0x00207a: '"MIDI-hardware" R.Sowa',
    0x00207b: 'Beyond Music Industrial',
    0x00207c: 'Kiss Box B.V.',
    0x00207d: 'Misa Digital Technologies',
    0x00207e: 'AI Musics Technology',
    0x00207f: 'Serato Inc LP',
    0x002100: 'V3Sound (was: Limex)',
    0x002101: 'Kyodday/Tokai',
    0x002102: 'Mutable Instruments',
    0x002103: 'PreSonus Software',
    0x002104: 'Xiring',
    0x002105: 'Fairlight Instruments Pty',
    0x002106: 'Musicom Lab',
    0x002107: 'VacoLoco',
    0x002108: 'RWA (Hong Kong)',
    0x002109: 'Native Instruments',
    0x00210a: 'Naonext',
    0x00210b: 'MFB',
    0x00210c: 'Teknel Research',
    0x00210d: 'Ploytec',
    0x00210e: 'Surfin Kangaroo Studio',
    0x00210f: 'Philips Electronics HK',
    0x002110: 'ROLI',
    0x002111: 'Panda-Audio',
    0x002112: 'BauM Software',
    0x002113: 'Machinewerks',
    0x002114: 'Xiamen Elane Electronics',
    0x004000: 'Crimson Technology',
    0x004001: 'Softbank Mobile',
    0x004003: 'D&M Holdings'
  }
};

exports.systemExclusive[0x7d] = 'Educational';
exports.systemExclusive[0x7e] = {

  name: 'nonRealtime',
  description: 'Universal Non Realtime System Exclusive',

  0x01: {name: 'sdh', description: 'Sample Dump Header'},
  0x02: {name: 'sdp', description: 'Sample Data Packet'},
  0x03: {name: 'sdh', description: 'Sample Dump Request'},

  // MTC Cueing
  0x04: {
    name: 'mtc',
    description: 'MIDI Time Code',

    0x00: {name: 'special', description: 'Special'},
    0x01: {name: 'Punch In Points'},
    0x02: {name: 'Punch Out Points'},
    0x03: {name: 'Delete Punch In Point'},
    0x04: {name: 'Delete Punch Out Point'},
    0x05: {name: 'Event Start Point'},
    0x06: {name: 'Event Stop Point'},
    0x07: {name: 'Event Start Points with additional info'},
    0x08: {name: 'Event Stop Points with additional info'},
    0x09: {name: 'Delete Event Start Point'},
    0x0A: {name: 'Delete Event Stop Point'},
    0x0B: {name: 'Cue Points'},
    0x0C: {name: 'Cue Points with additional info'},
    0x0D: {name: 'Delete Cue Point'},
    0x0E: {name: 'Event name in additional info'}
  },

  //
  0x05: {
    name: 'sde',
    description: 'Sample Dump Extensions',

    0x01: {name: 'Multiple Loop Points'},
    0x02: {name: 'Request Loop Points'},
    0x03: {name: 'Sample Name Transmission'},
    0x04: {name: 'Sample Name Request'},
    0x05: {name: 'Extended Dump Header{name: '},
    0x06: {name: 'Extended Loop Point Transmission'},
    0x07: {name: 'Extended Loop Point Request'}
  },

  0x06: {
    name: 'di',
    description: 'Device Identity',

    0x01: {name: 'Device Identity Request'},
    0x02: {name: 'Device Identity Reply'}
  },

  0x07: {
    name: 'fd',
    description: 'File Dump',

    0x01: {name: 'header', description: 'File Dump Header'},
    0x02: {name: 'packet', description: 'Data Packet'},
    0x03: {name: 'request', description: 'File Dump Request'}
  },

  //
  0x08: {
    name: 'mts',
    description: 'Midi Tuning Standard',

    0x00: {name: 'mtsRequest', description: 'Bulk Tuning Dump Request'},
    0x01: {name: 'mtsReply', description: 'Bulk Tuning Dump Reply'}
  },

  0x09: {
    name: 'gm',
    description: 'General Midi',

    0x01: {name: 'enable'},
    0x02: {name: 'disable'}
  },

  0x0a: {
    name: 'dsl',
    description: 'Downloadable Sounds',

    0x01: {name: 'enable'},
    0x02: {name: 'disable'}
  },


  0x7b: {name: 'eof', description: 'End of file'},
  0x7c: {name: 'wait', description: 'Wait'},
  0x7d: {name: 'cancel', description: 'Cancel'},
  0x7e: {name: 'nack', description: 'Package not aknowledged'},
  0x7f: {name: 'ack', description: 'Package aknowledged'}

};

exports.systemExclusive[0x7f] = {
  name: 'Universal Realtime System Exclusive'
};





