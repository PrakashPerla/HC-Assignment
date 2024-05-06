# Test Environment Setup
   - No Exclusive steps needed as the test url is accessible i.e. https://automationexercise.com/
     This is also declared as the project base url. 

# How to Run the Tests
   - Download the Project Repository and change the directory to project directory. 

   - Install Cypress using this command
     ```npm install cypress --save-dev```

   - You can run the tests in two ways one through command line where scripts configured to run head less mode with chrome browser
   
   - To Run using the method :
      1. Navigate to Project Folder in the command line and execute the below command
                         ```npm run e2e:chrome```
      2. Second Method to run the scripts using specific spec file / Browser option for detailed test execution run
                        ```npx cypress open```.
      We can choose the spec file/browser option to run the tests and can  monitor the test run.

                        
# Test/Spec Files
   - For this Assignment have used three specs i.e. cart,categories and product. These are placed undedr e2e folder.

   - Cart spec covers the Add Item to Cart/Remove Item from Cart and Verifying Cart contents.

   - Categoies spec covers the product Category Options/Category Sub Menu Navigation and Category Search Results.

   - Product spec covers navigating to products, Product Search and Product Search Results.