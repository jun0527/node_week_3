const errHandle = (res, code) => {
  let message;
  if (code === 404) {
    message = '找不到此路由';
  } else if (code === 400) {
    message = '欄位未填寫正確，或無此 id';
  } else if (code === 500) {
    message = '500錯誤';
  }
  res.status(code).json({
    'status': 'false',
    'message': message,
  })
}
module.exports = errHandle;