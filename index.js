exports.commands = {
  // # Channel Messages

  // ## Note Off
  0x80: { "dataLength":  2, "name": "noteOff" },

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
  0xe0: {"dataLength": 2, "name": "pitchBend" },

  // # System Common Messages

  0xf0: {"name": "systemExclusive"},                        //SysEx Start, length is determined by SysEx end byte

  0xf1: {"dataLength": 1, "name": "quarterFrame"},          // Quarter frame
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
  0xff: {"dataLength": 0, "name": "reset"}                  // System Reset
};

exports.systemExclusive = {
  // Short ids
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
  0x5f: 'SD Card Association',

  0x7d: 'Educational',

  0x7e: {

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

  },

  0x7f: {
    name: 'Universal Realtime System Exclusive'
  },

  // Extended ids as strings
  '000066': 'Mackie',
  '000074': 'Ta Horng Musical Instrument',
  '000075': 'e-Tek Labs (Forte Tech)',
  '000076': 'Electro-Voice',
  '000077': 'Midisoft',
  '000078': 'QSound Labs',
  '000079': 'Westrex',
  '00007a': 'Nvidia',
  '00007b': 'ESS Technology',
  '00007c': 'Media Trix Peripherals',
  '00007d': 'Brooktree',
  '00007e': 'Otari',
  '00007f': 'Key Electronics,',
  '000100': 'Shure Incorporated',
  '000101': 'AuraSound',
  '000102': 'Crystal Semiconductor',
  '000103': 'Conexant (Rockwell)',
  '000104': 'Silicon Graphics',
  '000105': 'M-Audio (Midiman)',
  '000106': 'PreSonus',
  '000108': 'Topaz Enterprises',
  '000109': 'Cast Lighting',
  '00010a': 'Microsoft',
  '00010b': 'Sonic Foundry',
  '00010c': 'Line 6 (Fast Forward)',
  '00010d': 'Beatnik',
  '00010e': 'Van Koevering Company',
  '00010f': 'Altech Systems',
  '000110': 'S & S Research',
  '000111': 'VLSI Technology',
  '000112': 'Chromatic Research',
  '000113': 'Sapphire',
  '000114': 'IDRC',
  '000115': 'Justonic Tuning',
  '000116': 'TorComp Research',
  '000117': 'Newtek',
  '000118': 'Sound Sculpture',
  '000119': 'Walker Technical',
  '00011a': 'Digital Harmony (PAVO)',
  '00011b': 'InVision Interactive',
  '00011c': 'T-Square Design',
  '00011d': 'Nemesys Music Technology',
  '00011e': 'DBX Professional (Harman Intl)',
  '00011f': 'Syndyne',
  '000120': 'Bitheadz',
  '000121': 'Cakewalk Music Software',
  '000122': 'Analog Devices',
  '000123': 'National Semiconductor',
  '000124': 'Boom Theory / Adinolfi Alternative Percussion',
  '000125': 'Virtual DSP',
  '000126': 'Antares Systems',
  '000127': 'Angel Software',
  '000128': 'St Louis Music',
  '000129': 'Passport Music Software LLC (Gvox)',
  '00012a': 'Ashley Audio',
  '00012b': 'Vari-Lite',
  '00012c': 'Summit Audio',
  '00012d': 'Aureal Semiconductor',
  '00012e': 'SeaSound',
  '00012f': 'U.S. Robotics',
  '000130': 'Aurisis Research',
  '000131': 'Nearfield Research',
  '000132': 'FM7',
  '000133': 'Swivel Systems',
  '000134': 'Hyperactive Audio Systems',
  '000135': 'MidiLite (Castle Studios Productions)',
  '000136': 'Radikal Technologies',
  '000137': 'Roger Linn Design',
  '000138': 'TC-Helicon Vocal Technologies',
  '000139': 'Event Electronics',
  '00013a': 'Sonic Network',
  '00013b': 'Realtime Music Solutions',
  '00013c': 'Apogee Digital',
  '00013d': 'Classical Organs,',
  '00013e': 'Microtools',
  '00013f': 'Numark Industries',
  '000140': 'Frontier Design Group',
  '000141': 'Recordare',
  '000142': 'Starr Labs',
  '000143': 'Voyager Sound',
  '000144': 'Manifold Labs',
  '000145': 'Aviom',
  '000146': 'Mixmeister Technology',
  '000147': 'Notation Software',
  '000148': 'Mercurial Communications',
  '000149': 'Wave Arts',
  '00014a': 'Logic Sequencing Devices',
  '00014b': 'Axess Electronics',
  '00014c': 'Muse Research',
  '00014d': 'Open Labs',
  '00014e': 'Guillemot R&D',
  '00014f': 'Samson Technologies',
  '000150': 'Electronic Theatre Controls',
  '000151': 'Blackberry (RIM)',
  '000152': 'Mobileer',
  '000153': 'Synthogy',
  '000154': 'Lynx Studio Technology',
  '000155': 'Damage Control Engineering',
  '000156': 'Yost Engineering,',
  '000157': 'Brooks & Forsman Designs / DrumLite',
  '000158': 'Infinite Response',
  '000159': 'Garritan',
  '00015a': 'Plogue Art et Technologie,',
  '00015b': 'RJM Music Technology',
  '00015c': 'Custom Solutions Software',
  '00015d': 'Sonarcana',
  '00015e': 'Centrance',
  '00015f': 'Kesumo',
  '000160': 'Stanton (Gibson)',
  '000161': 'Livid Instruments',
  '000162': 'First Act / 745 Media',
  '000163': 'Pygraphics,',
  '000164': 'Panadigm Innovations',
  '000165': 'Avedis Zildjian',
  '000166': 'Auvital Music',
  '000167': 'Inspired Instruments',
  '000168': 'Chris Grigg Designs',
  '000169': 'Slate Digital',
  '00016a': 'Mixware',
  '00016b': 'Social Entropy',
  '00016c': 'Source Audio',
  '00016d': 'Ernie Ball / Music Man',
  '00016e': 'Fishman Transducers',
  '00016f': 'Custom Audio Electronics',
  '000170': 'American Audio/DJ',
  '000171': 'Mega Control Systems',
  '000172': 'Kilpatrick Audio',
  '000173': 'iConnectivity',
  '000174': 'Fractal Audio',
  '000175': 'NetLogic Microsystems',
  '000176': 'Music Computing',
  '000177': 'Nektar Technology',
  '000178': 'Zenph Sound Innovations',
  '000179': 'DJTechTools.com',
  '00017a': 'Rezonance Labs',
  '00017b': 'Decibel Eleven',
  '00017c': 'CNMAT',
  '00017d': 'Media Overkill',
  '00017e': 'Confusionists',
  '00017f': 'moForte',
  '000200': 'Miselu',
  '000201': 'Amelia\'s Compass',
  '000202': 'Zivix',
  '000203': 'Artiphon',
  '002029': 'Focusrite/Novation',
  '00202a': 'Samkyung Mechatronics',
  '00202b': 'Medeli Electronics',
  '00202c': 'Charlie Lab SRL',
  '00202d': 'Blue Chip Music Technology',
  '00202e': 'BEE OH',
  '00202f': 'LG Semicon America',
  '002030': 'TESI',
  '002031': 'EMAGIC',
  '002032': 'Behringer',
  '002033': 'Access Music Electronics',
  '002034': 'Synoptic',
  '002035': 'Hanmesoft',
  '002036': 'Terratec Electronic',
  '002037': 'Proel SpA',
  '002038': 'IBK MIDI',
  '002039': 'IRCAM',
  '00203a': 'Propellerhead Software',
  '00203b': 'Red Sound Systems',
  '00203c': 'Elektron ESI AB',
  '00203d': 'Sintefex Audio',
  '00203e': 'MAM (Music and More)',
  '00203f': 'Amsaro',
  '002040': 'CDS Advanced Technology BV',
  '002041': 'Mode Machines',
  '002042': 'DSP Arts',
  '002043': 'Phil Rees Music Tech',
  '002044': 'Stamer Musikanlagen',
  '002045': 'Musical Muntaner S.A. dba Soundart',
  '002046': 'C-Mexx Software',
  '002047': 'Klavis Technologies',
  '002048': 'Noteheads AB',
  '002049': 'Algorithmix',
  '00204a': 'Skrydstrup R&D',
  '00204b': 'Professional Audio Company',
  '00204c': 'NewWave Labs (MadWaves)',
  '00204d': 'Vermona',
  '00204e': 'Nokia',
  '00204f': 'Wave Idea',
  '002050': 'Hartmann',
  '002051': 'Lion\'s Tracs',
  '002052': 'Analogue Systems',
  '002053': 'Focal-JMlab',
  '002054': 'Ringway Electronics (Chang-Zhou)',
  '002055': 'Faith Technologies (Digiplug)',
  '002056': 'Showworks',
  '002057': 'Manikin Electronic',
  '002058': '1 Come Tech',
  '002059': 'Phonic',
  '00205a': 'Dolby Australia (Lake)',
  '00205b': 'Silansys Technologies',
  '00205c': 'Winbond Electronics',
  '00205d': 'Cinetix Medien und Interface',
  '00205e': 'A&G Soluzioni Digitali',
  '00205f': 'Sequentix Music Systems',
  '002060': 'Oram Pro Audio',
  '002061': 'Be4',
  '002062': 'Infection Music',
  '002063': 'Central Music Co. (CME)',
  '002064': 'genoQs Machines',
  '002065': 'Medialon',
  '002066': 'Waves Audio',
  '002067': 'Jerash Labs',
  '002068': 'Da Fact',
  '002069': 'Elby Designs',
  '00206a': 'Spectral Audio',
  '00206b': 'Arturia',
  '00206c': 'Vixid',
  '00206d': 'C-Thru Music',
  '00206e': 'Ya Horng Electronic',
  '00206f': 'SM Pro Audio',
  '002070': 'OTO MACHINES',
  '002071': 'ELZAB S.A., G LAB',
  '002072': 'Blackstar Amplification',
  '002073': 'M3i Technologies',
  '002074': 'Gemalto (from Xiring)',
  '002075': 'Prostage SL',
  '002076': 'Teenage Engineering',
  '002077': 'Tobias Erichsen Consulting',
  '002078': 'Nixer',
  '002079': 'Hanpin Electron',
  '00207a': '"MIDI-hardware" R.Sowa',
  '00207b': 'Beyond Music Industrial',
  '00207c': 'Kiss Box B.V.',
  '00207d': 'Misa Digital Technologies',
  '00207e': 'AI Musics Technology',
  '00207f': 'Serato Inc LP',
  '002100': 'V3Sound (was: Limex)',
  '002101': 'Kyodday/Tokai',
  '002102': 'Mutable Instruments',
  '002103': 'PreSonus Software',
  '002104': 'Xiring',
  '002105': 'Fairlight Instruments Pty',
  '002106': 'Musicom Lab',
  '002107': 'VacoLoco',
  '002108': 'RWA (Hong Kong)',
  '002109': 'Native Instruments',
  '00210a': 'Naonext',
  '00210b': 'MFB',
  '00210c': 'Teknel Research',
  '00210d': 'Ploytec',
  '00210e': 'Surfin Kangaroo Studio',
  '00210f': 'Philips Electronics HK',
  '002110': 'ROLI',
  '002111': 'Panda-Audio',
  '002112': 'BauM Software',
  '002113': 'Machinewerks',
  '002114': 'Xiamen Elane Electronics',
  '004000': 'Crimson Technology',
  '004001': 'Softbank Mobile',
  '004003': 'D&M Holdings'
};







