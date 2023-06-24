// kalo async wait resolve = pake return, reject = pake throw
async function calculate(number1, number2) {
  if(number1 === 0 && number2 === 0){// cek jika ada input 0
    //menggunakann throw seperti fungsi reject di promise
    throw "number1 and number2 cannot be 0"; // if 0
  }
  else if(number1 %2 !== 0){ // cek jika number1 ganjil
    return number1 * number2; // if number 1 ganjil
  }else{
    if (number2 %2 === 0) { /// cek jika genap semua
    return number1 - number2; // if genap, genap
    }
    else{// else jika number2 bukan genap
      return number1 + number2; // if genap, ganjil
    }
  }
}

/// mencoba untuk menampilkan dengan membuat async function baru 
async function testProgramSingle(){
  try {
    const result = await calculate(2, 3); // menjalankan fungsi calculate dengan parameter 2 dan 3 secara asynchronous
    console.log(result); // menampilkan hasil perhitungan dari calculate jika berhasil dijalankan
  } catch (error) { // menangkap error jika terjadi kesalahan dalam menjalankan fungsi calculate
    console.log(error); // menampilkan pesan error jika terjadi kesalahan dalam menjalankan fungsi calculate
  }
}
testProgramSingle();

async function testProgramMore(){
  try {
    const result = await calculate(2, 3); // menjalankan fungsi calculate dengan parameter 2 dan 3 secara asynchronous
    const result2 = await calculate(result, 2); //num1 ganjil = dikali
    const result3 = await calculate(result2, 8);//genap, genap = dikurang
    const result4 = await calculate(result3, 19);//genap, ganjil = ditambah
    //dan bisa ditambah lagi sebannyaknnya
    console.log(result4); // menampilkan hasil perhitungan dari calculate jika berhasil dijalankan
  } catch (error) { // menangkap error jika terjadi kesalahan dalam menjalankan fungsi calculate
    console.log(error); // menampilkan pesan error jika terjadi kesalahan dalam menjalankan fungsi calculate
  }
}
testProgramMore();

module.exports = calculate;
