// Object Kosong
let foo = {};
console.log("Type of foo: ", typeof foo); // object

// Object
let mahasiswa = {
  nama: "Ali",
  jurusan: "Informatika",
  ipk: 3.67,
  semester: 4,
};
console.log("Nama Mahasiswa: ", mahasiswa.nama);
console.log("Jurusan Mahasiswa: ", mahasiswa.jurusan);
console.log("IPK Mahasiswa: ", mahasiswa.ipk);
console.log("Semester Mahasiswa: ", mahasiswa.semester);

// Menambah Properti
let mahasiswa2 = {
  nama: "Budi",
  jurusan: "Sistem Informasi",
};
mahasiswa2.ipk = 3.67;
mahasiswa2.semester = 4;
console.log("Nama Mahasiswa2: ", mahasiswa2.nama);
console.log("Jurusan Mahasiswa2: ", mahasiswa2.jurusan);
console.log("IPK Mahasiswa2: ", mahasiswa2.ipk);
console.log("Semester Mahasiswa2: ", mahasiswa2.semester);

// Mengubah nilai properti
let mahasiswa3 = {
  nama: "Dodi",
  jurusan: "Kedokteran",
  ipk: 3.67,
  semester: 4,
};
console.log("Nama Mahasiswa3: ", mahasiswa3.nama);
mahasiswa3.nama = "Joko";
console.log("Nama Mahasiswa3: ", mahasiswa3.nama);
console.log("IPK Mahasiswa3: ", mahasiswa3["ipk"]);
mahasiswa3["ipk"] = 2.9;
console.log("IPK Mahasiswa3: ", mahasiswa3["ipk"]);

// Object Method
let mobil = {
  nama: "Toyota Avanza",
  tipe: "MPV",
  harga: 300000000,
  warna: "merah",
  hidupkan: function () {
    return "Mesin dihidupkan";
  },
};
console.log("Hidupkan mobil: ", mobil.hidupkan());

// Spread Operator
let mahasiswa4 = {
  nama: "Heri",
  jurusan: "Informatika",
};
let mahasiswaBaru = { ...mahasiswa4 };
mahasiswaBaru.jurusan = "Ekonomi Manajemen";
console.log("Jurusan Mahasiswa4: ", mahasiswa4.jurusan);
console.log("Jurusan MahasiswaBaru: ", mahasiswaBaru.jurusan);

// For In Method
let mobil2 = {
  nama: "Toyota Avanza",
  tipe: "MPV",
  harga: 300000000,
  warna: "merah",
  hidupkan: function () {
    return "Mesin dihidupkan";
  },
};
for (let prop in mobil2) {
  console.log("Prop: ", prop);
  console.log("Isi " + prop + " = " + mobil2[prop]);
}
