// Error

// membuat error class manual

class ValidationError extends Error {

  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtils {

  static sum(...datas) {

    // method error
    if (datas.length === 0) {
      // throw new Error('data harus diisi!'); // errornya js

      // errornya dibuat manual
      throw new ValidationError('data harus diisi!', datas = 'datas');
    }

    let total = 0;
    for (let data of datas) {
      total += data;
    }
    return total;
  }
}

// const result = MathUtils.sum(2, 2, 2, 2, 2, 2);
// console.info(result);

// console.log(MathUtils.sum(1, 1, 1));
// console.log('arief');

// error handling

try {
  console.log(MathUtils.sum());
  console.log('arief');
} catch (error) {

  // agarbisa diedit pesannya
  if (error instanceof ValidationError) {
    console.error(`terjadi error di field : ${error.field}, dengan error : ${error.message}`);
  } else {
    console.error(`terjadi error : ${error.message}`);
  }
} finally { // dijalankan setelah trycatch blok
  console.info('arief');
}

console.log('saifuddien') // masih dijalankan