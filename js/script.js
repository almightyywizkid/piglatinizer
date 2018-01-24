// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
  $("#translate").click(function(){
  	var text = $("#box").val();
  	console.log(text)
	
	$("#original").html(text)
  	var translated = translateToPigLatin(text);
    $("#translated").html(translated);
  })

	function translateToPigLatin(text){
		var vowels = ["a", "e", "i", "o", "u"]
		var firstLetter = text[0];
		console.log(text)
		console.log(firstLetter)
		if(vowels.indexOf(firstLetter) > -1) {
			console.log("this word begins with a vowel")
			return text + "yay";
		} else {
            console.log("this word does not begin with a vowel")
            return text.slice(1) + firstLetter + "ay";
		}
		
	}

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


