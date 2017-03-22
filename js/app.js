/*alert ("Hello World!");
window.alert("This is window.alert function");
var name = "Abdul Moiz Lakhani";
var nationality = "Pakistani";

window.alert(name);
alert(nationality);

name = "Ghulam Rasool Lakhani";
nationality = "American";

var weight = 50;
alert(weight);

weight = weight + 5;
alert(weight);

var modulus = 9;
alert("It shows remainder of when 2 divides 9 = " + modulus%2);

var number = 0;
var num;

for(num = number++; num<10; num++)
{
    alert(num);
}

for(num = number; num<10; ++num)
{
    alert(num);
}

for(num = 10; num>0; num--)
{
    alert(num);
}

for(num = 10; num>0; --num)
{
    alert(num);
}*/

// Nested If Practice

/*var item1 = prompt("Enter name of item 1");
var item2 = prompt("Enter name of item 2");

if (item1 === "Bat")
{
    if (item2 === "Ball")
    {
        alert("We play cricket with " + item1 + " and " + item2);    
    }

    else
    {
        alert("Item 2 is incorrect.");
    }
}
else
{
    alert("Item  1 is incorrect.");
}
*/

// Arrays and Adding Removing of Elements

var cities = [];

cities[0] = "Karachi";
cities[1] = "Lahore";
cities[2] = "Rawalpindi";
cities[3] = "Faisalabad";
cities[4] = "Islamabad";
cities[5] = "Quetta";
cities[6] = "Sialkot";
cities[7] = "Hyderabad";
cities[8] = "Sukkur";
cities[9] = "Abbotabad";

cities.pop();
cities.pop();

cities.push("Sukkur", "Abbotabad");

cities.shift();
cities.shift();

cities.unshift("Karachi", "Lahore");

cities.splice(4, 3, "Peshawar", "Jamu Kashmir", "Ziarat");

var i;

for (i = 0; i < cities.length; i++)
{
    console.log((i+1) + ") city name is " + cities[i]);    
}