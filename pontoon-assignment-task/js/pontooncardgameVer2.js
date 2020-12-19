/* Cody Mackenzie, 19010208, Pontoon Card Game Script.*/
  
  //Starting a script which will represent the card game 'Pontoon'
  
  //Declaring the variables that will be used within the script.
  
  var userplayer = 0;
  var houseamount = 18;
  
  
  /*Starting the 'FirstCards' function. This function acts as the head of the program. 
  This is where the user will recieve their first two random cards and be shown their total after this.*/
  function FirstCards() 
  {
    
   //Declaring the variables for the first two cards that the player will recieve.
    var randomcard1 ;
    var randomcard2 ;
   //Generating two random card numbers.
    randomcard1 = Math.floor((Math.random() * 10) + 1);
    randomcard2 = Math.floor((Math.random() * 10) + 1);
    
   //Adding the two random cards to the total.
    userplayer = randomcard1 + randomcard2;
    
   //Adding a break in the html pages text.
    document.write("</br>");
    document.write("</br>");
    
   //Sending the two random cards and the total amount of both cards two the users display.
    document.write("Your first two cards are " + randomcard1 +  " & " 
    + randomcard2 + ". This makes your total thus far equal " + userplayer + ". ");
    
   //Logging the two random cards and the total amount of both cards two the users display.
    alert("Your first two cards are " + randomcard1 +  " & " 
    + randomcard2 + ". This makes your total thus far equal " + userplayer + ". ");
    
  } //Ending Of the 'FirstCards' Function.
  
  
  /*Starting the 'Game' function. This function contains the body of the game. This is where the user will be asked if they want to draw a card. 
  If they 'draw' they will be given a random card from 1 to 10. However, if they stand, their current cards will end up being the final total.
  If the user proceeds to draw more than five card, this function will end.*/
  function Game() 
  {
  
    // 'i' represents the amount of cards that the user is holding in the hand. As they start of with two random cards this is defaulted to the number 2
    var counter = 2;
    
    //Starting a while loop within the 'Game' function.
    while (counter <= 5)
    {
      
      //Declaring the variable 'drawStick' as a 1-D array. This is a variable that will be used to let the player decide if they want to 'draw' a card or 'stick'. 
      var draw = ["draw", "stick"];
      
      do {
      //Asking the user if they would wish to draw a card or stick.
      drawStick = window.prompt("Do you wish to draw a card. If so please enter draw, or stick."); 
      
      var card = Math.floor((Math.random() * 10) + 1);
      
      //Adding the random card to the players running total.
      userplayer = userplayer + card;
      
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Adding the below text to the html as a log.
      document.write("Your card is " + card + "." + " This makes your current total " + userplayer + "." + "You have " + counter + " out of 5 cards. ");
    

      /*A'if' statement. 
      This primarily displays to the user what outcome they got while playing the game (i.e. "You win" , "You lose" , "You got 21").*/
      if(userplayer == 21)
        {
         //Adding a break in the html pages text.
          document.write("</br>");
          document.write("</br>");
          
          
         //Logging that the user got 21.
          document.write("You've got 21. ");
          
         //Displaying that they user got 21 on their display.
          alert("You've got 21. ");
          
         //Adding a break in the html pages text.
          document.write("</br>");
          document.write("</br>");
          
          //Logging the text "You Win" to the html page.
          document.write("You Win. ");
          
         //Displaying the text "You Win" on the users display.
          alert("You Win. ");
          
         //If the user gets 21, the function will end.
        return; 
        
        }
        /*If the users total gets over 21, the will go 'Bust', this means that they lose. 
        This is displayed during the else if part of the statement.*/
        else if (userplayer >= 22)
        {
         //Adding a break in the html pages text.
          document.write("</br>");
          document.write("</br>");
          
         //Logging the text "You've gone bust."
          document.write("You've gone bust. ");
          
         //Displaying the text "You've gone bust." on the users display.
          alert("You've gone bust. ");
          
          
         //Logging the text "You Lose." 
          document.write("You Lose. ");
          
         //Displaying the text.
          alert("You Lose. ");
          
          /*If the user gets over 21 before or while they get up to a total of 5 cards in their hand, 
          the while loop will be ended.*/
          counter=5;
        }
      //If the user gets below 21, their total will just be display displayed.
      else 
      {
        //Adding a break in the html pages text.
        document.write("</br>");
        document.write("</br>");
        
        //Logging the users total.
        document.write("Your total." + userplayer + ". ");
        
        //Displaying the users total on the html page.
        alert("Your total is " + userplayer + ". ");
      }//Ending the 'if' statement
      
    }while ( draw() = draw(0) );
      //Each time that the user selects 'draw' the program will loop until it reaches a total of more than 5.
      counter++;
    }
  
  }//Ending the 'Game' function
  
  /*Starting a function called 'House'. The main purpose of the function is to check if the user has beaten, drawn or lost against the house.*/
  function House() 
  {
    //Starting a 'if' statement, displaying to the user if they have drawn with the house.
    if(userplayer==houseamount)
    {
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Logging the text "You draw with the house."
      document.write("You draw with the house. ");
      
      //Displaying the text "You draw with the house."
      alert("You draw with the house.");
      
      //Ending the function
      return; 
      
    }
    else if (userplayer > house, user < 21)
    {
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Logging the text "You beat the house"
      document.write("You beat the house. ");
      
      //Displaying the text "You beat the house"
      alert("You beat the house. ");
      
      //Ending the function
      return; 
      
    }
    //Checking if the user has more than the house.
    else if (userplayer < house)
    {
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Displaying the text "The house beat you.".
      document.write("The house beat you. ");
      
      //Logging the text "The house beat you.".
      alert("The house beat you. ");
      
      //Ending the function
      return; 
    }
    //Checking if the user has equal too 21
    else if (userplayer ==21)
    {
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Logging the text "The house did not get, therefore you win!!! ".
      document.write("The house did not get 21, therefore you win!!! ");
      
      //Display the text "The house did not get 21, therefore you win!!!"
      alert("The house did not get 21, therefore you win!!! ");
      
      //Ending the program.
      stop("The program has ended");
      
    }
    //Checking if the user got below the house (18).
    else if (userplayer <18, counter <=5)
    {
      //Adding a break in the html pages text.
      document.write("</br>");
      document.write("</br>");
      
      //Logging the text "You got more than 21.".
      document.write("You got less than the house. You lose. ");
      
      //Displaying the text "You got more than 21.".
      alert("You got less than the house. You lose. ");
      
      //Ending the program.
      stop("The program has ended");
      
    }//Ending the 'if' statement
  
  }//Ending the 'House' function.
  
  //Calling the 'FirstCards' function.
  FirstCards();
  
  //Calling the 'Game' function.
  Game();
  
  //Calling the 'House' function.
  House();


//Ending the script.