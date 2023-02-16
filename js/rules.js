class Rules {
  static verbs = {
//   $v1        $vs        $vg         $v2        $v3
    'do':    [ 'does',    'doing',    'did',     'done'    ],
    'enter': [ 'enters',  'entering', 'entered', 'entered' ],
    'get':   [ 'gets',    'getting',  'got',     'gotten'  ],
    'have':  [ 'has',     'having',   'had',     'had'     ],
    'read':  [ 'reads',   'reding',   'read',    'read'    ],
    'ring':  [ 'rings',   'ringing',  'rang',    'rung'    ],
    'set':   [ 'sets',    'setting',  'set',     'set'     ],
    'sing':  [ 'sings',   'singing',  'sang',    'sung'    ],
    'sleep': [ 'sleeps',  'sleeping', 'slept',   'slept'   ],
    'study': [ 'studies', 'studying', 'studied', 'studied' ],
    'take':  [ 'takes',   'taking',   'took',    'taken'   ],
    'work':  [ 'works',   'working',  'worked',  'worked'  ],
    'write': [ 'writes',  'writing',  'wrote',   'written' ],
  };

  static tenses = {
    'statement positive past nonPerfect simple I he she it we you they': '$s $v2',
    'statement positive past nonPerfect continuous I he she it': '$s was $vg',
    'statement positive past nonPerfect continuous we you they': '$s were $vg',
    'statement positive past perfect simple I he she it we you they': '$s had $v3',
    'statement positive past perfect continuous I he she it we you they': '$s had been $vg',
    'statement positive present nonPerfect simple I we you they': '$s $v1',
    'statement positive present nonPerfect simple he she it': '$s $vs',
    'statement positive present nonPerfect continuous I': '$s am $vg',
    'statement positive present nonPerfect continuous he she it': '$s is $vg',
    'statement positive present nonPerfect continuous we you they': '$s are $vg',
    'statement positive present perfect simple I we you they': '$s have $v3',
    'statement positive present perfect simple he she it': '$s has $v3',
    'statement positive present perfect continuous I we you they': '$s have been $vg',
    'statement positive present perfect continuous he she it': '$s has been $vg',
    'statement positive future nonPerfect simple I he she it we you they': '$s will $v1',
    'statement positive future nonPerfect continuous I he she it we you they': '$s will be $vg',
    'statement positive future perfect simple I he she it we you they': '$s will have $v3',
    'statement positive future perfect continuous I he she it we you they': '$s will have been $vg',

    'statement negative past nonPerfect simple I he she it we you they': '$s did not $v1',
    'statement negative past nonPerfect continuous I he she it': '$s was not $vg',
    'statement negative past nonPerfect continuous we you they': '$s were not $vg',
    'statement negative past perfect simple I he she it we you they': '$s had not $v3',
    'statement negative past perfect continuous I he she it we you they': '$s had not been $vg',
    'statement negative present nonPerfect simple I we you they': '$s do not $v1',
    'statement negative present nonPerfect simple he she it': '$s does not $v1',
    'statement negative present nonPerfect continuous I': '$s am not $vg',
    'statement negative present nonPerfect continuous he she it': '$s is not $vg',
    'statement negative present nonPerfect continuous we you they': '$s are not $vg',
    'statement negative present perfect simple I we you they': '$s have not $v3',
    'statement negative present perfect simple he she it': '$s has not $v3',
    'statement negative present perfect continuous I we you they': '$s have not been $vg',
    'statement negative present perfect continuous he she it': '$s has not been $vg',
    'statement negative future nonPerfect simple I he she it we you they': '$s will not $v1',
    'statement negative future nonPerfect continuous I he she it we you they': '$s will not be $vg',
    'statement negative future perfect simple I he she it we you they': '$s will not have $v3',
    'statement negative future perfect continuous I he she it we you they': '$s will not have been $vg',

    'question positive past nonPerfect simple I he she it we you they': 'did $s $v1',
    'question positive past nonPerfect continuous I he she it': 'was $s $vg',
    'question positive past nonPerfect continuous we you they': 'were $s $vg',
    'question positive past perfect simple I he she it we you they': 'had $s $v3',
    'question positive past perfect continuous I he she it we you they': 'had $s been $vg',
    'question positive present nonPerfect simple I we you  they': 'do $s $v1',
    'question positive present nonPerfect simple he she it': 'does $s $v1',
    'question positive present nonPerfect continuous I': 'am $s $vg',
    'question positive present nonPerfect continuous he she it': 'is $s $vg',
    'question positive present nonPerfect continuous we you they': 'are $s $vg',
    'question positive present perfect simple I we you they': 'have $s $v3',
    'question positive present perfect simple he she it': 'has $s $v3',
    'question positive present perfect continuous I we you they': 'have $s been $vg',
    'question positive present perfect continuous he she it': 'has $s been $vg',
    'question positive future nonPerfect simple I he she it we you they': 'will $s $v1',
    'question positive future nonPerfect continuous I he she it we you they': 'will $s be $vg',
    'question positive future perfect simple I he she it we you they': 'will $s have $v3',
    'question positive future perfect continuous I he she it we you they': 'will $s have been $vg',

    'question negative past nonPerfect simple I he she it we you they': 'did $s not $v1',
    'question negative past nonPerfect continuous I he she it': 'was $s not $vg',
    'question negative past nonPerfect continuous we you they': 'were $s not $vg',
    'question negative past perfect simple I he she it we you they': 'had $s not $v3',
    'question negative past perfect continuous I he she it we you they': 'had $s not been $vg',
    'question negative present nonPerfect simple I we you they': 'do $s not $v1',
    'question negative present nonPerfect simple he she it': 'does $s not $v1',
    'question negative present nonPerfect continuous I': 'am $s not $vg',
    'question negative present nonPerfect continuous he she it': 'is $s not $vg',
    'question negative present nonPerfect continuous we you they': 'are $s not $vg',
    'question negative present perfect simple I we you they': 'have $s not $v3',
    'question negative present perfect simple he she it': 'has $s not $vg',
    'question negative present perfect continuous I we you they': 'have $s not been $vg',
    'question negative present perfect continuous he she it': 'has $s not been $vg',
    'question negative future nonPerfect simple I he she it we you they': 'will $s not $v1',
    'question negative future nonPerfect continuous I he she it we you thet': 'will $s not be $vg',
    'question negative future perfect simple I he she it we you they': 'will $s not have $v3',
    'question negative future perfect continuous I he she it we you they': 'will $s not have been $vg',
  };

  static subjects = [ 'I', 'you', 'he', 'she', 'it', 'we', 'you', 'they' ];

  static split(s) {
    return s.split(/\s+/);
  }

  static have_all_in(a, b) {
    return a.every((d) => b.includes(d));
  }

  static interpolate(sentence, verb, subject) {
    return (
      sentence
      .replace('$s', subject)
      .replace('$v1', verb)
      .replace('$vs', this.verbs[verb][0])
      .replace('$vg', this.verbs[verb][1])
      .replace('$v2', this.verbs[verb][2])
      .replace('$v3', this.verbs[verb][3])
    );
  }

  static sentence(verb, subject, attributes) {
    if(this.verbs[verb] === undefined) {
      return false;
    }
    let attributes_array = this.split(attributes);
    attributes_array.push(subject);
    for(let tense_attribute in this.tenses) {
      let tense_attribute_array = this.split(tense_attribute);
      if(this.have_all_in(attributes_array, tense_attribute_array)) {
        return this.interpolate(this.tenses[tense_attribute], verb, subject);
      }
    }
    return false;
  }
};

export { Rules };
