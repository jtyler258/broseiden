const Bro = require('../index.js')

exports['test that function returns a bro name'] = function(assert) {
	assert.equal(true, Bro().toLowerCase().includes('bro'), 'Function returns a bro')
}

if (module == require.main) require('test').run(exports)
