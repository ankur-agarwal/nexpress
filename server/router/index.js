const express = require('express')
const router = express.Router() // eslint-disable-line new-cap

// ============ Routes ======================
router.use('/test', require('./routes/test'))

module.exports = router
