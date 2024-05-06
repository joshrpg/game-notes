function() {
    let d = [ ...Array(98).keys() ];
    #db.us(
        { _id: 'consts' },
        {
          _id: 'consts',
          u: ['unlock', 'open', 'release'],
          d: d,
          p: d.filter(prime => [ 2, 3, 5, 7 ].every(mod => prime == mod || prime % mod)),
          c: "red|orange|yellow|lime|green|cyan|blue|purple".split('|'),
          locket: "vc2c7q|cmppiq|tvfkyq|uphlaw|6hh8xw|xwz7ja|sa23uw|72umy0".split('|')
        }
      )
    return (#db.f({ _id: 'consts' }).first());
  }