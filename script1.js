function generateWeather() {
    var num1 = Math.ceil(Math.random() * 20);
    var num2 = Math.ceil(Math.random() * 20);
    var num3 = Math.ceil(Math.random() * 20);

    var lowestTemp = Math.max(num1, num2, num3);
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var doctor = alphabet[num1 - 1];

    var totalMinutes = num2 * num3;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;

    document.getElementById("temp").innerText = lowestTemp + "Â°C";
    document.getElementById("doctor").innerText = doctor;
    document.getElementById("duration").innerText = totalMinutes + " m or " + hours + "h " + minutes + "m";
}
