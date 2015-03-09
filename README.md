Submission

Email a link to your TA with a link to a repository that includes 

1) your code,

2) test cases/scripts/screenshots that demostrate each capability.

3) If you are configuring a system such as Jenkins, and have set everything up via the GUI, then you should still submits its configuration file as part of your code.

MILESTONE: TEST+ANALYSIS
------------------------
####Project Group Members : 
Vineeta Khurana (vkhuran2)
Satvik Andi (sandi)
                          
####Project Code Base in : Javascript

This project is a single page web-application. It has 3 questions, each of which has a True/False answer. Based on the selection made by the user, the output is displayed as correct / incorrect and if no selection is made, it displays "Not Yet Attempted". 

Source file : site.js
Test File : test-spec.js
Test-Runner : TestRunner.html

###Test
  
  **Step 1 :**
  In this step, we write specs to achieve basic coverage of the code functionality. We use '*Jasmine*' testing framework for javascript. We wrote specs that covered the following cases :
  
  A. For Question1, computed the response on feeding the correct value. (covers 'correct' case)
  B. For Question2, didn't give any selection to compare the answer against. (covers 'Not yet attempted' case)
  C. For Question3, computed the response on feeding the incorrect value. (covers 'incorrect' case)
  
  
  The following is the output that Jasmine gives on running the specs we have written :
  
  ![Alt text] [img1]
  
  Jasmine also generates code coverage reports such as below :
  
  ![Alt text] [img2]
  
  **Step 2 :**
  We improve the specs to increase the code coverage of our tests and achieve complete coverage. For answers 1,2 & 3 , we gave all the 3 possible test scenarios ie., correct input, incorrect input and no input(not attempted). Also, we gave inputs like Integer and Float inputs instead of the expected 'True/False' values expected. We also gave wrong selections for answers for all the three questions. 
  
  ![Alt text] [img3]
  
  ![Alt text] [img4]
  
  
  
###Analysis

  We use the '*JsLint*' tool to perform static analysis of our javascript code. The tool analyses the code on every build :
  
  ![Alt text] [img5]
  
 In Jenkins, we configure the files that JsLint has to run analysis on and the xml to which the output needs to be parsed.  
  
  ![Alt text] [img6]
  
 Jenkins, using the 'checkstyle' plugin, thus gives the following output on build :

  ![Alt text] [img7]
 
 We can also look at the details of the output in the 'Details' tab. A sample is as follows ...
  
  ![Alt text] [img8]

 The analysis.js file computes the number of functions and the cyclomatic complexity for the source file ie., site.js

  ![Alt text] [img9]
  
 
  

 [img1]: ./Images/jasmine_output_1.PNG 
 [img2]: ./Images/coverage_report_step1.PNG
 [img3]: ./Images/jasmine_output_2.PNG
 [img4]: ./Images/coverage_report_step2.PNG
 [img5]: ./Images/jslint_console_output.PNG
 [img6]: ./Images/jslint_config.PNG
 [img7]: ./Images/jslint_checkstyle_output.PNG
 [img8]: ./Images/jslint_checkstyle_output_details.PNG
 [img9]: ./Images/step4_analysis.PNG
  
