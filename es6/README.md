## ES6(Session 1) Assignemnt

### Script included in html file

#### Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

Code:- 

        let array = [3, 62, 234, 7, 23, 74, 23, 76, 92];

        let filtered_arry = array.filter(el => el > 70);

        console.log(filtered_arry); 
        
        
Screenshot:- 
<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es6/screenshots/ss1.JPG" />

#### Q2. <ul> <li data-time="5:17">Flexbox Video</li> <li data-time="8:22">Flexbox Video</li> <li data-time="3:34">Redux Video</li> <li data-time="5:23">Flexbox Video</li> <li data-time="7:12">Flexbox Video</li> <li data-time="7:24">Redux Video</li> <li data-time="6:46">Flexbox Video</li> <li data-time="4:45">Flexbox Video</li> <li data-time="4:40">Flexbox Video</li> <li data-time="7:58">Redux Video</li> <li data-time="11:51">Flexbox Video</li> <li data-time="9:13">Flexbox Video</li><li data-time="5:50">Flexbox Video</li> <li data-time="5:52">Redux Video</li> <li data-time="5:49">Flexbox Video</li> <li data-time="8:57">Flexbox Video</li> <li data-time="11:29">Flexbox Video</li> <li data-time="3:07">Flexbox Video</li> <li data-time="5:59">Redux Video</li> <li data-time="3:31">Flexbox Video</li></ul>

Select all the list items on the page and convert to array. Filter for only the elements that contain the word 'flexbox' map down to a list of time strings map to an array of seconds reduce to get total using .filter and .map

Code:-

        const items = Array.from(document.querySelectorAll('ul li'));
        let filtered_arr = items.filter(el => el.outerHTML.includes("Flexbox"))
        console.log(items)
        console.log(filtered_arr)
        const total = filtered_arr.map(el => el.dataset.time).map(el => {
            let element = el.split(":")

            return (parseInt(element[0] * 60) + parseInt(element[1]))
        }).reduce((sum, el) => sum + el)

        console.log(`total seconds are : ${total}`)
        
  Screenshot:-
  
  <img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es6/screenshots/ss2.JPG" />
  
  
  #### Q3. Create a markup template using string literal const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' }; Result: "<div class="song"> <p> Dying to live — Tupac (Featuring Biggie Smalls) </p> </div> “
  
  Code: - 
  
        const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' };

        let { name, artist, featuring } = song

        document.getElementById("sng").innerHTML = (`${name} -- ${artist} (Featuring ${featuring})`)
        
        
  Screenshot:- 
  
  <img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es6/screenshots/ss3.JPG" />
  
  #### Extract all keys inside address object from user object using destructuring ?

####   const user = { firstName: ‘Sahil’, lastName: ‘Dua’, Address: { Line1: ‘address line 1’, Line2: ‘address line 2’, State: ‘Delhi’, Pin: 110085, Country: ‘India’, City: ‘New Delhi’, }, phoneNo: 9999999999 }

Code:-

        const user = { firstName: "Sahil", lastName: "Dua", Address: { Line1: "address line 1", Line2: "address line 2", State: "Delhi", Pin: 110085, Country: "India", City: "New Delhi", }, phoneNo: 9999999999 }
        const { firstName, lastName, Address: { Line1, Line2, State, Pin, Country, City }, phoneNo } = user
        console.log(`${firstName} ${lastName} lives in ${Country} ${State} , pin code:- ${Pin} . Phone Number : ${phoneNo}`)
        
        
 Screenshot:- 
 <img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es6/screenshots/ss4.JPG" />
