var fruits = [
    {
      name: "Pisang",
      description: "Pisang adalah buah yang berwarna kuning. Memiliki rasa manis hingga pahit (tergantung jenis dan tingkat kematangannya). Memiliki kandungan magnesium yang tinggi.",
      history: "Pisang telah dibudidayakan sejak ribuan tahun yang lalu di Asia Tenggara.",
      size: {
        diameter: "5-8 cm",
        weight: "120-150 gram"
      },
      nutrition: {
        calories: "96 kkal",
        carbohydrates: "23.2 gram",
        protein: "1.2 gram",
        fat: "0.2 gram",
        fiber: "2.6 gram"
      },
      processedFood: "Pisang dapat diolah menjadi smoothie, pisang goreng, atau dicampurkan dalam kue-kue.",
    },
    {
      name: "Hastho",
      description: "Developer website ini, hastho bukan buah",
      history: "???",
      size: {
        diameter: "183 cm",
        weight: "70 kg"
      },
      nutrition: {
        calories: "2500 kkal",
        carbohydrates: "20.000 gram",
        protein: "1.000 gram",
        fat: "25.000 gram",
        fiber: "??? gram"
      },
      processedFood: "hastho tidak dapat diolah.",
    },
    {
      name: "Apel",
      description: "Apel adalah buah yang berwarna merah. meiliki rasa yang manis dan textur yang renyah, cukup umum dijumpai di Indonesia",
      history: "Apel telah dikonsumsi sejak zaman kuno di wilayah Asia Barat.",
      size: {
        diameter: "6-9 cm",
        weight: "120-180 gram"
      },
      nutrition: {
        calories: "52 kkal",
        carbohydrates: "14 gram",
        protein: "0.3 gram",
        fat: "0.4 gram",
        fiber: "2.4 gram"
      },
      processedFood: "Apel dapat dijadikan jus, salad buah, atau dipanggang dalam pai.",
    },
    {
      name: "Sirsak",
      description: "Sirsak adalah buah berwarna hijau dengan sedikit duri. Memiliki rasa kecut, memiliki daging berwarna putih",
      history: "Sirsak telah dikonsumsi sejak zaman kuno di daerah tropis di Benua Amerika bagian Selatan, sekitar Peru, Meksiko, dan Argentina.",
      size: {
        diameter: "6-9 cm",
        weight: "120-150 gram"
      },
      nutrition: {
        calories: "36 kkal",
        carbohydrates: "12 gram",
        protein: "0.5 gram",
        fat: "0.2 gram",
        fiber: "2.8 gram"
      },
      processedFood: "Sirsak dapat di jus maupun dijadikan selai",
    },
    {
      name: "Alpukat",
      description: "Alpukat adalah buah yang berwarna hijau. Memiliki biji yang besar dengan bentuk yang unik, memiliki rasa yang tidak terlalu manis",
      history: "Alpukat berasal dari Amerika Tengah dan telah dikonsumsi selama ribuan tahun.",
      size: {
        diameter: "7-20 cm",
        weight: "100-1000 gram"
      },
      nutrition: {
        calories: "160 kkal",
        carbohydrates: "8.5 gram",
        protein: "2 gram",
        fat: "14.7 gram",
        fiber: "6.7 gram"
      },
      processedFood: "Alpukat sering digunakan untuk membuat guacamole, salad, atau dijadikan bahan utama dalam sandwich.",
    },
    {
      name: "Durian",
      description: "Durian adalah buah yang memiliki kulit berduri dan daging yang kaya rasa. Memiliki aroma yang kuat, tidak semua orang suka.",
      history: "Durian ditemukan di Asia Tenggara dan telah dikonsumsi sejak zaman kuno.",
      size: {
        diameter: "15-30 cm",
        weight: "1-3 kg"
      },
      nutrition: {
        calories: "367 kkal",
        carbohydrates: "27.1 gram",
        protein: "3.6 gram",
        fat: "28.2 gram",
        fiber: "3.8 gram"
      },
      processedFood: "Durian dapat diolah menjadi es krim durian, dodol durian, atau dimakan langsung dalam keadaan segar.",
    },
    {
      name: "Semangka",
      description: "Semangka adalah buah berdaging merah dengan banyak air dan berukuran besar, memiliki kulit berwarna hijau tua-muda, beberapa jenis semangka berwarna kuning.",
      history: "Semangka telah dikonsumsi sejak zaman kuno di wilayah Afrika.",
      size: {
        diameter: "20-30 cm",
        weight: "2-10 kg"
      },
      nutrition: {
        calories: "30 kkal",
        carbohydrates: "7.6 gram",
        protein: "0.6 gram",
        fat: "0.2 gram",
        fiber: "0.4 gram"
      },
      processedFood: "Semangka sering dijadikan hidangan penutup, jus, atau dicampurkan dalam salad buah.",
    },
    {
      name: "Mangga",
      description: "Mangga adalah buah yang berwarna kuning atau hijau dengan daging yang manis. memiliki daging buah berwarna kuning atau orange, dan memiliki satu biji berbentuk memanjang",
      history: "Mangga telah dikonsumsi sejak ribuan tahun yang lalu di Asia Selatan dan Tenggara.",
      size: {
        diameter: "5-20 cm",
        weight: "150-1000 gram"
      },
      nutrition: {
        calories: "60 kkal",
        carbohydrates: "15 gram",
        protein: "0.8 gram",
        fat: "0.4 gram",
        fiber: "1.6 gram"
      },
      processedFood: "Mangga dapat dijadikan jus, smoothie, atau dicampurkan dalam hidangan salad.",
    },
    {
      name: "Jeruk",
      description: "Jeruk adalah buah yang berwarna oranye dan memiliki rasa asam segar. Memiliki kulit berwarna kuning atau orange dan mengandung banyak biji",
      history: "Jeruk telah dikonsumsi sejak zaman kuno di wilayah Asia Timur.",
      size: {
        diameter: "6-12 cm",
        weight: "80-150 gram"
      },
      nutrition: {
        calories: "43 kkal",
        carbohydrates: "11 gram",
        protein: "0.9 gram",
        fat: "0.1 gram",
        fiber: "2.4 gram"
      },
      processedFood: "Jeruk dapat dijadikan jus, salad buah, atau digunakan sebagai bahan dalam kue-kue.",
    },
    {
        name: "Anggur",
        description: "Anggur adalah buah berbiji dengan beragam warna seperti ungu, hijau, dan merah. 1 ikat anggur terdiri dari banyak anggur. Dapat dimakan langsung dengan kulitnya (kecuali bijinya)",
        history: "Anggur telah dikonsumsi sejak zaman kuno dan menjadi bahan utama dalam pembuatan wine.",
        size: {
          diameter: "1-2 cm",
          weight: "2-10 gram"
        },
        nutrition: {
          calories: "69 kkal",
          carbohydrates: "18 gram",
          protein: "0.72 gram",
          fat: "0.16 gram",
          fiber: "0.9 gram"
        },
        processedFood: "Anggur dapat dikonsumsi secara langsung atau dijadikan bahan dalam salad, jus, atau wine.",
      },
      {
        name: "Strawberi",
        description: "Strawberi adalah buah kecil berwarna merah cerah dengan rasa manis dan sedikit asam. Beberapa strawberi berwarna merah muda hingga putih",
        history: "Strawberi telah dikonsumsi sejak zaman Romawi kuno dan menjadi buah populer di seluruh dunia.",
        size: {
          diameter: "1-3 cm",
          weight: "5-15 gram"
        },
        nutrition: {
          calories: "32 kkal",
          carbohydrates: "7.7 gram",
          protein: "0.67 gram",
          fat: "0.3 gram",
          fiber: "2 gram"
        },
        processedFood: "Strawberi sering digunakan dalam pembuatan jus, selai, kue, dan es krim.",
      },
      {
        name: "Pepaya",
        description: "Pepaya adalah buah yang memiliki daging berwarna oranye dengan rasa manis dan lembut. memiliki rongga kosong pada tengah buah nya sebagai tempat penyimpanan biji",
        history: "Pepaya berasal dari Amerika Tengah dan telah dibudidayakan sejak zaman kuno.",
        size: {
          diameter: "10-20 cm",
          weight: "500 gram - 2 kg"
        },
        nutrition: {
          calories: "43 kkal",
          carbohydrates: "11 gram",
          protein: "0.5 gram",
          fat: "0.4 gram",
          fiber: "2 gram"
        },
        processedFood: "Pepaya dapat dijadikan jus, smoothie, atau digunakan sebagai bahan dalam salad buah.",
      },
      {
        name: "Kiwi",
        description: "Kiwi adalah buah berkulit cokelat dengan daging berwarna hijau dan rasa manis dengan sentuhan asam. Cukup jarang dijumpai di Indonesia",
        history: "Kiwi berasal dari Tiongkok dan telah menjadi buah populer di seluruh dunia.",
        size: {
          diameter: "5-8 cm",
          weight: "70-150 gram"
        },
        nutrition: {
          calories: "41 kkal",
          carbohydrates: "9 gram",
          protein: "1 gram",
          fat: "0.5 gram",
          fiber: "2 gram"
        },
        processedFood: "Kiwi dapat dikonsumsi langsung atau dijadikan bahan dalam salad, smoothie, atau jus.",
      },
      {
        name: "Nanas",
        description: "Nanas adalah buah berdaging kuning dengan rasa manis dan asam yang segar. Buah yang menjadi rumah 'Spongebob' ini memiliki bentuk dan textur kulit yang khas",
        history: "Nanas berasal dari Amerika Selatan dan telah dibudidayakan sejak zaman kuno.",
        size: {
          diameter: "10-20 cm",
          weight: "1-2 kg"
        },
        nutrition: {
          calories: "50 kkal",
          carbohydrates: "13 gram",
          protein: "0.5 gram",
          fat: "0.2 gram",
          fiber: "2 gram"
        },
        processedFood: "Nanas dapat dijadikan jus, selai, atau digunakan dalam hidangan asam manis.",
      },
      {
        name: "Pear",
        description: "Pear adalah buah dengan daging berwarna putih atau kuning, memiliki rasa manis dan tekstur lembut mirip seperti apel, beberapa orang mengatakan bahwa pear merupakan sub-class dari apel.",
        history: "Pear telah dikonsumsi sejak zaman kuno dan menjadi buah yang populer di Eropa dan Asia.",
        size: {
          diameter: "5-10 cm",
          weight: "100-250 gram"
        },
        nutrition: {
          calories: "57 kkal",
          carbohydrates: "15 gram",
          protein: "0.4 gram",
          fat: "0.1 gram",
          fiber: "3 gram"
        },
        processedFood: "Pear dapat dimakan langsung atau dijadikan bahan dalam salad, pai, atau selai.",
      },
      {
        name: "Plum",
        description: "Plum adalah buah berwarna merah atau ungu dengan daging yang manis dan berair.",
        history: "Plum telah dikonsumsi sejak zaman kuno di wilayah Asia dan Eropa.",
        size: {
          diameter: "3-6 cm",
          weight: "30-80 gram"
        },
        nutrition: {
          calories: "46 kkal",
          carbohydrates: "11.4 gram",
          protein: "0.6 gram",
          fat: "0.2 gram",
          fiber: "1.4 gram"
        },
        processedFood: "Plum dapat dimakan langsung atau digunakan dalam pembuatan selai, jus, atau kue.",
      },
      {
        name: "Persik",
        description: "Persik adalah buah dengan kulit halus dan daging berwarna oranye dengan rasa manis.",
        history: "Persik telah dikonsumsi sejak zaman kuno dan menjadi buah yang populer di Asia dan Eropa.",
        size: {
          diameter: "5-8 cm",
          weight: "100-200 gram"
        },
        nutrition: {
          calories: "39 kkal",
          carbohydrates: "9.5 gram",
          protein: "0.9 gram",
          fat: "0.3 gram",
          fiber: "1.5 gram"
        },
        processedFood: "Persik dapat dimakan langsung atau dijadikan bahan dalam salad, jus, atau hidangan manis.",
      },
      {
        name: "Nangka",
        description: "Nangka adalah buah dengan daging kuning yang beraroma manis dan tekstur yang lembut. Beberapa orang mengolah nangka menjadi lauk santapan, contohnya pada nasi padang.",
        history: "Nangka berasal dari wilayah Asia Tenggara dan telah lama menjadi buah yang populer di daerah tropis.",
        size: {
          diameter: "20-30 cm",
          weight: "5-30 kg"
        },
        nutrition: {
          calories: "95 kkal",
          carbohydrates: "23 gram",
          protein: "1.7 gram",
          fat: "0.6 gram",
          fiber: "3 gram"
        },
        processedFood: "Nangka dapat dimakan langsung, digunakan dalam hidangan manis, atau dijadikan bahan dalam makanan tradisional.",
      },
      {
        name: "Rambutan",
        description: "Rambutan adalah buah berdaging berwarna putih dengan rambut merah yang tajam di kulitnya. Buah ini memiliki ciri khas pada kulitnya yang terlihat seperti bola duri. Biasanya pada pohon rambutan terdapat banyak semut.",
        history: "Rambutan berasal dari Asia Tenggara dan telah menjadi buah yang populer di wilayah tropis.",
        size: {
          diameter: "3-6 cm",
          weight: "20-30 gram"
        },
        nutrition: {
          calories: "68 kkal",
          carbohydrates: "16.5 gram",
          protein: "0.9 gram",
          fat: "0.2 gram",
          fiber: "0.9 gram"
        },
        processedFood: "Rambutan biasanya dimakan langsung setelah dikupas, dan juga bisa digunakan dalam salad atau minuman.",
      },
      {
        name: "Jambu Biji",
        description: "Jambu biji adalah buah dengan daging berwarna putih atau merah muda yang renyah dan rasa manis dengan sedikit rasa asam. Walaupun dinamai jambu biji, ia sebenarnya tidak berkerabat dengan jambu air dan jambu monyet.",
        history: "Jambu biji berasal dari Amerika Tengah dan Amerika Selatan, dan telah menyebar ke berbagai wilayah tropis di dunia.",
        size: {
          diameter: "5-10 cm",
          weight: "100-300 gram"
        },
        nutrition: {
          calories: "37 kkal",
          carbohydrates: "9 gram",
          protein: "0.6 gram",
          fat: "0.2 gram",
          fiber: "2 gram"
        },
        processedFood: "Jambu biji biasanya dimakan langsung, digunakan dalam salad, atau dijadikan bahan dalam minuman segar.",
      },
      {
        name: "Salak",
        description: "Salak adalah buah berkulit keriting dengan daging berwarna putih atau kuning yang manis dan tekstur yang kenyal dan sedikit renyah. Memiliki karakteristik buah yang cukup kering",
        history: "Salak berasal dari wilayah Asia Tenggara dan telah menjadi buah yang populer di daerah tropis.",
        size: {
          diameter: "3-7 cm",
          weight: "20-50 gram"
        },
        nutrition: {
          calories: "82 kkal",
          carbohydrates: "22.3 gram",
          protein: "0.6 gram",
          fat: "0.4 gram",
          fiber: "2.6 gram"
        },
        processedFood: "Salak biasanya dimakan langsung setelah dikupas, dan juga bisa digunakan dalam salad, manisan, atau makanan penutup.",
      },
      {
        name: "Markisa",
        description: "Markisa, atau disebut juga buah passion, adalah buah dengan daging berair dan biji kecil yang memiliki rasa asam-manis yang khas. Beberapa orang tidak suka markisa karena terlihat seperti lendir.",
        history: "Markisa berasal dari Amerika Tengah dan Amerika Selatan, dan telah menyebar ke berbagai wilayah tropis di dunia.",
        size: {
          diameter: "4-8 cm",
          weight: "30-60 gram"
        },
        nutrition: {
          calories: "97 kkal",
          carbohydrates: "23 gram",
          protein: "2.2 gram",
          fat: "0.7 gram",
          fiber: "10.4 gram"
        },
        processedFood: "Markisa dapat dimakan langsung, digunakan dalam jus, sirup, atau dijadikan bahan dalam makanan dan minuman.",
      },
      {
        name: "Srikaya",
        description: "Srikaya adalah buah dengan daging berwarna kuning dan memiliki rasa yang manis dan lezat. Buah ini umum dijumpai menjadi isian roti kasur.",
        history: "Srikaya merupakan buah yang berasal dari Indonesia dan telah menjadi salah satu buah yang populer di Asia Tenggara.",
        size: {
          diameter: "7-15 cm",
          weight: "250-800 gram"
        },
        nutrition: {
          calories: "157 kkal",
          carbohydrates: "36 gram",
          protein: "2 gram",
          fat: "0.5 gram",
          fiber: "2 gram"
        },
        processedFood: "Srikaya sering dimakan langsung atau digunakan sebagai bahan dalam jus, es krim, atau manisan.",
      },
      {
        name: "Melon",
        description: "Melon adalah buah yang memiliki daging berair, rasa manis, dan aroma segar. Buah ini umum dijumpai dengan harga yang relatif murah",
        history: "Melon berasal dari Persia (sekarang Iran) dan telah diperkenalkan ke berbagai belahan dunia.",
        size: {
          diameter: "10-20 cm",
          weight: "500 gram - 2 kg"
        },
        nutrition: {
          calories: "34 kkal",
          carbohydrates: "8 gram",
          protein: "0.8 gram",
          fat: "0.2 gram",
          fiber: "0.6 gram"
        },
        processedFood: "Melon sering dimakan langsung, digunakan dalam salad, jus, atau campuran dalam minuman segar.",
      },
      {
        name: "Buah Naga",
        description: "Buah Naga adalah buah dengan kulit berduri dan daging berwarna merah atau putih yang memiliki rasa manis dan segar. Buah yang terlihat seperti buah iblis pada serian One Piece ini berasal dari tumbuhan kaktus",
        history: "Buah Naga berasal dari Meksiko dan Amerika Tengah, dan telah menyebar ke berbagai wilayah tropis di dunia.",
        size: {
          diameter: "5-15 cm",
          weight: "150-600 gram"
        },
        nutrition: {
          calories: "60 kkal",
          carbohydrates: "9 gram",
          protein: "1.9 gram",
          fat: "0.4 gram",
          fiber: "1.3 gram"
        },
        processedFood: "Buah Naga dapat dimakan langsung, digunakan dalam salad, atau dijadikan bahan dalam jus dan makanan penutup.",
      },
      {
        name: "Buah Lontar",
        description: "Buah Lontar adalah buah yang memiliki kulit keras dan berduri, dengan daging yang berwarna putih dan rasa manis. Buah ini mulai jarang dijumpai di Indonesia dan memiliki harga jual lumayan mahal.",
        history: "Buah Lontar berasal dari wilayah tropis di Asia Tenggara, dan telah menjadi buah yang penting dalam budaya dan masakan setempat.",
        size: {
          diameter: "15-30 cm",
          weight: "1-3 kg"
        },
        nutrition: {
          calories: "160 kkal",
          carbohydrates: "40 gram",
          protein: "2 gram",
          fat: "0.5 gram",
          fiber: "2 gram"
        },
        processedFood: "Buah Lontar sering dimakan langsung atau digunakan dalam berbagai masakan tradisional, seperti dodol atau manisan.",
      },
      {
        name: "Kelapa",
        description: "Kelapa adalah buah dengan kulit keras dan serat, yang berisi air kelapa dan daging kelapa yang lezat. Sangat mudah untuk didapatkan karena banyak yang menjual es kelapa.",
        history: "Kelapa berasal dari wilayah tropis dan subtropis, dan telah digunakan dalam berbagai aspek kehidupan sehari-hari di banyak budaya.",
        size: {
          diameter: "15-20 cm",
          weight: "1-2 kg"
        },
        nutrition: {
          calories: "354 kkal",
          carbohydrates: "15 gram",
          protein: "3.3 gram",
          fat: "33.5 gram",
          fiber: "9 gram"
        },
        processedFood: "Kelapa sering digunakan dalam berbagai hidangan tradisional, seperti serundeng, santan, minuman kelapa, atau minyak kelapa.",
      },
      {
        name: "Belimbing",
        description: "Belimbing adalah buah yang memiliki bentuk seperti bintang dengan kulit berwarna kuning atau hijau. Rasanya asam manis dan sering digunakan dalam masakan atau minuman. Buah ini sering dikonsumsi orang indonesia sebagai rujak.",
        history: "Buah belimbing berasal dari daerah tropis seperti Asia Tenggara dan India. Buah ini telah lama dikenal dan digunakan dalam masakan tradisional di berbagai negara.",
        size: {
          diameter: "5-10 cm",
          weight: "70-100 gram"
        },
        nutrition: {
          calories: "31 kkal",
          carbohydrates: "6.73 gram",
          protein: "0.61 gram",
          fat: "0.37 gram",
          fiber: "3.6 gram"
        },
        processedFood: "Belimbing dapat diolah menjadi jus, salad buah, atau digunakan sebagai bahan dalam masakan seperti acar atau tumis.",
      },
      {
        name: "Tomat",
        description: "Tomat adalah buah yang memiliki warna merah cerah dan kulit yang halus. Rasanya segar dan sedikit asam serta mengandung banyak air. Tomat sering digunakan dalam berbagai hidangan, seperti salad, saus, atau sup. ",
        history: "Tomat berasal dari Amerika Selatan dan telah dibudidayakan selama ribuan tahun. Buah ini kemudian dibawa ke Eropa oleh penjelajah dan menjadi salah satu bahan penting dalam masakan di seluruh dunia.",
        size: {
          diameter: "3-10 cm",
          weight: "70-150 gram"
        },
        nutrition: {
          calories: "18  kkal",
          carbohydrates: "3.9 gram",
          protein: "0.9 gram",
          fat: "0.2 gram",
          fiber: "1.2 gram"
        },
        processedFood: "Tomat bisa dimakan langsung, ditambahkan dalam salad, diolah menjadi saus, atau digunakan sebagai bahan dalam masakan seperti sup atau tumisan.",
      },
  ];
  
  function searchFruit() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var foundFruit = fruits.find(function(fruit) {
      return fruit.name.toLowerCase() === input;
    });
  
    document.getElementById("result").innerHTML = "";
  
    if (foundFruit) {
      var infoBox = document.createElement("div");
      infoBox.classList.add("info-box");
  
      var heading = document.createElement("h3");
      heading.textContent = foundFruit.name;
      infoBox.appendChild(heading);
  
      var description = document.createElement("p");
      description.textContent = foundFruit.description;
      infoBox.appendChild(description);
  
      // Sejarah
      var historyCategory = document.createElement("div");
      historyCategory.classList.add("info-category");
  
      var historyHeading = document.createElement("h4");
      historyHeading.textContent = "Sejarah";
      historyCategory.appendChild(historyHeading);
  
      var history = document.createElement("p");
      history.textContent = foundFruit.history;
      historyCategory.appendChild(history);
  
      infoBox.appendChild(historyCategory);
  
      // Ukuran
      var sizeCategory = document.createElement("div");
      sizeCategory.classList.add("info-category");
  
      var sizeHeading = document.createElement("h4");
      sizeHeading.textContent = "Ukuran";
      sizeCategory.appendChild(sizeHeading);
  
      var diameter = document.createElement("p");
      diameter.textContent = "Diameter: " + foundFruit.size.diameter;
      sizeCategory.appendChild(diameter);
  
      var weight = document.createElement("p");
      weight.textContent = "Berat: " + foundFruit.size.weight;
      sizeCategory.appendChild(weight);
  
      infoBox.appendChild(sizeCategory);
  
      // Kandungan Gizi
      var nutritionCategory = document.createElement("div");
      nutritionCategory.classList.add("info-category");
  
      var nutritionHeading = document.createElement("h4");
      nutritionHeading.textContent = "Kandungan Gizi";
      nutritionCategory.appendChild(nutritionHeading);
  
      var calories = document.createElement("p");
      calories.textContent = "Kalori: " + foundFruit.nutrition.calories;
      nutritionCategory.appendChild(calories);
  
      var carbohydrates = document.createElement("p");
      carbohydrates.textContent = "Karbohidrat: " + foundFruit.nutrition.carbohydrates;
      nutritionCategory.appendChild(carbohydrates);
  
      var protein = document.createElement("p");
      protein.textContent = "Protein: " + foundFruit.nutrition.protein;
      nutritionCategory.appendChild(protein);
  
      var fat = document.createElement("p");
      fat.textContent = "Lemak: " + foundFruit.nutrition.fat;
      nutritionCategory.appendChild(fat);
  
      var fiber = document.createElement("p");
      fiber.textContent = "Serat: " + foundFruit.nutrition.fiber;
      nutritionCategory.appendChild(fiber);
  
      infoBox.appendChild(nutritionCategory);
  
      // Contoh Pengolahan Buah
      var processedFoodCategory = document.createElement("div");
      processedFoodCategory.classList.add("info-category");
  
      var processedFoodHeading = document.createElement("h4");
      processedFoodHeading.textContent = "Contoh Pengolahan Buah";
      processedFoodCategory.appendChild(processedFoodHeading);
  
      var processedFood = document.createElement("p");
      processedFood.textContent = foundFruit.processedFood;
      processedFoodCategory.appendChild(processedFood);
  
      infoBox.appendChild(processedFoodCategory);
  
      document.getElementById("result").appendChild(infoBox);
    } else {
      document.getElementById("result").innerHTML = "<p>Buah tidak ditemukan.</p>";
    }
  }
  
  