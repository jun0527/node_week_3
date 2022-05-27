const errHandle = (res, code) => {
  res.status(code).json({
    'status': 'false',
    'message': '欄位未填寫正確，或無此 id',
  })
}
module.exports = errHandle;